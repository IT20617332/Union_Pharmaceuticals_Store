import React,{useState} from "react";
import axios from "axios";

export default function AddEmployee(){

  const [EmployeeName,setEmployeeName] = useState("");
  const [EmployeeID,setEmployeeID] = useState("");
  // const [Position, setPosition] = useState("");
  const [Address,setAddress] = useState("");
  const [phone,setphone] = useState("");


function sendData(e) {

  e.preventDefault();
  
  const newEmployee = {

    EmployeeName,
    EmployeeID,
    // Position,
    Address,
    phone

  }

  axios.post("http://localhost:8070/employee/add",newEmployee).then(() => {
    alert("Employee Added")

    setEmployeeName("");
    setEmployeeID("");
    setAddress("");
    // setPosition("");
    setphone("");

  }).catch((err) => {
    alert(err)
  })

}


    return(

     

          <div className="container">
          <div className="card mx-4 mx-md-5 shadow-5-strong" style={{marginTop: "55px", background: "hsla(0, 0%, 100%, 0.8)",backgroundColor:"gray",backdropFilter:` blur(20px)`, boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
          <br/>
          <center><h1>ADD NEW EMPLOYEE....</h1></center>
          <form class="row g-3" onSubmit={sendData}>
          <div className="col-md-6">
          <b><label for="name" className="form-label" style={{height:"45px",width:"800px",marginLeft:"220px",border_radius:"5px"}}>Employee Name</label></b>
          <input type="text" className="form-control" id="name" style={{height:"45px",width:"800px",marginLeft:"220px",border_radius:"5px"}} placeholder="enter employee name" onChange={(e) => {
          setEmployeeName(e.target.value);
        }
          }
            />
        <br/>
        </div>

        {/* <div className="col-md-6">
        <b><label for="name" className="form-label">Employee ID</label></b> 
        <input type="text" className="form-control" id="name" style={{height:"45px",width:"800px",margin:"0px",border_radius:"5px"}} placeholder="enter employee id" onChange={(e) => {
        setEmployeeID(e.target.value);
        }
          }
            /> */}

        <div className="col-12">
        <b><label for="inputEmployeeID" className="form-label" style={{height:"45px",width:"800px",marginLeft:"220px",border_radius:"5px"}}>Employee ID</label></b>
        <center><input type="text" className="form-control" id="inputEmployeeID" style={{height:"45px",width:"800px",marginLeft:"45px",border_radius:"5px"}} placeholder="enter employee id" onChange={(e) => {
        setEmployeeID(e.target.value);
        }
          }
            /></center>
        </div>
        <br/>



        <div className="col-12">
        <b><label for="inputAddress" className="form-label" style={{height:"45px",width:"800px",marginLeft:"220px",border_radius:"5px"}}>Address</label></b>
        <input type="text" className="form-control" id="inputAddress" style={{height:"45px",width:"800px",marginLeft:"220px",border_radius:"5px"}} placeholder="1234 main st" pattern="[0-9A-Za-z].{,100}" onChange={(e) => {
        setAddress(e.target.value);
        }
          }
            />
        </div>
        <br/>

        <div className="col-md-6">
        <b><label for="name" className="form-label" style={{height:"45px",width:"800px",marginLeft:"220px",border_radius:"5px"}}>Phone</label></b>
        <input type="text" className="form-control" id="name" style={{height:"45px",width:"800px",marginLeft:"220px",border_radius:"5px"}} placeholder="enter valid phone number" pattern="[0-9].{9}" required onChange={(e) => {
        setphone(e.target.value);
        }
          }
            />
        </div>

        <center>
        <div className="col-12">
        <b><button type="submit" className="btn btn-primary" style={{height:"45px",width:"250px",backgroundColor:"red",margin:"20px",border_radius:"5px"}}>SUBMIT</button></b>
        </div>
        </center>
        
        </form>
        </div>
        </div>
    )
}

