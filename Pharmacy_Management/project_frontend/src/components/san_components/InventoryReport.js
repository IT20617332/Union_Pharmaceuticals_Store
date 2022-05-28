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

const styleH4 = {
  marginLeft:"430px"
}
const style2 = {
  marginTop:"15px",
  marginLeft:"330px",
  border:"white",
  backgroundColor:"#008B8B",
  height:"40px",
  width: "450px",
}

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      requests:[]
    };
  }

componentDidMount(){
  this.viewRequests();
}

viewRequests(){
    axios.get("http://localhost:8070/requests").then((res)=>{
      if(res.data.success){
        this.setState({
          requests:res.data.existingRequests
        });
        console.log(this.state.requests)
      }

  });
}
filterData(requests,searchKey){
  const result = requests.filter((requests)=>
  requests.drugId.toLowerCase().includes(searchKey)||
  requests.description.toLowerCase().includes(searchKey)||
  requests.status.toLowerCase().includes(searchKey)||
  requests.supplier.toLowerCase().includes(searchKey)
  )
  this.setState({requests:result})
}

handleSearchArea=(e)=>{
  const searchKey = e.currentTarget.value;
  axios.get("http://localhost:8070/requests").then((res)=>{
      if(res.data.success){
        this.filterData(res.data.existingRequests,searchKey)
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
                  <a className="nav-link" href="/view">View Suppliers</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/inventory">Inventory Report</a>
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
      <p style={styleH}>Inventory Requests</p>

      <div className="container-fluid">
        <form className="d-flex">
        <input className="form-control me-2" 
        type="search" 
        style={styleSearch}
        placeholder="Search" 
        aria-label="Search"
        onChange={this.handleSearchArea}
        />
        <button className="btn btn-outline-success" type="submit" >Search</button>
        </form>
      </div>

      <p>  </p>
      
      <table className="table">
        <thead>
          <tr>
            <th scope="col"> </th>
            <th scope="col">Drug Id</th>
            <th scope="col">Description</th>
            <th scope="col">Supplier</th>
            <th scope="col">Quantity</th>
            <th scope="col">Status</th>
            <th scope="col"> </th>
            
          </tr>
        </thead>
        <tbody>
          {this.state.requests.map((requests,index)=>(
            <tr key={index}>
              <th scope="row">{index+1}</th>
              <td>{requests.drugId}</td>
              <td>{requests.description}</td>
              <td>{requests.supplier}</td>
              <td>{requests.quantity}</td>
              <td>{requests.status}</td>
              <td>    </td>
              <td>
                <a className="btn btn-info" href={`/status/${requests._id}`}>
                  <i className="far fa-edit"></i>&nbsp;Update Status  
                </a>
                &nbsp;
                <a className="btn btn-warning" href={`/create/${requests._id}`}>
                  <i className="fas fa-edit"></i>&nbsp;Create Invoice 
                </a>
                
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <FooterSans/>
  </div> 
    )}
}
