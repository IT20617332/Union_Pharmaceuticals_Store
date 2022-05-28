const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const employeeSchema = new Schema({

    EmployeeName: {
        type: String,
        required: true
    },
    EmployeeID: {
        type: String,
        required: true
    },
    // Position: {
    //     type : String,
    //     required : true,
    // },
    Address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
   salary: {
        type: String,
        
    },
    OtHours: {
        type: String,
        
    },
    leaveHours : {
        type: String,
        
    }

})

//
const employee = mongoose.model("employee",employeeSchema);

module.exports = employee;