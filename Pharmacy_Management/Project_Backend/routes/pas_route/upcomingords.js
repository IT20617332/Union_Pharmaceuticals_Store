const router = require("express").Router();
let Upcomingord = require("../../models/pas_model/Upcomingord");

router.route("/add").post((req,res) => {

    const orderid = req.body.orderid;
    const items = req.body.items;
    const address = req.body.address;
    const phone = req.body.phone;

    const newUpcomingord = new Upcomingord({
        orderid,
        items,
        address,
        phone
    })

    newUpcomingord.save().then(() => {
        res.json("Upcoming order added!")
    }).catch((err) => {
        console.log(err);
    })
})


router.route("/").get((req,res) => {
    Upcomingord.find().then((upcomingords) =>{
        res.json(upcomingords)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async (req,res) => {
    let upId = req.params.id;
    const {orderid, items, address, phone} = req.body;

    const updateUpcomingord = {
        orderid,
        items,
        address,
        phone
    }

    const update = await Upcomingord.findByIdAndUpdate(upId, updateUpcomingord)
    .then(() => {
        res.status(200).send({status: "Upcoming order updated!"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with upcoming order"})
    })
    
})

router.route("/delete/:id").delete(async (req,res) => {
    let upId =req.params.id;

    await Upcomingord.findByIdAndDelete(upId)
    .then(() => {
        res.status(200).send({status: "Upcoming order deleted!"})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete order!", error: err.message});
    })
})

module.exports = router;