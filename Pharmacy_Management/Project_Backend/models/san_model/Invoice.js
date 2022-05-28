const mongoose = require ('mongoose');
//const Schema = mongoose.Schema;
const invoiceSchema = new mongoose.Schema({

    drugId:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    supplier:{
        type:String,
        required: true
    },
    quantity:{
        type:Date,
        required: true
    },
    status:{
        type:String,
        required: true
    },
    date:{
        type:String,
        required: true
    },
    
})
//module.exports  = mongoose.model("Invoices",invoiceSchema);

const invoiceModel = mongoose.model("Invoices",invoiceSchema);
module.exports = invoiceModel;