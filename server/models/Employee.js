const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

// firs is the table and second is the schema
const EmployeeModel = mongoose.model("Accounts", EmployeeSchema);

module.exports = EmployeeModel;