import React,{Component} from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import HeaderSans from "./HeaderSans";
import FooterSans from "./FooterSans";


const style1 = {
  marginTop:"60px",
  marginLeft:"50px",
  border:"white",
  backgroundColor:"#008B8B",
  height:"40px",
  width: "450px",
}
const style3 = {
  marginTop:"60px",
 marginLeft:"90px",
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
  marginTop:"50px",
  marginLeft:"70px",
  marginBottom:"50px",
  border:"white",
  backgroundColor:"none",
  height:"40px",
  width: "1500px",
}
const lbl = {
  fontSize:"16px",
  fontWeight:"bold"
}
const stylenav = {
  backgroundColor:"#F5F5F5"
}



export default class UpdateSupplier extends Component{

    constructor(props){
      super(props);
      this.state = {
                        name:"",
                        nic:"",
                        rid:"",
                        rdate:"",
                        contact:"",
                        wcontact:"",
                        address:"",
                        duration:"",
                        date:"",
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

        const {name,nic,rid,rdate,contact,wcontact,address,duration,date} = this.state;

        const data = {
            name:name,
            nic:nic,
            rid:rid,
            rdate:rdate,
            contact:contact,
            wcontact:wcontact,
            address:address,
            duration:duration,
            date:date
        }

        console.log(this.state)
        console.log(data)
    
        axios.put(`http://localhost:8070/supplier/update/${id}`,data).then((res)=>{

            if(res.data.success){

                alert("Supplier updated successfully")
                    window.location.href = '/view';
                this.setState(
                    {
                        name:"",
                        nic:"",
                        rid:"",
                        rdate:"",
                        contact:"",
                        wcontact:"",
                        address:"",
                        duration:"",
                        date:"" 
        

                    }
                )
            }
        }) 
    }

    componentDidMount(){

        console.log(this.props);
        const id = this.props.match.params.id;
        
    
        axios.get(`http://localhost:8070/supplier/view/${id}`).then((res)=>{
            if(res.data.success){
                console.log("Supplier Fetched");

                this.setState({
                name:res.data.suppliers.name,
                nic:res.data.suppliers.nic,
                rid:res.data.suppliers.rid,
                rdate:res.data.suppliers.rdate,
                contact:res.data.suppliers.contact,
                wcontact:res.data.suppliers.wcontact,
                address:res.data.suppliers.address,
                duration:res.data.suppliers.duration,
                date:res.data.suppliers.date
                
              });
              console.log(this.state.supplierss)
            }
      
        });
      }
      

    render(){
        return(
            <div>
              {/* <HeaderSans/> */}
              <nav className="navbar navbar-expand-lg navbar-light bg-light" >
              <div className="container-fluid" style={stylenav}>
                <div>
                  <ul className="navbar-nav" >
                    <li className="nav-item">
                      <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="/update/:id">Update Supplier</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/view">View Suppliers</a>
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
      
              
              <div className="container"style={styleC}>
      
      
                <div>
                  <form className="row g-3" noValidate>
                  <div className="col-md-6">
                    <label htmlFor="inputName" className="form-label"><label style={lbl}>Agent Name</label></label>
                    <input type="text" 
                    className="form-control" 
                    id="inputName"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputNic" className="form-label"><label style={lbl}>Company</label></label>
                    <input type="text" 
                    className="form-control" 
                    id="inputNic"
                    value={this.state.nic}
                    onChange={this.handleInputChange}
                    />
                  </div>
        
                  <div className="col-md-6">
                    <label htmlFor="inputRid" className="form-label"><label style={lbl}>Registered ID</label></label>
                    <input type="text" 
                    className="form-control" 
                    id="inputRid"
                    value={this.state.rid}
                    onChange={this.handleInputChange}
                    />
                  </div>
                  
                  <div className="col-md-6">
                    <label htmlFor="inputContact" className="form-label"><label style={lbl}>Contact Number</label></label>
                    <input type="text" 
                    className="form-control" 
                    id="inputContact"
                    defaultValue={this.state.contact}
                    onChange={(e)=>{this.setState({contact:e.target.value})}}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputWcontact" className="form-label"><label style={lbl}>Warehouse Contact Number</label></label>
                    <input type="text" 
                    className="form-control" 
                    id="inputWcontact"
                    defaultValue={this.state.wcontact}
                    onChange={(e)=>{this.setState({wcontact:e.target.value})}}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputAddress" className="form-label"><label style={lbl}>Warehouse Address</label></label>
                    <input type="text" 
                    className="form-control" 
                    id="inputAddress"   
                    placeholder="1234 Main St"
                    defaultValue={this.state.address}
                    onChange={(e)=>{this.setState({address:e.target.value})}}
                    />
                  </div>
                  <a className="btn btn-primary btn-lg" style={style3} href="/view">
                  <label style={style2} >Return</label>
                  </a>
                  <button onClick={this.onSubmit} type="submit" className="btn btn-primary btn-lg btn-block" style={style1}><label style={style2}>Save Changes</label></button>
       
                  </form>
                </div>
              </div>
              {/* <FooterSans/> */}
            </div>
          )
    }
}
