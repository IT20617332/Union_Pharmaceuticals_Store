import React, {Component} from "react";
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



toast.configure()

export default class Searchorders extends Component{
  constructor(props){
    super(props);
    this.generateReport = this.generateReport.bind(this);
     this.state ={
      orders:[]
    
    };
}
refreshPage(){
 window.location.reload();   

}

//Search 
filterData(orders,searchKey){
    const result = orders.filter((orders)=>
    orders.OrderID.toLowerCase().includes(searchKey)||
    orders.CustomerID.toLowerCase().includes(searchKey)||
    orders.OrderStatus.toLowerCase().includes(searchKey)
    )
  
     this.setState({orders:result})
  }
  
  handleSearchArea = (e)=>{
    const searchKey = e.currentTarget.value;
      axios.get("http://localhost:8070/arrangedorder/Displayorders").then((res)=>{
        if(res.data.success){
        this.filterData(res.data.existingorders,searchKey)
      }
    });
  }
  
  
    
    render(){
        return(
    
        <div className="container">
        <div >
        <div className="row" style={{background: "#368BC1"}}><h3 align="center"><br/>View All Orders</h3> 
        <div className="container-fluid">      
                 
         
        
        <form className="d-flex">
        <input className="form-control" type="search" placeholder="Serach" name="searchDate" onChange={this.handleSearchArea}/> 
        
        
    
        
        </form>
        </div>
        </div>
        </div>
        </div>
        )
    }
}
