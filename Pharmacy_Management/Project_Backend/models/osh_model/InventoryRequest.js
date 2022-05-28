const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const requestSchema = new Schema({
    
    drugId:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    quantity:{
        type: String,
        required:true
    },
    supplier:{
        type: String,
        required:true
    },
    status:{
        type: String,
        required:true
    },
});

const InventoryRequests = mongoose.model('InventoryRequests',requestSchema);

module.exports = InventoryRequests;
