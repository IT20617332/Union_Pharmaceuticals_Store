const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const supplierSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    nic:{
        type:String,
        required: true
    },
    rid:{
        type:String,
        required: true
    },
    rdate:{
        type:String,
        required: true
    },
    contact:{
        type:String,
        required: true
    },
    wcontact:{
        type:String,
        required: true
    },
    address:{
        type:String,
        required: true
    },
    duration:{
        type:Number,
        required: true
    },
    date:{
        type:String,
        required: true
    },
    
})
const Supplier = mongoose.model("Supplier",supplierSchema);

module.exports = Supplier;