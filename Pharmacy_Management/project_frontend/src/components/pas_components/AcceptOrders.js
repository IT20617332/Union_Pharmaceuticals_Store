import React, {useState, useEffect, Component} from "react";
import axios from "axios";

export default class AcceptedOrders extends Component{
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
        axios.get("http://localhost:8070/deliverynote/get/orders").then((res) => {
            if(res.data.success){
                this.setState({
                    orders:res.data.orders
                });
                console.log(this.state.orders)
            }
        });
    }

    render(){
        return(

            
          <div>
          <div className="container">
          <br/>
          <h3 style={{color:"red"}}><u>Orders to be delivered</u></h3>
          <br/>
          </div>
      
          <div className="container">

            
          <table class="table" style={{color:"white",border: '15px'}}>
          <thead>
          <tr style={{color:"white"}}>
          <th scope="col"> </th>
          <th scope="col">Customer ID</th>
          <th scope="col">Name</th>
          <th scope="col">Mobile No</th>
          <th scope="col">Address</th>
       

          <th scope="col"> </th>
          </tr>
          </thead>
          <tbody>
                {this.state.orders.map((orders,index)=>(
                  <tr>
                  <th scope="row">{index+1}</th>
                  <td>{orders.cusid}</td>
                  <td>{orders.name}</td>
                  <td>{orders.mobileno}</td>
                  <td>{orders.address}</td>
                  

                  <td>

                  <a className="btn btn-danger" href={`/add/${orders._id}`} >
                  &nbsp;Add Delivery Note  
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
      
      
    