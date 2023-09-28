// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  username: String,
  city: String,
  agreeToTerms: Boolean,
});

module.exports = mongoose.model('Users', userSchema);
