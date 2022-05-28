const router = require("express").Router();
let Drug = require("../../models/osh_model/Drug");

//Adding data to the system
router.route("/add").post((req,res) =>{

    const drugID = req.body.drugID;
    const drugName = req.body.drugName;
    const manufactureDate = Date(req.body.manufactureDate);
    const expireDate = Date(req.body.expireDate);
    const amount = Number(req.body.amount);
    const price = Number(req.body.price);
    const discription = req.body.discription;

    const newDrug = new Drug({

        drugID,
        drugName,
        manufactureDate,
        expireDate,
        amount,
        price,
        discription

    })

    newDrug.save().then(()=>{
        res.json("Drug Succesfully Added")
    }).catch((err)=>{
        console.log(err);
    })

})

//Fetch all data
router.get('/view',(req,res)=>{
    Drug.find().exec((err,drugs)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            sups:drugs
        });
    });
});

//Update New
router.put('/update/:id',(req,res)=>{
    Drug.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,drugs)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});


/*Update data
router.route("/update/:id").put(async (req,res) =>{
    let userId = req.params.id;
    const {drugID, drugName, manufactureDate, expireDate, amount, price, discription} = req.body;

    const updateDrug = {
        drugID,
        drugName,
        manufactureDate,
        expireDate,
        amount,
        price,
        discription
    }

    const update = await Drug.findByIdAndUpdate(userId, updateDrug).then(()=>{

        res.status(200).send({status: "Drug Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })

})*/

//Delete from system
router.delete('/post/delete/:id', (req,res) =>{
    Drug.findByIdAndRemove(req.params.id).exec((err,drugs) =>{

        if(err) return res.status(400).json({
            message: "Delete Unsuccesful", err
        });

        return res.json({
            message: "Delete Succesful", drugs
        });
    });
});


//Get data from a single user
router.get('/view/:id',(req,res)=>{

    let drugID = req.params.id;

    Drug.findById(drugID,(err,drugs)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            drugs
        });
    });


});



module.exports = router;