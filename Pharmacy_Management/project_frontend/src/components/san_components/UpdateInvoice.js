import React,{Component} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import HeaderSans from "./HeaderSans";
import FooterSans from "./FooterSans";



const stylenav = {
  backgroundColor:"#F5F5F5"
}
const lbl = {
    fontSize:"18px",
    fontWeight:"600px",
    width:"200px",
    marginRight:"30px"
  }
const textl = {
    //fontSize:"18px",
    //fontWeight:"600px",
    width:"300px",
    marginLeft:"150px"
  }

const style3 = {
  marginTop:"2px",
  marginLeft:"70px",
  marginBottom:"100px",
  border:"white",
  backgroundColor:"#A9A9A9",
  height:"40px",
  width: "250px",
}
const style4 = {
  marginTop:"2px",
  marginLeft:"20px",
  marginBottom:"100px",
  border:"white",
  backgroundColor:"#008B8B",
  height:"40px",
  width: "250px",
}
const style2 = {
  color:"white",
  fontSize:"18px",
  fontWeight:"400",
 
}
const styleC = {
  marginTop:"50px",
  marginLeft:"270px",
  border:"white",
  backgroundColor:"#00CED1",
  height:"40px",
  width: "700px",
}

const stylebtn = {
  marginTop:"10px",
  marginLeft:"1150px"
}



export default class UpdateInvoice extends Component{

  constructor(props){
    super(props);
    this.state = {
                      drugId:"",
                      description:"",
                      supplier:"",
                      quantity:"",
                      status:"",
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

  const {drugId,description,supplier,quantity,status,date} = this.state;

  const data = {
      drugId:drugId,
      description:description,
      supplier:supplier,
      quantity:quantity,
      status:status,
      date:date
  }

  console.log(this.state)
  console.log(data)

  axios.put(`http://localhost:8070/updatestat/${id}`,data).then((res)=>{

      if(res.data.success){

          alert("Invoice updated successfully")
              window.location.href = '/invoices';
          this.setState(
              {
                drugId:"",
                description:"",
                supplier:"",
                quantity:"",
                status:"",
                date:"", 

              }
          )
      }
  }) 
}
componentDidMount(){

  console.log(this.props);
  const id = this.props.match.params.id;
  

  axios.get(`http://localhost:8070/get/${id}`).then((res)=>{
      if(res.data.success){
          console.log("Invoice Fetched");

          this.setState({
          drugId:res.data.invoices.drugId,
          description:res.data.invoices.description,
          supplier:res.data.invoices.supplier,
          quantity:res.data.invoices.quantity,
          status:res.data.invoices.status,
          date:res.data.invoices.date,
          
        });
        console.log(this.state.invoices)
      }

  });
}

    render(){

        return(

        <div >
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
                    <a className="nav-link " href="/view">View Suppliers</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link"  href="/inventory">Inventory Report</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/updatestat">Update Invoice Status</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          

            <div className='container'style={styleC} >
            
             <div>
                <h4>INVOICE</h4>
                <hr/>
                <form className="row g-3" >
                <div >
                
                <table>
                  
                <div className="col-md-6">
                  <tr>
                    <td><label htmlFor="drugId" className="form-label"><label style={lbl}>Drug ID</label></label></td>
                    <td><input type="text"
                        style={textl} 
                        className="form-control" 
                        id="inputDrugId"
                        defaultValue={this.state.drugId}
                        readOnly    
                    /></td>
                    </tr>
                </div>
                <div className="col-md-6">
                <tr>
                    <td><label htmlFor="inputDescription" className="form-label"><label style={lbl}>Name and Description</label></label></td>
                    <td><input type="text" 
                        style={textl} 
                        className="form-control" 
                        id="inputDescription"
                        defaultValue={this.state.description}
                        //onChange={this.handleInputChange}
                        readOnly    
                    /></td>
                  </tr>
                </div>

                {/* <div className="col-md-6">
                <tr>
                  <td><label htmlFor="inputQuantity" className="form-label"><label style={lbl}>Quantity</label></label></td>
                  <td><input type="text" 
                        style={textl} 
                        className="form-control" 
                        id="inputQuantity"
                        defaultValue={this.state.quantity}
                        //onChange={this.handleInputChange}
                        readOnly    
                    /></td>
                  </tr>
                </div> */}
                
                <div className="col-md-6">
                <tr>
                  <td><label htmlFor="inputSupplier" className="form-label"><label style={lbl}>Supplier</label></label></td>
                  <td><input type="text" 
                        style={textl} 
                        className="form-control" 
                        id="inputSupplier"
                        defaultValue={this.state.supplier}
                        //onChange={this.handleInputChange}
                        readOnly    
                    /></td>
                  </tr>
                </div>

                <div className="col-md-6">
                <tr>
                  <td><label htmlFor="inputStatus" className="form-label"><label style={lbl}>Request Status</label></label></td>
                  <td><select id="inputStatus" 
                        style={textl} 
                        className="form-select"
                        required 
                        onChange={(e)=>{this.setState({status:e.target.value})}}
                    >
                    <option defaultValue>{this.state.status} </option>
                    <option>Accepted </option>
                    <option>Rejected </option>
                    <option>Received </option>
                    </select></td>
                  </tr>
                </div>
                </table>

                </div> 
                <div>
                  <a className="btn btn-primary btn-lg" style={style3} href="/inventory">
                    <label style={style2} >Return</label>
                  </a>
                  {/* <a className="btn btn-primary btn-lg" style={style4}  onClick={this.onSubmit}>
                    <label style={style2} >Submit</label>
                  </a> */}
                  <button onClick={this.onSubmit} type="submit" className="btn btn-primary btn-lg btn-block" style={style4}><label style={style2}>Save Changes</label></button>
                </div>
              </form>
            </div>
           </div>
           {/* <FooterSans/> */}
          </div>
        )
    }
}
