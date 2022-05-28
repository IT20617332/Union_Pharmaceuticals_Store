const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deliverynoteSchema = new Schema({

    deliveryid: {
        type : String,
        required : true,
    },
    orderid: {
        type : String,
        required : true,
    },
    items: {
        type : String,
        required : true,
    },
    phone: {
        type : String,
        required : true,
    },
    address: {
        type : String,
        required : true,
    },
    delivererid: {
        type : String,
        required : true,
    },
    deliverername: {
        type : String,
        required : true,
    },
    date: {
        type : String,
        required : true,
    },
    status: {
        type : String,
        required : true,
    }
});

const Deliverynote = mongoose.model("Deliverynote",deliverynoteSchema);

module.exports = Deliverynote;