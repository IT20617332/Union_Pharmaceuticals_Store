const router = require("express").Router();
let Invoice = require('../../models/san_model/Invoice');


router.post('/invoice/save',(req,res)=>{

    let newInvoice = new Invoice(req.body);

    newInvoice.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success: "Invoice saved successfully"
        });
    });

});

// router.route('/invoice/save').post((req,res)=>{

//     const drugId = req.body.drugId;
//     const description = req.body.description;
//     const supplier = req.body.supplier;
//     const quantity = req.body.quantity;
//     const status = req.body.status;
//     const date = req.body.date;

//     const newInvoice = new Invoice({
//         drugId,
//         description,
//         supplier,
//         quantity,
//         status,
//         date
//     })

//     newInvoice.save().then(() =>{
//         res.json("Invoice Created_2")
//     }).catch((err)=>{
//         console.log(err.message);
//     })

// });

router.get('/invoices',(req,res)=>{
    Invoice.find().exec((err,invoices)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            issuedInvoices:invoices
        });
    });
});

router.delete('/delete/:id',(req,res)=>{
    Invoice.findByIdAndRemove(req.params.id).exec((err,deletedInvoice)=>{
        if (err) return res.status(400).json({
            message:"Delete unsuccessfull",err
        });
        return res.json({
            message:"Delete succeccfull",deletedInvoice
        });
    });
});

router.put('/updatestat/:id',(req,res)=>{
    Invoice.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,invoicess)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});

router.get('/get/:id',(req,res)=>{

    let invoiceId = req.params.id;

    Invoice.findById(invoiceId,(err,invoices)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            invoices
        });
    });


});


module.exports = router;