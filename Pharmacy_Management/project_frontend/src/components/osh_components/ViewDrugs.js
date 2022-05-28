import React, { useState, useEffect, Component } from 'react';
import axios from "axios";

const styleSearch = {
  width: "300px",
  marginLeft:"655px",

}

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      drugss:[]
    };
  }

componentDidMount(){
  this.viewDrugs();
}

  viewDrugs(){
    axios.get("http://localhost:8070/drug/view").then((res)=>{
      if(res.data.success){
        this.setState({
            drugss:res.data.sups
        });
        console.log(this.state.drugss)
      }

  });
}


onDelete = (id) =>{
  if (window.confirm('Are you sure you wish to delete this item?')) {
    axios.delete(`http://localhost:8070/drug/post/delete/${id}`).then((res) =>{
        alert("Succesfully Deleted...!");
        this.viewDrugs();
    })
}}

filterData(drugss,searchKey){

  const result = drugss.filter((drugs) =>
    drugs.drugID.includes(searchKey)||
    drugs.drugName.toLowerCase().includes(searchKey)||
    drugs.expireDate.includes(searchKey)
  );

  this.setState({drugss:result})

}

handleSearchArea = (e) =>{

  const searchKey = e.currentTarget.value;

  axios.get("http://localhost:8070/drug/view").then((res)=>{
      if(res.data.success){
        
        this.filterData(res.data.sups,searchKey)
      }
  });
}


render(){
  return(

    <div className="container">
      <br/>
      <div align="right" class="input-group">
        
        <h2 align="center">All Drugs</h2>
        <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon"
          name="searchQuery"
          style={styleSearch}
          onChange={this.handleSearchArea}>
        </input>
        <button type="button" class="btn btn-primary">
          <i class="fas fa-search"></i>
          </button>
    
      </div>

      <br/>

      <table class="table">
        <thead>
          <tr>
            <th scope="col"> # </th>
            <th scope="col">Drug ID</th>
            <th scope="col">Drug Name</th>
            <th scope="col">Manufacture Date</th>
            <th scope="col">Expire Date</th>
            <th scope="col">Amount (Box.)</th>
            <th scope="col">Price (Rs.)</th>
            <th scope="col">Discription</th>
            <th scope="col"> </th>
            
          </tr>
        </thead>
        <tbody>
          {this.state.drugss.map((drugss,index)=>(
            <tr>
              <th scope="row">{index+1}</th>
              <td>{drugss.drugID}</td>
              <td>{drugss.drugName}</td>
              <td>{drugss.manufactureDate}</td>
              <td>{drugss.expireDate}</td>
              <td>{drugss.amount}</td>
              <td>{drugss.price}</td>
              <td>{drugss.discription}</td>
              <td>
                <a className="btn btn-warning" href={`/update/${drugss._id}`}>
                  <i className="fas fa-edit"></i>&nbsp;Update  
                </a>
                &nbsp;
                <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(drugss._id)}>
                  <i className="fas fa-trash-alt"></i>&nbsp;Delete 
                </a>
                &nbsp;
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <a className="btn btn-primary" href={`/drugreport`}>
        <i className="fa-solid fa-print"></i>&nbsp;Report  
      </a>

    </div>
  )
}
}