const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const userModel = require("../models/user.model");

// Middleware to verify the JWT token
const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "Access denied" });

  try {
    const decoded = jwt.verify(token.replace("Bearer ", ""), "secretkey");
    req.user = decoded;
    res.send(req.user);
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

router.post(
  "/login",
  [body("email").isEmail(), body("password").notEmpty()],
  async (req, res) => {
    try {
      // Check for validation errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { email, password } = req.body;

      
      // Fetch users credentials from MongoDB
      const user = await userModel.findOne({ email });
      if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      // Create a token with jwt
      const token = jwt.sign({ email: user.email }, "secretkey");

      res.json({ token });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
);

router.post("/logout", verifyToken, (req, res) => {
  res.json({ message: "Logout successful" });
});
module.exports = router;
