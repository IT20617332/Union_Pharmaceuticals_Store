import React, {useState, useEffect, Component} from "react";
import axios from "axios";
import ReactToPrint from 'react-to-print';

export default class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            orders:[]
        };
    }


    componentDidMount(){
        this.vieworders();
    }

    vieworders(){
        axios.get("http://localhost:8070/deliverynote/take/report").then((res) => {
            if(res.data.success){
                this.setState({
                    orders:res.data.orders
                });
                console.log(this.state.orders)
            }
        });
    }

    //Search
    filterData(orders,searchKey){

        const result = orders.filter((orders)=>
        (orders.date.includes(searchKey)||
        orders.status.includes(searchKey))
        )
    
        this.setState({orders:result})
    }
    
    handleSearchArea = (e)=>{
        const searchKey = e.currentTarget.value;
    
        axios.get("http://localhost:8070/deliverynote/take/report").then(res=>{
            if(res.data.success){
                this.filterData(res.data.orders,searchKey)
            }
    
        });
    }

    render(){
        return(
          <div>
          <div className="container">
          <br/>
          <h3><u>All Orders</u></h3>
          
          <div className='text-right mb-2' style={{marginLeft:"86%",marginTop:"-3%"}}>
            <ReactToPrint
            trigger={()=>{
                return <button className="btn btn-danger" > Download Report </button>
            }}

            content={()=>this.componentRef}
            documentTitle = 'Delivered delivery notes report'
            pageStyle= "print"/>

          </div>
          </div>
      
          <div className="container">
          <div className="container-fluid">
          <div className="col-lg-3 mt-2 mb-2">

          <label style={{fontSize:'15px', fontWeight:700,color:"white"}}>Delivered Date : </label>  
          <input  className="form-control" type="date" placeholder="Serach" name="searchQuery"
                 onChange={this.handleSearchArea}/><br/>  
          
          <form onSubmit={this.handleSearchArea}>
            <label style={{fontSize:'15px', fontWeight:700,color:"white"}}>Status : </label>
            <select className="dropDown" onChange={this.handleSearchArea}>

            <option value="" >All</option>
            <option value="Delivered" >Delivered</option>
            <option value="On Delivery" >On Delivery</option>
            <option value="Pending" >Pending</option>

            </select>
          </form>

          </div>
            </div>

            <p>  </p>
                
            <table class="table" ref={el=>(this.componentRef=el)} style={{color:"white",border: '15px',width:"105%"}}>
            <thead>
            <tr style={{color:"white"}}>
            <th scope="col"> </th>
            <th scope="col">Delivery ID</th>
            <th scope="col">Order ID</th>
            <th scope="col">Mobile No</th>
            <th scope="col">Address</th>
            <th scope="col">Deliverer ID</th>
            <th scope="col">Deliverer</th>
            <th scope="col">Status</th>
            <th scope="col">Delivered Date</th>
        

            <th scope="col"> </th>
            </tr>
            </thead>
            <tbody>
                {this.state.orders.map((orders,index)=>(
                
                <tr>
                <th scope="row">{index+1}</th>
                <td>{orders.deliveryid}</td>
                <td>{orders.orderid}</td>
                <td>{orders.phone}</td>
                <td>{orders.address}</td>
                <td>{orders.delivererid}</td>
                <td>{orders.deliverername}</td>
                <td>{orders.status}</td>
                <td>{orders.date}</td>
                </tr>

                ))}
            </tbody>
            </table>
           </div>
          </div> 
        )
    }
}
      
      
    