const mongoose = require('mongoose');

//mongodb connection
const mongoId='mongodb+srv://johnlemma9:GraceArgens1..@digitalmarketing.ieftbiv.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoId, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;