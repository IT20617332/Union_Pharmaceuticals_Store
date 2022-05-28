const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const salaryemployeeSchema = new Schema({

    EmployeeName: {
        type: String,
        required: true
    },
    EmployeeID: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    OtHours: {
        type: String,
        required: true
    },
    OtAmountForOneHour: {
        type: String,
        required: true
    },
    MonthlySalary: {
        type: String,
        required: true
    }
})


const salaryemployee = mongoose.model("salaryemployee",salaryemployeeSchema);

module.exports = salaryemployee;