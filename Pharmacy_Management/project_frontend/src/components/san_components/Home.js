import React,{useState} from "react";
import HeaderSans from "./HeaderSans";
import FooterSans from "./FooterSans";

const style1 = {
  marginLeft:"60px",
  border:"white",
  backgroundColor:"#00b3b3",
  height:"150px",
  width: "500px",
}
const style2 = {
  border:"white",
  backgroundColor:"#009999",
  height:"150px",
  width: "500px"
}
const style3 = {
  marginLeft:"60px",
  border:"white",
  backgroundColor:"#008080",
  height:"150px",
  width: "500px"
}
const style4 = {
  border:"white",
  backgroundColor:"#006666",
  height:"150px",
  width: "500px"
}
const l1= {
  color:"white",
  fontSize:"30px",
  fontWeight:"500",
  marginTop:"40px"
}

export default function Home(){
    return(
      <div>
        {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/addsup">Add Supplier</a>
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
      </nav> */}
      <HeaderSans/>

      <div class="container"style={{marginTop:"20px"}}>
      <div class="row g-2">
        
        <table>
          <tr>
            <td>
              <a className="btn btn-primary btn-lg" style={style1} href="/addsup">
              &nbsp;<label style={l1} >Add Suppliers </label> 
              </a>
                &nbsp;
              <a className="btn btn-primary btn-lg" style={style2} href="/view">
              &nbsp;<label style={l1} >View Suppliers</label> 
              </a> 
            </td>
          </tr>
          <tr>
            <td> 
              <a className="btn btn-primary btn-lg" style={style3} href="/inventory">
              &nbsp;<label style={l1} >Inventory Report</label> 
              </a>
                &nbsp;
              <a className="btn btn-primary btn-lg" style={style4} href="/invoices">
              &nbsp;<label style={l1} >Issued Invoices</label>
              </a>
            </td>
          </tr>
        </table>

        
      </div>
    </div>
    <FooterSans/>
    </div>
    )
}