import React, { useState, useEffect, Component } from 'react';
import axios from "axios";
import HeaderSans from "./HeaderSans";
import FooterSans from "./FooterSans";


const styleSearch = {
  width: "300px",
  marginLeft:"655px",

}
const stylenav = {
  backgroundColor:"#F5F5F5"
}
const styleH = {
  marginTop:"20px",
  marginLeft:"480px",
  //position:"center",
  border:"white",
  backgroundColor:"none",
  height:"40px",
  width: "200px",
  fontSize:"25px",
  fontWeight:"500",
}



export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      supplierss:[]
    };
  }

componentDidMount(){
  this.viewSuppliers();
}

viewSuppliers(){
    axios.get("http://localhost:8070/supplier/view").then((res)=>{
      if(res.data.success){
        this.setState({
          supplierss:res.data.sups
        });
        console.log(this.state.supplierss)
      }

  });
}
 

onDelete = (id) =>{
  if (window.confirm('Are you sure you wish to remove this supplier?')) {
  axios.delete(`http://localhost:8070/supplier/view/delete/${id}`).then((res)=>{
    alert("Deleted Successfully");
    this.viewSuppliers();
    
  })
}}

filterData(supplierss,searchKey){
  const result = supplierss.filter((suppliers)=>
  suppliers.name.toLowerCase().includes(searchKey)||
  suppliers.nic.toLowerCase().includes(searchKey)||
  suppliers.rid.toLowerCase().includes(searchKey)
  )
  this.setState({supplierss:result})
}

handleSearchArea=(e)=>{
  const searchKey = e.currentTarget.value;
  axios.get("http://localhost:8070/supplier/view").then((res)=>{
      if(res.data.success){
        this.filterData(res.data.sups,searchKey)
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
                <a className="nav-link active" aria-current="page" href="/view">View Suppliers</a>
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

    <div className="container">
      <p>  </p>
      <p style={styleH}>All Suppliers</p>

      <div className="container-fluid">
        <form className="d-flex">
        <input className="form-control me-2" 
        type="search" 
        style={styleSearch}
        placeholder="Search" 
        aria-label="Search"
        onChange={this.handleSearchArea}
        />
        <button className="btn btn-outline-success" type="submit" onClick={this.filterData}>Search</button>
        </form>
      </div>

      <p>  </p>
      
      <table className="table">
        <thead>
          <tr>
            <th scope="col"> </th>
            <th scope="col">Company Name</th>
            <th scope="col">Agent Name</th>
            <th scope="col">Registered ID</th>
            <th scope="col">Contact Number</th>
            <th scope="col">Address</th>
            <th scope="col"> </th>
            
          </tr>
        </thead>
        <tbody>
          {this.state.supplierss.map((supplierss,index)=>(
            <tr key={index}>
              <th scope="row">{index+1}</th>
              <td>{supplierss.nic}</td>
              <td>{supplierss.name}</td>
              <td>{supplierss.rid}</td>
              <td>{supplierss.contact}</td>
              <td>{supplierss.address}</td>
              <td>
                <a className="btn btn-info" href= {`/view/${supplierss._id}`}>
                  <i className="fas fa-circle-info"></i>&nbsp;View  
                </a>
                &nbsp;
                <a className="btn btn-warning" href={`/update/${supplierss._id}`}>
                  <i className="fas fa-edit"></i>&nbsp;Update  
                </a>
                &nbsp;
                <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(supplierss._id)}>
                  <i className="far fa-trash-alt"></i>&nbsp;Remove  
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <FooterSans/>
  </div> 
  )
}
}

  