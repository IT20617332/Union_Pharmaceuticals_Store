import React, {Component} from 'react';
import axios from 'axios';
//import { useParams } from 'react-router-dom';
import '../../App.css';

 export default class NoteDetails extends Component{

        constructor(props){
            super(props);

            this.state={
                deliverynotes:[]

            };
        }
        componentDidMount(){

            const id = this.props.match.params.id;
            console.log(id);

            axios.get(`http://localhost:8070/deliverynote/view/${id}`).then((res)=>{
            
            if(res.data.success){
                this.setState({
                    deliverynotes:res.data.deliverynotes

            });

            console.log(this.state.deliverynotes);
            }
    
        });

        }


        render(){
            

            
            const {deliveryid,orderid,items,phone,address,delivererid,deliverername,date,status} = this.state.deliverynotes;
        return(
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


        &nbsp<h1><center>Delivery Note Details</center></h1>
          <div style = {{marginTop:'40px',marginLeft: '10px',color:"white"}}>
          <b><h3 style={{color: 'red'}}>Delivery ID : {deliveryid}</h3></b>
           <br></br>
           <br></br>
          
          <table style={style2}>
              <tr><td style={style2}>Order ID<br></br></td>
              <td style={style2}>{orderid}</td></tr>

              <tr><td style={style2}>Items</td>
              <td style={style2}>{items}</td></tr>

              <tr><td style={style2}>Mobile Number</td>
              <td style={style2}>{phone}</td></tr>

              <tr><td style={style2}>Address</td>
              <td style={style2}>{address}</td></tr>

              <tr><td style={style2}>Deliverer ID</td>
              <td style={style2}>{delivererid}</td></tr>

              <tr><td style={style2}>Deliverer Name</td>
              <td style={style2}>{deliverername}</td></tr>

              <tr><td style={style2}>Delivery Date</td>
              <td style={style2}>{date}</td></tr>

              <tr><td style={style2}>Status</td>
              <td style={style2}>{status}</td></tr></table> 
          <br></br>
          
        <br></br><br></br> <br></br>     
        </div> </div>  
        )
    }
}










const style2 = {
    border: "2px solid",
    padding: "9px",
    width: "40%",
    marginLeft: "200px",
    marginTop: "-20px",    
}
