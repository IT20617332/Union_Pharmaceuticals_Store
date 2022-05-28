import React, {Component} from "react";
import axios from "axios";
import '../../App.css';

export default class AddSalary extends Component{

    constructor (props){
        super(props);
        this.state = {
            Employee:{},
            workingHours: "",
            basicSalaryRate: "",
            otRate: ""
        };
    }

    handleInputChange = (e) => {

        const {name,value} = e.target;
    
        this.setState({
    
            ...this.state,
    
            [name]:value
    
        })
    
    }

    onSubmit = (e) =>{

        const id = this.props.match.params.id;
        
          e.preventDefault();
              const {workingHours,basicSalaryRate,otRate} = this.state;
              const data = {workingHours,basicSalaryRate,otRate};
              console.log(data)
        
              axios.post(`http://localhost:8070/employee/salary/${id}`,data)
              .then(res=>{
                      alert("Salary Added")
                      window.location = '/viewe';
              }).catch((err)=>{
                  alert(err)
              })
        
        }

    componentDidMount(){
       
        const id = this.props.match.params.id;
        //console.log(id);

    
        axios.get(`http://localhost:8070/employee/view/${id}`).then((res)=>{
            if(res.data.success){
              console.log("Employee Fetched");
                this.setState({
                Employee:res.data.employees
              });
              console.log(this.state.Employee)
            }
      
        });
    }
    render(){
    


        
       const {EmployeeName} = this.state.Employee
       const {EmployeeID} = this.state.Employee
       
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

            <div style={{margintop:'20px'}}>
           <center>
            <hr/>
            <d1 className = "row">
            <dt className="col-sm-3">{EmployeeName}</dt>
            <dt className="col-sm-3">{EmployeeID}</dt>
            </d1></center>





            <div className="card mx-4 mx-md-5 shadow-5-strong" style={{marginTop: "55px", background: "hsla(0, 0%, 100%, 0.8)",backgroundColor:"gray",backdropFilter:` blur(20px)`, boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>

                <center><h2 className="fw-bold mt-3"  style={{color: "black"}}>SALARY CALCULATE</h2></center>
                <form name="form" onSubmit={this.onSubmit}> 
                    <div style={{padding: "30px 30px 20px"}}>


                    <hr />

                    <div class="row" >


                    <div class="col">

                        <div class="form-outline">

                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" name="workingHours" id="floatingInput" placeholder="Working Hours" onChange={this.handleInputChange} value={this.setState.workingHours} required/>
                            <label for="floatingInput">Working Hours</label>
                        </div>
                        
                        </div>
                    </div>
                    <div class="col">
                    </div>
                    </div>

                    <div class="form-floating mb-3">
                        <input id="floatingInput" name="basicSalaryRate"  type="text"  class="form-control" placeholder="Basic Salary Rate"  onChange={this.handleInputChange} value={this.setState.basicSalaryRate} required/>
                        <label for="floatingInput">Basic Salary Rate</label>
                    </div>

                    <div class="form-floating mb-3">
                        <input id="floatingInput" name="otRate"  type="text"  class="form-control" placeholder="OT Rate"  onChange={this.handleInputChange} value={this.setState.otRate} required/>
                        <label for="floatingInput">OT Rate</label>
                    </div>
                    
            <button type="submit" style={{marginLeft: "85%",padding:"5px 50px",backgroundColor:"red",height:"45px"}} className="btn btn-primary btn-block mb-4">
              ADD SALARY
            </button>
    
            </div> 
          </form> 
          </div>   

            </div></div>
        )
    }
}