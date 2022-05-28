const router = require("express").Router();
const { response } = require("express");
let employee = require("../../models/pra_model/employee");

router.route("/add").post((req,res) =>{

    const EmployeeName = req.body.EmployeeName;
    const EmployeeID = req.body.EmployeeID;
    // const Position = req.body.Position;
    const Address = req.body.Address;
    const phone = req.body.phone;

    const newEmployee = new employee({
        EmployeeName,
        EmployeeID,
        // Position,
        Address,
        phone
       
    }) 
    
    newEmployee.save().then(() => {
        res.json("Employee Added")
    }).catch((err) => {
        res.json("rejected")
        console.log(err);
    }) 

})

        router.get('/view',(req,res) => {
            employee.find().exec((err,employees) => {
                if(err){
                    return res.status(400).json({
                        error:err
                    });
                }
                return res.status(200).json({
                    success:true,
                    emp:employees
                });
            });
        });


/*http://localhost:8070/employee*/
/*
router.route("/").get((req,res) => {
    
    employee.find().then(() => {
        res.json(employee)
    }).catch((err) =>{
        console.log(err)
    })

})*/

/*http://localhost:8070/employee/update/5tffaghajjajjs

router.route("/update/:id").put(async (req,res) =>{
let employeeId = req.params.id;
const{EmployeeName, EmployeeID, Address, phone} = req.body;

const updateEmployee = {
    EmployeeName,
    EmployeeID,
    Address,
    phone
   
}
    const update = await employee.findByIdAndUpdate(employeeId, updateEmployee);

    res.status(200).send({status: "Employee Updated", employee: update})
})*/


//new entered

router.route('/:id').get((req,res) => {
    let id=req.params.id;

    employee.findById(id,(err,employees) => {
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            employees
        });

    });
});








router.put('/update/:id',(req,res)=>{
    employee.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,employees)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});


router.delete('/viewn/delete/:id',(req,res)=>{
    employee.findByIdAndRemove(req.params.id).exec((err,deleteemployee)=>{
        if(err) return res.status(400).json({
            message:"Delete Unsuccessful",err
        });
        return res.json({
            message:"Delete Successful",deleteemployee
        });
    });
});




/*http://localhost:8070/employee/delete/5tffaghajjajjs*/

/*router.route("/delete/:id").delete(async (req,res) => {
    let employeeId = req.params.id;
    
    await employee.findByIdAndDelete(employeeId)
    .then(() => {
        res.status(200).send({status: "Employee Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete Employee", error: err.message});
    })
})*/

/*router.route("/get/:id").get(async (req,res) => {
    let employeeId = req.params.id;

    const employee = await employee.findById(employeeId)
    .then(() => {
        res.status(200).send({status: "Employee fetched", emplolyee: employee});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get Employee", error: err.message});
    })
})*/

//get a specific employee

router.get("/view/:id",(req,res) => {
    let employeeId = req.params.id;

    employee.findById(employeeId,(err,employees) => {
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            employees
        });
    });
});

//salary

router.post("/salary/:id", async (req, res) => {
    const id = req.params.id;
   
    
    
    try{

    var {workingHours,basicSalaryRate,otRate}  = req.body;
   
    const emp = await employee.findById(id);
    var bHours = 240;
    var OtHours = workingHours - bHours;
    var salary = 0;
    var leaveHours = 0;
    
 
    

    if(workingHours == bHours){
        salary = basicSalaryRate * bHours;
    }
    else if(workingHours > bHours){
        salary = (basicSalaryRate * bHours) + (otRate * OtHours)
    }
    else if(workingHours < bHours){

        OtHours = 0;
        leaveHours = bHours - workingHours;
        salary = (basicSalaryRate * bHours) - ((bHours - workingHours) * basicSalaryRate)
        
    }

    console.log(salary);

    emp.salary = salary;
    emp.OtHours = OtHours;
    emp.leaveHours = leaveHours;
    await emp.save();
    
    res.status(200).send({ status: "Salary Added"});

} catch (error) {

  res

    .status(500)

    .send({ status: "error", error: error.message });

}

});

     


module.exports = router;