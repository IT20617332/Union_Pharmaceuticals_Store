import React, {useState, useEffect, Component} from "react";
import axios from "axios";

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            employeess:[]
        };
    }

    componentDidMount(){
        this.viewEmployees();
    }

    viewEmployees(){
        axios.get("http://localhost:8070/employee/view").then((res) => {
            if(res.data.success){
                this.setState({
                    employeess:res.data.emp
                });
                console.log(this.state.employeess)
            }
        });
    }


    onDelete = (id) => {
        if (window.confirm('Are you sure you wish to delete this item?')) {

        axios.delete(`http://localhost:8070/employee/viewn/delete/${id}`).then((res) => {
            alert("Deleted Successfully");
            this.viewEmployees();
        })
    }}


    filterData(employeess,searchKey){
      const result = employeess.filter((employees)=>
      employees.EmployeeName.toLowerCase().includes(searchKey)||
      employees.EmployeeID.toLowerCase().includes(searchKey)||
      employees.Address.toLowerCase().includes(searchKey)
      )
      this.setState({employeess:result})
    }
    
    handleSearchArea=(e)=>{
      const searchKey = e.currentTarget.value;
      axios.get("http://localhost:8070/employee/view").then((res)=>{
          if(res.data.success){
            this.filterData(res.data.emp,searchKey)
          }
    
      });
    }
    

    render(){
        return(
          <div>
          <div className="container">
          <br/>
          <center><h1>ALL EMPLOYEES</h1></center>
          <br/>
          </div>
      
          <div className="container">
          <p>  </p>
          <div className="container-fluid">
          <form className="d-flex">
          <input className="form-control me-2" 
          type="search" 
          placeholder="Search" 
          aria-label="Search"
          onChange={this.handleSearchArea}
          />
          <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          </div>

          <p>  </p>
            
          <table class="table" style={{marginTop: "55px", background: "hsla(0, 0%, 100%, 0.8)",backgroundColor:"gray",backdropFilter:` blur(20px)`, boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
          <thead>
          <tr>
          <th scope="col"> </th>
          <th scope="col"> Employee Name</th>
          <th scope="col">Employee ID</th>
          <th scope="col">Address</th>
          <th scope="col">phone</th>
       

          <th scope="col"> </th>
          </tr>
          </thead>
          <tbody>
                {this.state.employeess.map((employeess,index)=>(
                  <tr>
                  <th scope="row">{index+1}</th>
                  <td>{employeess.EmployeeName}</td>
                  <td>{employeess.EmployeeID}</td>
                  <td>{employeess.Address}</td>
                  <td>{employeess.phone}</td>
                  

                  <td>
                  <a className="btn btn-info" href={`/addsalary/${employeess._id}`}>
                  <i className="fas fa-circle-info"></i>&nbsp;Calc Salary  
                  </a>
                  &nbsp;
                  <a className="btn btn-warning" href={`/update/${employeess._id}`}>
                  <i className="fas fa-edit"></i>&nbsp;Update Details  
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#" onClick={() => this.onDelete(employeess._id)}>
                  <i className="far fa-trash-alt"></i>&nbsp;Remove Employee
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
      
      
    

