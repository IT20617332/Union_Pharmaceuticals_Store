const router = require("express").Router();
let PastSupplier = require("../../models/san_model/PastSupplier");

router.post('/pastsuppliers/save',(req,res)=>{

    let deletedSup = new PastSupplier(req.body);
    deletedSup.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Supplier record saved successfully."
        });
    });
});