const router = require("express").Router();
const res = require("express/lib/response");
let showcase = require("../../models/ranu_model/showcase");


router.get("/view",(req,res)=>{
    showcase.find().exec((err,showcases)=>{
        if(err){
            return res.status(400).json({
              error:err  
            });
         }
         return res.status(200).json({
             success:true,
             existingshowcases:showcases
         });
    });
});

router.delete('/post/delete/:id', (req,res)=>{
    showcase.findByIdAndRemove(req.params.id).exec((err,deletedDrug)=>{

        if(err) return res.status(400).json({
            message: "Delete Unsuccessful", err
        });

        return res.json ({
            message: "Delete Successful", deletedDrug
        });
    });
});



module.exports = router;