import React,{useState} from "react";
import axios from "axios";
import HeaderSans from "./HeaderSans";
import FooterSans from "./FooterSans";

const stylenav = {
  backgroundColor:"#F5F5F5"
}
const style1 = {
  marginTop:"15px",
  marginLeft:"50px",
  border:"white",
  backgroundColor:"#008B8B",
  height:"40px",
  width: "450px",
}
const style2 = {
  marginTop:"15px",
  marginLeft:"90px",
  border:"white",
  backgroundColor:"#8B0000",
  height:"40px",
  width: "450px",
}
const styleL = {
  color:"white",
  fontSize:"18px",
  fontWeight:"400",
 
}
const lbl = {
  fontSize:"18px",
  fontWeight:"bold"
}
const lb2 = {
  fontSize:"14px",
  fontWeight:"600px"
}
const stylecon = {
  marginTop:"30px",
  marginBottom:"50px"
}

export default function AddSupplier(){

  const[name,setName] = useState("");
  const[nic,setNic] = useState("");
  const[rid,setRid] = useState("");
  const[rdate,setRdate] = useState("");
  const[contact,setContact] = useState("");
  const[wcontact,setWcontact] = useState("");
  const[address,setAddress] = useState("");
  const[duration,setDuration] = useState("");
  const[date,setDate] = useState("");
  

  function sendData(e){
    e.preventDefault();
    
    const newSupplier = {
      name,
      nic,
      rid,
      rdate,
      contact,
      wcontact,
      address,
      duration,
      date 
    }

    axios.post("http://localhost:8070/supplier/add",newSupplier).then(()=>{
      window.location.href = '/view';
      alert("Supplier Added");
      
    }).catch((err)=>{
      alert("Supplier Already Exists!")
    })
  }


  //function getSysDate(){
    //let today = new Date().toISOString().slice(0, 10)
  //}
 

    return(
      
      <div>
        <HeaderSans/>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid" style={stylenav}>
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/addsup">Add Supplier</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/view">View Suppliers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/inventory">Inventory Report</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/invoices">Issued Invoices</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

        
        <div className="container"style={stylecon}>


          <div>
            <form className="row g-3" onSubmit={sendData}>
            <div className="col-md-6">
              <label htmlFor="inputName" className="form-label"><label style={lbl}>Agent Name</label></label>
              <input type="text" 
              className="form-control" 
              id="inputName"
              pattern="[A-Za-z].{,30}"
              required 
              onChange={(e)=>{
              setName(e.target.value);
              }}/>
            </div>
            <div className="col-md-6">
              <label htmlFor="inputNic" className="form-label"><label style={lbl}>Company Name</label></label>
              <input type="text" 
              className="form-control" 
              id="inputNic"
              pattern="[A-Za-z].{,30}"
              required 
              onChange={(e)=>{
              setNic(e.target.value);
              }}/>
            </div>
  
            <div className="col-md-6">
              <label htmlFor="inputRid" className="form-label"><label style={lbl}>Registered ID<label style={lb2}>( in Medical Supplies Division of Ministry of Healthcare)</label></label></label>
              <input type="text" 
              className="form-control" 
              id="inputRid"
              pattern="[sidSID0-9].{8}"
              required 
              onChange={(e)=>{
              setRid(e.target.value);
              }}/>
            </div>
            <div className="col-md-6">
              <label htmlFor="inputRdate" className="form-label"><label style={lbl}>Registered Date</label></label>
              <input type="date" 
              className="form-control" 
              id="inputRdate"
              required 
              onChange={(e)=>{
              setRdate(e.target.value);
              }}/>
            </div>
            <div className="col-md-6">
              <label htmlFor="inputContact" className="form-label"><label style={lbl}>Contact Number</label></label>
              <input type="text" 
              className="form-control" 
              id="inputContact"
              pattern="[0-9].{9}"
              required 
              onChange={(e)=>{
              setContact(e.target.value);
              }}/>
            </div>
            <div className="col-md-6">
              <label htmlFor="inputWcontact" className="form-label"><label style={lbl}>Warehouse Contact Number</label></label>
              <input type="text" 
              className="form-control" 
              id="inputWcontact"
              pattern="[0-9].{9}"
              required 
              onChange={(e)=>{
              setWcontact(e.target.value);
              }}/>
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label"><label style={lbl}>Warehouse Address</label></label>
              <input type="text" 
              className="form-control" 
              id="inputAddress" 
              pattern="[0-9A-Za-z].{,100}"
              required 
              onChange={(e)=>{
              setAddress(e.target.value);
              }}/>
            </div>
            <div className="col-md-6">
              <label htmlFor="inputDuration" className="form-label"><label style={lbl}>Contract Duration</label></label>
              <select id="inputDuration" 
              className="form-select"
              required 
              onChange={(e)=>{
              setDuration(e.target.value);
              }}>
              <option defaultValue>6 </option>
              <option>12 </option>
              <option>18 </option>
              <option>48 </option>
              </select>
            </div>
             <div className="col-md-6">
              <label htmlFor="inputDate" className="form-label"><label style={lbl}>Date</label></label>
              <input type="date" 
              className="form-control" 
              id="inputDate"
              required
              onChange={(e)=>{
                setDate(e.target.value);
              }}/>
            </div> 

            <button type="reset" className="btn btn-primary btn-lg btn-block" style={style2} ><label style={styleL}>Reset</label></button>
            <button type="submit" className="btn btn-primary btn-lg btn-block" style={style1} ><label style={styleL}>Submit</label></button>
 
            </form>
          </div>
        </div>
        <FooterSans/>
      </div>
    )
}