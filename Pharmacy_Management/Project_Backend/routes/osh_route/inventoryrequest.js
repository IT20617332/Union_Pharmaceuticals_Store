const express = require('express');
const InventoryRequest = require('../../models/osh_model/InventoryRequest');
//const Request = require("../../models/osh_model/InventoryRequest");

const router =  express.Router();

router.post('/request/save',(req,res)=>{

    let newRequest = new InventoryRequest(req.body);

    newRequest.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success: "Request saved successfully"
        });
    });

});

router.get('/requests',(req,res)=>{
    InventoryRequest.find().exec((err,requests)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingRequests:requests
        });
    });
});

router.get('/requests/:id',(req,res)=>{

    let reqId = req.params.id;

    InventoryRequest.findById(reqId,(err,requests)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            requests
        });
    });


});

router.put('/request/update/:id',(req,res)=>{
    InventoryRequest.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,request)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});

<<<<<<< HEAD
=======
router.delete('/request/delete/:id',(req,res)=>{
    InventoryRequest.findByIdAndRemove(req.params.id).exec((err,deletedRequest)=>{
        if (err) return res.status(400).json({
            message:"Delete unsuccessfull",err
        });
        return res.json({
            message:"Delete successfull"
        });
    });
});
>>>>>>> 330373d51e42feca52ca9b1a8e07a698e96a0fba
module.exports = router;