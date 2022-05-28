const router = require("express").Router();
let Supplier = require("../../models/san_model/Supplier");

router.post("/add",async(req,res)=>{

    try{
    const name = req.body.name;
    const nic = req.body.nic;
    const rid = req.body.rid;
    const rdate = req.body.rdate;
    const contact = (req.body.contact);
    const wcontact = (req.body.wcontact);
    const address = req.body.address;
    const duration = Number(req.body.duration);
    const date = req.body.date;

    const supplier = await Supplier.findOne({rid})
    if (supplier){
        throw new Error("Supplier Already Exists")
    }

    const newSupplier = new Supplier({
        name,
        nic,
        rid,
        rdate,
        contact,
        wcontact,
        address,
        duration,
        date
    })
  
   
    await newSupplier.save();
        res
        .status(201)
        .send({status:"Supplier Added"})
    }catch(err){
        console.log(err.message);
        res.status(500).send({err:err.message})
    }

})

//new insert
router.post('/supplier/save',(req,res)=>{

    let newSupplier = new Supplier(req.body);
    newSupplier.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Supplier added successfully."
        });
    });
});




router.get('/view',(req,res)=>{
    Supplier.find().exec((err,suppliers)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            sups:suppliers
        });
    });
});

/*router.route("/view").get((req,res)=>{

    Supplier.find().then((suppliers)=>{
        res.json(suppliers)
    }).catch((err)=>{
        console.log(err.message)
    })

})*/
router.put('/update/:id',(req,res)=>{
    Supplier.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,supplierss)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});

/*router.route("/update/:id").put(async(req,res)=>{
    let supId = req.params.id;
    const {name,nic,rid,rdate,contact,wcontact,address,duration,date} = req.body;

    const updateSupplier = {
        name,
        nic,
        rid,
        rdate,
        contact,
        wcontact,
        address,
        duration,
        date
    }
    const update = await Supplier.findByIdAndUpdate(supId,updateSupplier).then(()=>{
        res.status(200).send({status:"Supplier updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message});
    })

})*/

router.delete('/view/delete/:id',(req,res)=>{
    Supplier.findByIdAndRemove(req.params.id).exec((err,deletedSupplier)=>{
        if (err) return res.status(400).json({
            message:"Delete unsuccessfull",err
        });
        return res.json({
            message:"Delete succeccfull",deletedSupplier
        });
    });
});

/*router.route("/delete/:id").delete(async(req,res)=>{
    let supId = req.params.id;
    await Supplier.findByIdAndDelete(supId).then(()=>{
        req.status(200).send({status:"Supplier deleted"});
    }).catch((err)=>{
        console.log(err.message);
        req.status(500).send({status:"Error with delete user",error:err.message});
    })

})*/



//get a specific supplier

router.get('/view/:id',(req,res)=>{

    let supId = req.params.id;

    Supplier.findById(supId,(err,suppliers)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            suppliers
        });
    });


});

/*router.route("/get/:id").get(async(req,res)=>{
    let supId = req.params.id;
    await Supplier.findById(supId).then((supplier)=>{
        res.status(200).send({status:"Supplier fetched",supplier})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error fetching supplier details",error:err.message});
    })
})*/

module.exports = router;