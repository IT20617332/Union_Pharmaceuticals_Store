import React,{Component} from "react";
import axios from "axios";
import '../../App.css';

export default class AddDeliveryNote extends Component{

    constructor(props){
        super(props)
        this.state ={
            orderid:"",
            items:[],
            phone:"",
            address:"",
            
        }
    }
    componentDidMount(){
        this.getorderdetails()
    }

    handleInputChange = (e)=>{
        const{name,value} = e.target;
        this.setState({
           ...this.state,
           [name]:value
        })
    }

    async getorderdetails(){
        try{

            const id = this.props.match.params.id;
            axios.get(`http://localhost:8070/deliverynote/get/${id}`).then(res =>{
                if(res.data.success){
                this.setState({
                    orderid : res.data.order._id,
                    items :res.data.order.itemname1,
                    address : res.data.order.address,
                    phone : res.data.order.mobileno
                })
            }
        })

        }catch(error){
            console.log(error.message)
        }   
    }

    onSubmit = (e) => {
        e.preventDefault();
        const{
            deliveryid,
            orderid,
            items,
            phone,
            address,
            delivererid,
            deliverername,
            date,
            status
        } = this.state

       const delivery = {
        deliveryid,
        orderid,
        items,
        phone,
        address,
        delivererid,
        deliverername,
        date,
        status
        }

        console.log(delivery)
       
   

        axios.post(`http://localhost:8070/deliverynote/add`,delivery).then((res)=>{
            if(res.data){
                this.setState({
                    deliveryid:"",
                    orderid:"",
                    items:"",
                    phone:"",
                    address:"",
                    delivererid:"",
                    deliverername:"",
                    date:"",
                    status:""
                })
                alert("Delivery note successfully created!")
                window.location="/orders"
           }
        }).catch((e)=>{
            console.log(e)
        })
    }

    render() {

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
            &nbsp<h1><center>Delivery Note Form</center></h1>
        <div className="col-md-6">
            <label for="deliveryid" style={{marginLeft:"60px",color:"white"}} >Delivery ID</label>
            <input name="deliveryid" type="text" onChange={this.handleInputChange} style={{width:"600px", marginLeft:"60px"}} className="form-control" id="did"  />
        </div>
        <div className="col-md-6">
            <label for="orderid" style={{color:"white"}}  >Order ID</label>
            <input name="orderid" type="text" onChange={this.handleInputChange} value={this.state.orderid} style={{width:"600px"}} className="form-control" id="oid" readOnly/>
        </div>
        <div className="col-md-6">
            <label for="items" style={{marginLeft:"60px",color:"white"}} >Order Items</label>
            <textarea name="items" className="form-control" value={this.state.items} onChange={this.handleInputChange} style={{width:"600px", marginLeft:"60px"}} id="items" rows="3" readOnly ></textarea>
        </div>
        <div className="col-md-6">
            <label for="phone" style={{color:"white"}} >Contact No</label>
            <input name="phone" type="text" value={this.state.phone} onChange={this.handleInputChange} style={{width:"600px"}} className="form-control" id="num" pattern="[0-9].{9}" readOnly/>
        </div>
        <div className="col-md-6">
            <label for="address" style={{marginLeft:"60px",color:"white"}}>Address</label>
            <textarea name="address" className="form-control" value={this.state.address}  onChange={this.handleInputChange} style={{width:"600px", marginLeft:"60px"}} id="address" pattern="[0-9A-Za-z].{,100}" rows="2" readOnly ></textarea>
        </div>
        <div className="col-md-6">
            <label for="delivererid" style={{color:"white"}}  >Deliverer ID</label>
            <input name="delivererid" type="text" onChange={this.handleInputChange} style={{width:"600px"}} className="form-control" id="drid" />
        </div>
        <div className="col-md-6">
              <label htmlFor="date" style={{marginLeft:"60px",color:"white"}}>Delivery Date</label>
              <input name="date" type="date" onChange={this.handleInputChange} style={{width:"600px", marginLeft:"60px"}} className="form-control" id="date" />
        </div>
        <div className="col-md-6">
            <label for="deliverername" style={{color:"white"}} >Deliverer Name</label>
            <input name="deliverername" type="text" onChange={this.handleInputChange} style={{width:"600px"}} className="form-control" id="drname" />
        </div>
        <div className="col-md-6">
            <label for="status" style={{marginLeft:"60px",color:"white"}}>Status</label>
            <select name="status" id="status" onChange={this.handleInputChange} style={{width:"600px", marginLeft:"60px"}}  className="form-select" >
            <option selected>Choose...</option>
            <option value="Pending">Pending</option>
            <option value="On Delivery">On Delivery</option>
            <option value="Delivered">Delivered</option>
            
            </select>
        </div>
        <div>
            <center>
           <button type="create" style={{width:"500px",height:"50px",marginTop:"20px", backgroundColor:"#0000FF"}} onClick={this.onSubmit} className="btn btn-primary">Create</button>
           </center>
        </div>
        </form></div>

        
    )
    }
}