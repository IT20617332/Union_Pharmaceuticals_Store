const router = require("express").Router();
let ExpiredDrug = require("../../models/osh_model/ExpiredDrug");

//Fetch all data
router.get('/view',(req,res)=>{
    ExpiredDrug.find().exec((err,expiredDrugs)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            sups:expiredDrugs
        });
    });
});


/*Get all data from the system
router.route("/").get((req,res)=>{

    ExpiredDrug.find().then((drugs)=>{
        res.json(drugs)
    }).catch((err)=>{
        console.log(err);
    })

})*/

//Adding data to the system
router.route("/add").post((req,res) =>{

    const drugID = req.body.drugID;
    const drugName = req.body.drugName;
    const expireDate = Date(req.body.expireDate);

    const newDrug = new ExpiredDrug({

        drugID,
        drugName,
        expireDate,

    })

    newDrug.save().then(()=>{
        res.json("Drug Succesfully Added")
    }).catch((err)=>{
        console.log(err);
    })

})


//Delete from system
router.delete('/post/delete/:id', (req,res) =>{
    ExpiredDrug.findByIdAndRemove(req.params.id).exec((err,deletedDrug) =>{

        if(err) return res.status(400).json({
            message: "Delete Unsuccesful", err
        });

        return res.json({
            message: "Delete Succesful", deletedDrug
        });
    });
});

module.exports = router;