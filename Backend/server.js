const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
app.use(express.static("public"));
// Set a higher payload size limit (e.g., 10MB)
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));


require('./config/database');
app.use(cors());
app.use(bodyParser.json());

app.use('/services',cors(), require('./routes/services.routes'));
app.use('/blogs',cors(), require('./routes/blogs.routes'));
app.use('/contact', require('./routes/contacts.routes'));
app.use('/admin', require('./routes/admin.routes'));
app.use('/admin/statistics', require('./routes/statistics.routes'));


app.listen(3000, () => {
console.log('Server started on port 3000');
});