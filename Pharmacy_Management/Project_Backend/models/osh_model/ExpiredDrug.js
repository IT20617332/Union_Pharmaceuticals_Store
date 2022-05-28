const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const expireSchema = new Schema({

    drugID:{
        type:String,
        required: true
    },
    drugName:{
        type:String,
        required: true
    },
    expireDate:{
        type:Date,
        required: true
    }
    
})

const ExpiredDrug = mongoose.model("ExpiredDrug",expireSchema);

module.exports = ExpiredDrug;
