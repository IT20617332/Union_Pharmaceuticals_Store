import React,{Component} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import HeaderSans from "./HeaderSans";
import FooterSans from "./FooterSans";

const stylenav = {
  backgroundColor:"#F5F5F5"
}
const style3 = {
  marginTop:"2px",
  marginLeft:"130px",
  border:"white",
  backgroundColor:"#A9A9A9",
  height:"40px",
  width: "450px",
}
const style2 = {
  color:"white",
  fontSize:"18px",
  fontWeight:"400",
 
}
const styleC = {
  marginTop:"20px",
  marginLeft:"270px",
  border:"white",
  backgroundColor:"#00CED1",
  height:"40px",
  width: "700px",
}



export default class SupplierDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            supplierss:{}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        console.log(id);

        axios.get(`http://localhost:8070/supplier/view/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    supplierss:res.data.suppliers
                });
                console.log(this.state.supplierss);
            }
        });
    }
    
    render(){
        
        const {name,nic,rid,rdate,contact,wcontact,address,duration,date} = this.state.supplierss;

        return(

        <div>
          {/* <HeaderSans/> */}
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
                    <a className="nav-link active" aria-current="page" href="/view/:id">Supplier Details</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/inventory">Inventory Report</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/invoices">Issued Invoices</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

            <div className='container'style={styleC}>
             <div >
                <h4>{nic}</h4>
                <hr/>
                <dl className="row">
                    <dt className="col-sm-3">Agent</dt>
                    <dd className="col-sm-9">{name}</dd>
                </dl>
                <dl className="row">
                    <dt className="col-sm-3">Registered ID</dt>
                    <dd className="col-sm-9">{rid}</dd>
                </dl>
                <dl className="row">
                    <dt className="col-sm-3">Registered Date</dt>
                    <dd className="col-sm-9">{rdate}</dd>
                </dl>
                <dl className="row">
                    <dt className="col-sm-3">Contact Number</dt>
                    <dd className="col-sm-9">{contact}</dd>
                </dl>
                <dl className="row">
                    <dt className="col-sm-3">Warehouse Contact Number</dt>
                    <dd className="col-sm-9">{wcontact}</dd>
                </dl>
                <dl className="row">
                    <dt className="col-sm-3">Warehouse Address</dt>
                    <dd className="col-sm-9">{address}</dd>
                </dl>
                <dl className="row">
                    <dt className="col-sm-3">Contract Duration</dt>
                    <dd className="col-sm-9">{duration} months</dd>
                </dl>
                <dl className="row">
                    <dt className="col-sm-3">Contracted Date</dt>
                    <dd className="col-sm-9">{date}</dd>
                </dl>

                <a className="btn btn-primary btn-lg" style={style3} href="/view">
                  <label style={style2} >Return</label>
                </a>
                
                
            </div>
           </div>
           {/* <FooterSans/> */}
          </div>
        )
    }
}
