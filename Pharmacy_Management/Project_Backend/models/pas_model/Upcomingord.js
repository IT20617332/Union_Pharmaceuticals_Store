const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const upcomingordSchema = new Schema({

    orderid : {
        type : String,
        required : true,
    },
    items : {
        type : String,
        required : true,
    },
    address: {
        type : String,
        required : true,
    },
    phone: {
        type : String,
        required: true,
    }
});

const Upcomingord = mongoose.model("Upcomingord", upcomingordSchema);

module.exports = Upcomingord;