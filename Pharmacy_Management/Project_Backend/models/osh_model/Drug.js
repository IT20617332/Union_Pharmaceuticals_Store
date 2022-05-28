const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const drugSchema = new Schema({

    drugID:{
        type:String,
        required: true
    },
    drugName:{
        type:String,
        required: true
    },
    manufactureDate:{
        type:Date,
        required: true
    },
    expireDate:{
        type:Date,
        required: true
    },
    amount:{
        type:Number,
        required: true
    },
    price:{
        type:Number,
        required: true
    },
    discription:{
        type:String,
        required: true
    },
    
})

const Drug = mongoose.model("Drug",drugSchema);

module.exports = Drug;
