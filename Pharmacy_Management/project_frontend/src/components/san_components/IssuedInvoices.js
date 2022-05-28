import React, { useState, useEffect, Component } from 'react';
import axios from "axios";
import ReactToPrint from 'react-to-print';
import HeaderSans from "./HeaderSans";
import FooterSans from "./FooterSans";

const stylenav = {
  backgroundColor:"#F5F5F5"
}
const styleSearch = {
  width: "300px",
  marginLeft:"695px",
  marginTop:"20px",
  marginBottom:"20px"

}
const styleSearch1 = {
  //width: "300px",
  //marginLeft:"655px",
  marginTop:"20px",
  marginBottom:"20px"

}
const style22 = {
  marginTop:"15px",
  //marginRight:"20px",
  height:"35px"
}
const style23 = {
  marginTop:"15px",
  //marginRight:"20px",
  height:"35px"
}
const stylebtn = {
  marginTop:"10px",
  marginLeft:"1120px"
}
const marginTop="100px"
const marginRight="150px"
const marginBottom="10px"
const marginLeft="150px"
//const textSize="550px"

const getPageMargins = () => {
  return `@page { margin: ${marginTop} ${marginRight} ${marginBottom} ${marginLeft} !important; }`;
};
export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      invoicess:[]
    };
  }
  componentDidMount(){
    this.viewInvoices();
  }
  viewInvoices(){
    axios.get("http://localhost:8070/invoices").then((res) =>{
      if(res.data.success){
        this.setState({
          invoicess:res.data.issuedInvoices
        });
        console.log(this.state.invoicess)
      }

  });
}
onDelete = (id) =>{
  if (window.confirm('Are you sure you wish to delete this invoice?')) {
  axios.delete(`http://localhost:8070/delete/${id}`).then((res)=>{
    alert("Deleted Successfully");
    this.viewInvoices();
    
  })
}}
filterData(invoicess,searchKey){
  const result = invoicess.filter((invoices)=>
  invoices.date.toLowerCase().includes(searchKey)||
  invoices.description.toLowerCase().includes(searchKey)||
  invoices.status.toLowerCase().includes(searchKey)||
  invoices.supplier.toLowerCase().includes(searchKey)
  )
  this.setState({invoicess:result})
}
handleSearchArea=(e)=>{
  const searchKey = e.currentTarget.value;
  axios.get("http://localhost:8070/invoices").then((res)=>{
      if(res.data.success){
        this.filterData(res.data.issuedInvoices,searchKey)
      }

  });
}

  render(){
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
                <a className="nav-link" href="/addsup">Add Supplier</a>
              </li>
              <li className="nav-item">
                <a className="nav-link"  href="/view">View Suppliers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/inventory">Inventory Report</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/invoices">Issued Invoices</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className='text-right mb-2'>

         
      <a  style={stylebtn} href="/repo"> Generate Report </a>
          


      <div className="container"  >
        
      <div className="container-fluid">
        <form className="d-flex">
        <input className="form-control me-2" 
        type="search" 
        style={styleSearch}
        placeholder="Search" 
        aria-label="Search"
        onChange={this.handleSearchArea}
        />
        <button className="btn btn-outline-success" type="submit" style={styleSearch1}>Search</button>
        </form>
      </div>

      {this.state.invoicess.map((invoicess,index)=>(
      
        <ol class="list-group ">
         <li class="list-group-item d-flex justify-content-between align-items-start" >
          {/* <style>{getPageMargins()}</style> */}
            <div class="ms-2 me-auto">
              
                <div class="fw-bold">Invoice {index+1}</div>
                <div>{invoicess.description}</div>
                <div>{invoicess.date}</div>
                <div>{invoicess.supplier}</div>

              </div>
              <table>
                <tr>
                  {/* <span class="badge bg-info text-dark">{invoicess.supplier}</span>&nbsp; */}
                  <span class="badge bg-success">{invoicess.status}</span> 
                </tr>
                <tr>
                  <a className="btn btn-warning" style={style22} href={`/updatestat/${invoicess._id}`}>
                  <i className="fas fa-edit"></i>Update Status  
                  </a>&nbsp;
                  <a className="btn btn-danger" style={style23} href="#" onClick={()=>this.onDelete(invoicess._id)}>
                  <i className="far fa-trash-alt"></i>Delete Invoice  
                  </a>
                </tr>
              </table>
          </li>
        </ol>
      ))}
      </div>
     </div>
     <FooterSans/>
    </div>
    )
  }
}