import React,{Component} from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


// export function withRouter(Children){
//   return(props)=>{

//      const match  = {params: useParams()};
//      return <Children {...props}  match = {match}/>
//  }
// }


export default class UpdateEmployee extends Component{

    constructor(props){
      super(props);
      this.state={
                        EmployeeName:"",
                        EmployeeID:"",
                        Position:"",
                        Address:"",
                        phone:"",
      }
    }

    handleInputChange = (e) =>{
        
      const {EmployeeName,value} = e.target;

      this.setState({
          ...this.state,
          [EmployeeName]:value
      })
  }

  onSubmit = (e) => {
    e.preventDefault();
    
    const id = this.props.match.params.id;
    const {EmployeeName,EmployeeID,Position,Address,phone} = this.state;

    const data = {
        EmployeeName:EmployeeName,
        EmployeeID:EmployeeID,
        Position:Position,
        Address:Address,
        phone:phone
    }

    console.log(this.state)

    console.log(data)
    
        axios.put(`http://localhost:8070/employee/update/${id}`,data).then((res)=>{

            if(res.data.success){

                alert("Employee updated successfully")
                    //window.location.href = '/view/:id';
                    window.location.href='/viewe';
                this.setState(
                    {
                        EmployeeName:"",
                        EmployeeID:"",
                        Position:"",
                        Address:"",
                        phone:""
                    }
                )
            }
        }) 
    }

    componentDidMount(){
        console.log(this.props);
        const id = this.props.match.params.id;
        //console.log(id);

    
        axios.get(`http://localhost:8070/employee/view/${id}`).then((res)=>{
            if(res.data.success){
              console.log("Employee Fetched");
                this.setState({
                EmployeeName:res.data.employees.EmployeeName,
                EmployeeID:res.data.employees.EmployeeID,
                Position:res.data.employees.Position,
                Address:res.data.employees.Address,
                phone:res.data.employees.phone
              });
              console.log(this.state.employeess)
            }
      
        });
      }
      

    
render(){
        

  return(

      <div>
        <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
            {/* <img src="pra_asserts/logo.jpg" width="30" class="logopa"/> */}
            <img src="../pra_asserts/logo.jpg" width="98" height="98" class="logopa"/>
            </a>
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ml-auto">
            <h1 style={{color:"white"}}>Union Pharmaceuticals</h1>&nbsp  
            &nbsp&nbsp&nbsp
            <a className="nav-link" href="/add">Create Account</a>
            <a className="nav-link" href="/viewe">View Employees</a>
            <a className="nav-link" href="/views">View Salary Details</a>
            
            </div>
            </div>
        </div>
        </nav>


        <div className="card mx-4 mx-md-5 shadow-5-strong" style={{marginTop: "55px", background: "hsla(0, 0%, 100%, 0.8)",backgroundColor:"gray",backdropFilter:` blur(20px)`, boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>

<center><h1 style={{color:"black"}}>EMPLOYEE DETAILS</h1></center>
<form noValidate>

  <br></br>
  

<div className="form-group"><center>

  <label for="EmployeeName" >Employee Name</label>
  <input type="text" className="form-control" id="EmployeeName" style={{height:"45px",width:"800px",margin:"0px",border_radius:"5px"}}
    onChange={(e)=>{this.setState({EmployeeName:e.target.value})}} defaultValue={this.state.EmployeeName} Required = 'required' />
  
  
  
</center></div>

  <br></br>

<div className="form-group"><center>
   
  <label for="EmployeeID" >Employee ID</label>
  <input type="text" className="form-control" id="EmployeeID" style={{height:"45px",width:"800px",margin:"0px",border_radius:"5px"}} readOnly
  onChange={(e)=>{this.setState({EmployeeID:e.target.value})}} defaultValue={this.state.EmployeeID}  Required = 'required'/>
  
  
</center></div>

  <br></br>


  {/* <div className="form-group"><center>
   
   <label for="Position" >Position</label>
   <input type="text" className="form-control" id="Position" 
   onChange={(e)=>{this.setState({Position:e.target.value})}} defaultValue={this.state.Position}  Required = 'required'/>
   
   
 </center></div>
 
   <br></br> */}


<div className="form-group"><center>
   
   <label for="Address" >Address</label>
   <input type="text" className="form-control" id="Address" style={{height:"45px",width:"800px",margin:"0px",border_radius:"5px"}}
   onChange={(e)=>{this.setState({Address:e.target.value})}} defaultValue={this.state.Address}  Required = 'required' />
  
   
</center></div>

   <br></br>

<div className="form-group"><center>
   
   <label for="phone" >phone</label>
   <input type="text" className="form-control" id="phone" style={{height:"45px",width:"800px",margin:"0px",border_radius:"5px"}}
   onChange={(e)=>{this.setState({phone:e.target.value})}} defaultValue={this.state.phone}  Required = 'required'/>
      
   
</center></div>

   <br></br>





<center><button  onClick={this.onSubmit} type="submit" className="btn btn-primary" style={{height:"45px",width:"250px",backgroundColor:"red",margin:"20px",border_radius:"5px"}}>Submit</button></center> 
</form>
</div>
     </div> 
  )
}
}


// export default withRouter(UpdateEmployee);