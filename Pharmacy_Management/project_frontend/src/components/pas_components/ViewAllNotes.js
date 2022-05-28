import React, { useState, useEffect, Component } from 'react';
import axios from "axios";

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
        deliverynotes:[]
    };
  }

componentDidMount(){
  this.viewDeliveryNote();
}

viewDeliveryNote(){
  axios.get("http://localhost:8070/deliverynote/view").then((res)=>{
    if(res.data.success){
      this.setState({
          deliverynotes:res.data.sups
      });
      console.log(this.state.deliverynotes)
    }

});
}

onDelete = (id) => {
  if (window.confirm('Are you sure you wish to delete this Delivery note?')){
  axios.delete(`http://localhost:8070/deliverynote/view/delete/${id}`).then((res)=>{
    alert("Deleted Succesfully!");
    this.viewDeliveryNote();
  })}
}


filterData(deliverynotes,searchKey){
    const result = deliverynotes.filter((deliverynote) =>
        deliverynote.status.includes(searchKey)
    )

    this.setState({deliverynotes:result})
}

handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;
    //console.log(e.currentTarget.value);
    axios.get("http://localhost:8070/deliverynote/view").then((res)=>{
      if(res.data.success){
        this.filterData(res.data.sups,searchKey)
      }

    });
}

render(){
  return(
    <div>
        

    <div className="container">
      <p>  </p>
      <h3><u>All Delivery Notes</u></h3><br/>

      
        <div className="container-fluid">
            
            <form className="d-flex">
            <input className="form-control me-2" type="search" onChange={this.handleSearchArea} 
                        placeholder="Search by delivery status" aria-label="Search"/>
            </form>
        </div>
        
      <p>  </p>
      
      <table className="table" style={{color:"white",border: '15px'}}>
        <thead>
          <tr style={{color:"white"}}>
            <th scope="col"> </th>
            <th scope="col">Delivery ID</th>
            
            <th scope="col">Order ID</th>
            <th scope="col">Deliverer Name</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
            <th scope="col"> </th>
            
          </tr>
        </thead>
        <tbody>
          {this.state.deliverynotes.map((deliverynotes,index)=>(
            <tr>
              <th scope="row">{index+1}</th>
              <td>{deliverynotes.deliveryid}</td>
              <td>{deliverynotes.orderid}</td>
              <td>{deliverynotes.deliverername}</td>
              <td>{deliverynotes.date}</td>
              <td>{deliverynotes.status}</td>
              <td>
                <a className="btn btn-info" href={`/note/${deliverynotes._id}`}>
                  <i className="fas fa-circle-info"></i>&nbsp;View Details
                </a>
                &nbsp;
                <a className="btn btn-warning" href={`/edit/${deliverynotes._id}`}>
                  <i className="fas fa-edit"></i>&nbsp;Update  
                </a>
                &nbsp;
                <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(deliverynotes._id)}>
                  <i className="fas fa-trash-alt"></i>&nbsp;Delete 
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div> 
  )
}
}