const router = require("express").Router();
let Arrangedorders = require("../../models/adi_model/Arrangedorder");
let Order = require("../../models/hesh_model/Order");

router.route("/add").post((req,res)=>{

   const name = req.body.name;
   const orderId = req.body.orderId;
   const orderItems = req.body.orderItems;
   const quantity = Number(req.body.quantity);
   const contactNumber = Number(req.body.contactNumber);
   const address = req.body.address;
   const date = req.body.date; 

   
   const newArrangedorder = new Arrangedorders({

       name,
       orderId,
       orderItems,
       quantity,
       contactNumber,
       address,
       date
   })
   newArrangedorder.save().then(()=>{
       res.json("Arranged Order Added")
   }).catch((err)=>{
       console.log(err);
   })
})

//reterive order details
router.get('/add',(req,res)=>{

    Order.find().exec((err,orders)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
    
        return res.status(200).json({
            success:true,
            ords:orders
        });
    });
});

//Accept Orders

router.post("/addStatus/:id", async (req, res) => {

    const oid = req.params.id

    const order = await Order.findById(oid)
    try {

      if(order.orderstatus== "Accepted")

      {
        throw new Error('Order already Accepted')
      }
      const orderstatus = "Accepted";

      

      if (!order) {

        throw new Error('There is no order')

      }

      order.orderstatus = orderstatus

     

      await order.save()

 

      res.status(200).send({ status: "quantity updated", order: order.orderstatus });

    } catch (error) {

      res.status(500).send({ error: error.message });

    }

  });

  //discarded orders

  router.put("/addDisStatus/:id", async (req, res) => {

    const oid = req.params.id

    try {

      const orderstatus = "Discarded";

      const order = await Order.findById(oid)

      if (!order) {

        throw new Error('There is no order')

      }

      order.orderstatus = orderstatus

     

      await order.save()

 

      res.status(200).send({ status: "quantity updated", order: order.orderstatus });

    } catch (error) {

      res.status(500).send({ error: error.message });

    }

  });


  //get acceptedorders

router.route('/displayAccOrders').get((req,res) =>{

    Order.find({orderstatus: "Accepted"}).exec((err,Order)=>{

       if(err){

            return res.status(400),json({

                error:err

            });

        }

        return res.status(200).json({

            success:true,

            ords:Order

        });

    });

});

//delete orders

router.route('/delete/:orderID').delete((req,res)=>{

    Order.findByIdAndRemove(req.params.orderID).exec((err,deleteOrder)=>{

       

        if(err) return res.status(400).json({

            message: "Delete Unsuccessfully",err

        });

       

        return res.json({

            message: "Delete Successfull",deleteOrder

        });

    });

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

 
module.exports = router;