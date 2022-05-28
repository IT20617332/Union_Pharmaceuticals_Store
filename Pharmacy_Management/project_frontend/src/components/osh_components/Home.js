import React, { useState, useEffect, Component } from 'react';
import axios from "axios";

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      showcases:[]
    };
  }

componentDidMount(){
  this.viewDrugs();
}

  viewDrugs(){
    axios.get("http://localhost:8070/showcases/view").then((res)=>{
      if(res.data.success){
        this.setState({
          showcases:res.data.existingshowcases
        });
        console.log(this.state.showcases)
      }

  });
}


onDelete = (id) =>{
  if (window.confirm('Are you sure you wish to delete this item?')) {
    axios.delete(`http://localhost:8070/showcases/post/delete/${id}`).then((res) =>{
        alert("Succesfully Deleted...!");
        this.viewDrugs();
    })
}}



render(){
  return(
    <div className="container">
      <br/>
      <h2 align="center">Drugs About to be Expired</h2>
      <br/>
      <table class="table">
        <thead>
          <tr>
            <th scope="col"> # </th>
            <th scope="col">Drug ID</th>
            <th scope="col">Drug Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Expire Date</th>
            <th scope="col"> </th>
            
          </tr>
        </thead>
        <tbody>
          {this.state.showcases.map((showcases,index)=>(
            <tr>
              <th scope="row">{index+1}</th>
              <td>{showcases.drugid}</td>
              <td>{showcases.drugname}</td>
              <td>{showcases.quantity}</td>
              <td>{showcases.EXD}</td>
              <td>
                <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(showcases._id)}>
                  <i className="fas fa-trash-alt"></i>&nbsp;Delete 
                </a>
                &nbsp;
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
}