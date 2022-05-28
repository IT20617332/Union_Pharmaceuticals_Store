const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;


mongoose.connect(URL, { 
    useUnifiedTopology: true,
    
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
} )

//sanjana
const supplierRouter = require("./routes/san_route/suppliers.js");
app.use("/supplier",supplierRouter);

const requestRouter = require("./routes/osh_route/inventoryrequest");
app.use(requestRouter);

const invoiceRouter = require("./routes/san_route/invoices");
app.use(invoiceRouter);
//adithya
const arrangedorderRouter = require("./routes/adi_route/arrangedorders.js");
app.use("/arrangedorder",arrangedorderRouter);
//prashanthi 

const employeeRouter = require("./routes/pra_route/employees");

app.use("/employee",employeeRouter);

//salary calculate prashanthi

const salaryemployeeRouter = require("./routes/pra_route/salaryemployees");

app.use("/salaryemployee",salaryemployeeRouter);
//Server connection.Pasindu
const uporderRouter = require("./routes/pas_route/upcomingords.js");
const deliverynoteRouter = require("./routes/pas_route/deliverynotes.js");
app.use("/uporder", uporderRouter);
app.use("/deliverynote", deliverynoteRouter);

app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`);
})

//All drugs details table - Oshadha 
const drugRouter = require("./routes/osh_route/drugs.js");
app.use("/drug", drugRouter);

//Inventory req report table - Oshadha
const requestRouter = require("./routes/osh_route/inventoryrequest.js");
app.use("/reqDrugs", requestRouter);

//Expired rug details table 
const showcaseRouter = require ("./routes/ranu_route/showcases.js");
app.use("/showcases", showcaseRouter);
//Customer.js  post acccess by heshan
const customerRouter = require("./routes/hesh_route/customers.js")
app.use("/customer", customerRouter);

//Order.js  get access by heshan
const orderRouter = require("./routes/hesh_route/orders.js")
app.use("/order", orderRouter);

