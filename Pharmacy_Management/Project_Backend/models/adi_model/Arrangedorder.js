const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const arrangedorderSchema = new Schema({

    name : {
         type : String,
         required : true
    },
    cusid : {
        type : String,
        required : true
    },
    itemname1 : {
        type : String,
        required : true
    },
    itemquantity1 : {
        type : String,
        required : true
    
    },

    itemname2 : {
        type : String,
        required : true
    },
    itemquantity2 : {
        type : String,
        required : true
    },  

    itemname3 : {
        type : String,
        required : true
    },
    itemquantity3 : {
        type : String,
        required : true
    },

    mobileno :{
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    date : {
        type : String,
        required : true
    },
    symptoms : {
        type : String,
        required : true
    },

})

const Arrangedorder = mongoose.model('Arrangedorder', arrangedorderSchema);

module.exports = Arrangedorder;

