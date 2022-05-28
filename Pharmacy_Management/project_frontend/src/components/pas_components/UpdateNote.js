import React,{Component} from 'react';
import axios from "axios";

 export default class UpdateNote extends Component{


    constructor(props){
        super(props);
        this.state={
          deliveryid:"",
          orderid:"",
          items:"",
          phone:"",
          address:"",
          delivererid:"",
          deliverername:"",
          date:"",
          status:"",


        }
    }



    handleInputChange = (e) =>{
        
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }



    onSubmit = (e) => {

        e.preventDefault();

        const id = this.props.match.params.id;

        const {deliveryid,orderid,items,phone,address,delivererid,deliverername,date,status} = this.state;

        const data ={
          deliveryid:deliveryid,
          orderid:orderid,
          items:items,
          phone:phone,
          address:address,
          delivererid:delivererid,
          deliverername:deliverername,
          date:date,
          status:status

        }


        console.log(this.state)
        console.log(data)

        axios.put(`http://localhost:8070/deliverynote/update/${id}`,data).then((res) => {
        if(res.data.success){
          alert("Updated successfully!")
          window.location = '/view';
          
          this.setState({
            deliveryid:"",
            orderid:"",
            items:"",
            phone:"",
            address:"",
            delivererid:"",
            deliverername:"",
            date:"",
            status:"",
          })
           
        }
        })
    }



    componentDidMount(){
        console.log(this.props);
        const id = this.props.match.params.id;
       

      axios.get(`http://localhost:8070/deliverynote/${id}`).then((res) => {
        if(res.data.success){
          this.setState({
            deliveryid:res.data.deliverynotes.deliveryid,
            orderid:res.data.deliverynotes.orderid,
            items:res.data.deliverynotes.items,
            phone:res.data.deliverynotes.phone,
            address:res.data.deliverynotes.address,
            delivererid:res.data.deliverynotes.delivererid,
            deliverername:res.data.deliverynotes.deliverername,
            date:res.data.deliverynotes.date,
            status:res.data.deliverynotes.status,            
          });
            
          console.log(this.state.deliverynotes);
        }
      });
    }




    render(){
        

      return (
        <div>
        <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
            <img src="../pas_asserts/logo.jpg" width="98" height="98" class="logop"/>
            </a>
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ml-auto">
            <h1 style={{color:"white"}}>Union Pharmaceuticals</h1>&nbsp  
            &nbsp&nbsp&nbsp<a className="nav-link" aria-current="page" href="/aa">Home</a>
            <a className="nav-link" href="/orders">Accepted Orders</a>
            <a className="nav-link" href="/view">Delivery Notes</a>
            <a className="nav-link" href="/search">Delivery Report</a>
            
            </div>
            </div>
        </div>
        </nav>



        <form className="row g-3">
            &nbsp<h1><center>Delivery Note Update Form</center></h1>
        <div className="col-md-6">
            <label for="deliveryid" style={{marginLeft:"60px",color:"white"}} >Delivery ID</label>
            <input type="text" style={{width:"600px", marginLeft:"60px"}} className="form-control" disabled placeholder="Enter Delivery ID"
          onChange={this.handleInputChange} Value={this.state.deliveryid} Required = 'required'/>
        </div>
        <div className="col-md-6">
            <label for="orderid" style={{color:"white"}} >Order ID</label>
            <input type="text" style={{width:"600px"}} className="form-control" disabled placeholder="Enter Order ID"
          onChange={this.handleInputChange} Value={this.state.orderid} Required = 'required'/>
        </div>
        <div className="col-md-6">
            <label for="items" style={{marginLeft:"60px",color:"white"}} >Order Items</label>
            <input type="text" style={{width:"600px", marginLeft:"60px"}} className="form-control" id="items" disabled placeholder="Enter Items"
          onChange={this.handleInputChange} Value={this.state.items} Required = 'required'/>
        </div>
        <div className="col-md-6">
            <label for="phone" style={{color:"white"}} >Contact No</label>
            <input type="text" style={{width:"600px"}} className="form-control" disabled placeholder="Enter Mobile number"
          onChange={this.handleInputChange} Value={this.state.phone} Required = 'required'/>
        </div>
        <div className="col-md-6">
            <label for="address" style={{marginLeft:"60px",color:"white"}}>Address</label>
            <input type="text" className="form-control" style={{width:"600px", marginLeft:"60px"}} disabled placeholder="Enter Address"
          onChange={this.handleInputChange} Value={this.state.address} Required = 'required'/>
        </div>
        <div className="col-md-6">
            <label for="delivererid" style={{color:"white"}} >Deliverer ID</label>
            <input type="text" style={{width:"600px"}} className="form-control" placeholder="Enter Deliverer ID"
          onChange={(e)=>{this.setState({delivererid:e.target.value})}} defaultValue={this.state.delivererid} Required = 'required'/>
        </div>
        <div className="col-md-6">
              <label htmlFor="date" style={{marginLeft:"60px",color:"white"}}>Delivery Date</label>
              <input type="date" style={{width:"600px", marginLeft:"60px"}} className="form-control" placeholder="Enter Date"
          onChange={(e)=>{this.setState({date:e.target.value})}} defaultValue={this.state.date} Required = 'required'/>
        </div>
        <div className="col-md-6">
            <label for="deliverername" style={{color:"white"}} >Deliverer Name</label>
            <input type="text" style={{width:"600px"}} className="form-control" placeholder="Enter Deliverer Name"
          onChange={(e)=>{this.setState({deliverername:e.target.value})}} defaultValue={this.state.deliverername} Required = 'required'/>
        </div>
        <div className="col-md-6">
            <label for="status" style={{marginLeft:"60px",color:"white"}}>Status</label>
            <select id="status" style={{width:"600px", marginLeft:"60px"}}  className="form-select" placeholder="Enter Status"
          onChange={(e)=>{this.setState({status:e.target.value})}} defaultValue={this.state.status} Required = 'required'>
            <option selected>Choose...</option>
            <option value="Pending">Pending</option>
            <option value="On Delivery">On Delivery</option>
            <option value="Delivered">Delivered</option>
            
            </select>
        </div>
        <div>
            <center>
           <button onClick={this.onSubmit} type="submit" style={{width:"500px",height:"50px",marginTop:"20px", backgroundColor:"#0000FF"}} className="btn btn-primary">Submit</button>
           </center>
        </div>
        </form></div>
        
      
      )
    }
}
