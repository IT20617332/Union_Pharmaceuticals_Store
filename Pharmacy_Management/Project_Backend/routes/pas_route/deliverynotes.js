const Order = require("../../models/hesh_model/Order");

const router = require("express").Router();
let Deliverynote = require("../../models/pas_model/Deliverynote");

router.route("/add").post((req,res) => {

    const deliveryid = req.body.deliveryid;
    const orderid = req.body.orderid;
    const items = req.body.items;
    const phone = req.body.phone;
    const address = req.body.address;
    const delivererid = req.body.delivererid;
    const deliverername = req.body.deliverername;
    const date = req.body.date;
    const status = req.body.status;

    const newDeliveynote = new Deliverynote({
        deliveryid,
        orderid,
        items,
        phone,
        address,
        delivererid,
        deliverername,
        date,
        status
    })

    newDeliveynote.save().then(() => {
        res.json("Delivery note added!")
    }).catch((err) => {
        console.log(err);
    })
})

router.get('/view',(req,res)=>{
    Deliverynote.find().exec((err,deliverynotes)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            sups:deliverynotes
        });
    });
});

/*router.route("/").get((req,res) => {
    Deliverynote.find().then((deliverynotes) =>{
        res.json(deliverynotes)
    }).catch((err)=>{
        console.log(err)
    })
})*/

// router.route("/update/:id").put(async (req,res) => {
//     let noteId = req.params.id;
//     const {deliveryid, orderid, items, phone, address, delivererid, deliverername, date, status} = req.body;

//     const updateDeliverynote = {
//         deliveryid,
//         orderid,
//         items,
//         phone,
//         address,
//         delivererid,
//         deliverername,
//         date,
//         status
//     }

//     const update = await Deliverynote.findByIdAndUpdate(noteId, updateDeliverynote)
//     .then(() => {
//         res.status(200).send({status: "Delivery note updated!"})
//     }).catch((err) => {
//         console.log(err);
//         res.status(500).send({status: "Error with delivery note!"})
//     })
    
// })

router.delete('/view/delete/:id',(req,res)=>{
    Deliverynote.findByIdAndRemove(req.params.id).exec((err,deletedDeliverynote) =>{
        if(err) return res.status(400).json({
            message: "Delete Unsuccessful",err
        });
        return res.json({
            message: "Delete Successful",deletedDeliverynote
        });
    });

});

router.route(`/update/:id`).put((req,res)=>{

    Deliverynote.findByIdAndUpdate(
     req.params.id,{
          $set:req.body
      },
      (err,deliverynotes)=>{
          if(err){
          return res.status(400).json({error:err});
          }
          return res.status(200).json({
              success: "Updated Successfully"
          });
      });
  });

  router.get(`/view/:id`,(req,res)=>{

    let noteId = req.params.id;

    Deliverynote.findById(noteId,(err,deliverynotes)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            deliverynotes
        });
    });
});


// router.route("/delete/:id").delete(async (req,res) => {
//     let noteId =req.params.id;
//     await Deliverynote.findByIdAndDelete(noteId)
//     .then(() => {
//         res.status(200).send({status: "Delivery note deleted!"})
//     }).catch((err) => {
//         console.log(err.message);
//         res.status(500).send({status: "Error with delete delivery note!", error: err.message});
//     })
// })



/*router.route("/get/:id").get(async (req, res) => {
    let noteId =req.params.id;

    await Deliverynote.findById(noteId)
    .then((deliverynotes) => {
        res.status(200).send({status: "Delivery Note fetched!", deliverynotes})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get delivery note!", error: err.message});
    })
})*/
router.route('/:id').get((req,res)=>{

    let id= req.params.id;

    Deliverynote.findById(id,(err,deliverynotes)=>{
        if(err){
            return res.status(400).json({success:false,err});

        }
        return res.status(200).json({
            success:true,
            deliverynotes
        });
    });
});

//reterive order details

router.get("/get/orders", async (req, res) => {

    try {

      const orders = await Order.find({orderstatus:"Accepted"})

      res.status(201)

      res.send({ success: "orders fetched", orders: orders});

    } catch (error) {

      res.status(500)

      res.send({ status: "Error", error: error.message });

    }

});


router.get("/get/:id", async (req, res) => {

    const id = req.params.id
    try {

      const order = await Order.findById(id)

      res.status(201)

      res.send({ success: "orders fetched", order: order});

    } catch (error) {

      res.status(500)

      res.send({ status: "Error", error: error.message });

    }

});


router.get("/get/delivered/asd", async (req, res) => {

    try {

      //const date1 = req.body;
      console.log(req.body.date1);  
      const orders = await Deliverynote.find({status:"Delivered",date:req.body.date})

      res.status(201)

      res.send({ success: "orders fetched", orders: orders});

    } catch (error) {

      res.status(500)

      res.send({ status: "Error", error: error.message });

    }

});

router.get("/take/report", async (req, res) => {

    try {

      const orders = await Deliverynote.find()

      res.status(201)

      res.send({ success: "orders fetched", orders: orders});

    } catch (error) {

      res.status(500)

      res.send({ status: "Error", error: error.message });

    }

});


module.exports = router;