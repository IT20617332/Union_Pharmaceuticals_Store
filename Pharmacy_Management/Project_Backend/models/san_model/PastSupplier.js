const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const pastSupplierSchema = new Schema({
    
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
        type:Date,
        
    },
    contact:{
        type:String,
        
    },
    wcontact:{
        type:String,
        
    },
    address:{
        type:String,
        
    },
    duration:{
        type:Number,
        
    },
    date:{
        type:Date,
        
    },
    
})
const PastSupplier = mongoose.model("PastSupplier",pastSupplierSchema);

module.exports = PastSupplier;