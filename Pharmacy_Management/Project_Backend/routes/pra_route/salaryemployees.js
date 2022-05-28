const router = require("express").Router();
const { response } = require("express");
let salaryemployee = require("../../models/pra_model/salaryemployee");




// router.post("/salary/:id", async (req, res) => {
//     const id = req.params.id;
   
    
    
//     try{

//     var workingHours = req.body;
//     var basicSalaryRate = req.body;
//     var otRate = req.body;
//     const emp = await employee.findById(id);
//     var bHours = 240;
//     var OtHours = workingHours - bHours;
//     var salary;
 
    

//     if(workingHours == bHours){
//         salary = basicSalaryRate * bHours;
//     }
//     else if(workingHours > bHours){
//         salary = (basicSalaryRate * bHours) + (otRate * OtHours)
//     }
//     else if(workingHours < bHours){
//         salary = (basicSalaryRate * bHours) - (bHours - workingHours)
//     }

//     console.log(salary);
//     emp.salary = salary;
//     await emp.save();
//     res.status(200).send({ status: "Salary Added"});

// } catch (error) {

//   res

//     .status(500)

//     .send({ status: "error", error: error.message });

// }

// });


router.route("/add").post((req,res) =>{

    const EmployeeName = req.body.EmployeeName;
    const EmployeeID = req.body.EmployeeID;
    const Address = req.body.Address;
    const phone = req.body.phone;
    const OtHours = req.body.OtHours;
    const OtAmountForOneHour = req.body.OtAmountForOneHour;
    const MonthlySalary = req.body.MonthlySalary;

    const newsalaryEmployee = new salaryemployee({
        EmployeeName,
        EmployeeID,
        Address,
        phone,
        OtHours,
        OtAmountForOneHour,
        MonthlySalary
       
    }) 
    
    newsalaryEmployee.save().then(() => {
        res.json("Employee salary Added")
    }).catch((err) => {
        res.json("rejected")
        console.log(err);
    }) 

})

router.get('/view2',(req,res) => {
    salaryemployee.find().exec((err,salaryemployees) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            semp:salaryemployees
        });
    });
});


/*http://localhost:8070/salaryemployee*/

/*router.route("/").get((req,res) => {
    
    employee.find().then(() => {
        res.json(salaryemployee)
    }).catch((err) =>{
        console.log(err)
    })

})*/


//new update

router.route('/:id').get((req,res) => {
    let id=req.params.id;

    employee.findById(id,(err,salaryemployees) => {
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            salaryemployees
        });

    });
});


router.put('/update/:id',(req,res)=>{
    salaryemployee.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,salaryemployees)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});



/*http://localhost:8070/salaryemployee/update/5tffaghajjajjs

router.route("/update/:id").put(async (req,res) =>{
let employeeId = req.params.id;
const{EmployeeName, EmployeeID, Address, phone, OtHours, OtAmountForOneHour, MonthlySalary} = req.body;

const updatesalaryEmployee = {
    EmployeeName,
    EmployeeID,
    Address,
    phone,
    OtHours,
    OtAmountForOneHour,
    MonthlySalary
}
    const update = await salaryemployee.findByIdAndUpdate(employeeId, updatesalaryEmployee);

    res.status(200).send({status: "Employee Updated", salaryemployee: update})
})*/


/*http://localhost:8070/salaryemployee/delete/5tffaghajjajjs

router.route("/delete/:id").delete(async (req,res) => {
    let employeeId = req.params.id;
    
    await salaryemployee.findByIdAndDelete(employeeId)
    .then(() => {
        res.status(200).send({status: "Employee Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete Employee", error: err.message});
    })
})*/


router.delete('/viewm/delete/:id',(req,res)=>{
    salaryemployee.findByIdAndRemove(req.params.id).exec((err,deletesalaryemployee)=>{
        if(err) return res.status(400).json({
            message:"Delete Unsuccessful",err
        });
        return res.json({
            message:"Delete Successful",deletesalaryemployee
        });
    });
});


/*router.route("/get/:id").get(async (req,res) => {
    let employeeId = req.params.id;

    const salaryemployee = await salaryemployee.findById(employeeId)
    .then(() => {
        res.status(200).send({status: "Employee fetched", salaryemployee: salaryemployee});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get Employee", error: err.message});
    })
})*/

//get a specifoc salary employee

router.get("/view2/:id",(req,res) => {
    let employeeId = req.params.id;

    salaryemployee.findById(employeeId,(err,salaryemployees) => {
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            salaryemployees
        });
    });
});

module.exports = router;