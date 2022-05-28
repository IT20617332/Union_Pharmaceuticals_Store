import axios from 'axios';
import React, { Component } from 'react';

const style1 = {
  backgroundColor: "white",
}

export default class AddReq extends Component{

    constructor(props){
        super(props);
        this.state={
            drugId:"",
            description:"",
            quantity:"",
            supplier:"",
            status:""
        }
    }

  handleInputChange = (e) =>{
      
    const {name,value} = e.target;

    this.setState({
        ...this.state,
        [name]:value
    })
  }

  //Demo button function
  demofill = ()=>{
    
    this.setState({drugId:"0010",description:"Painkiller",quantity:"100",supplier:"Hemas",status:"Availble"})
   }

    onSubmit = (e) => {
        e.preventDefault();
        
        const {drugId,description,quantity,supplier,status} = this.state;

        const data = {
            drugId:drugId,
            description:description,
            quantity:quantity,
            supplier:supplier,
            status:status
        }

        console.log(data)
    
        axios.post("http://localhost:8070/reqDrugs/request/save",data).then((res)=>{

            if(res.data.success){

                alert("Data Added Successfully")
                this.setState(
                    {
                        drugId:"",
                        description:"",
                        quantity:"",
                        supplier:"",
                        status:""

                    }
                )
            }
        }) 
    }

    render() {
        return (
            <div className="container" >
              <br/><br/>
                <h3 align="center">Add Request</h3>
                <br/>
                <div>
                  <form className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="inputId" className="form-label">Drug ID</label>
                    <input type="text" 
                    className="form-control" 
                    id="inputId"
                    defaultValue={this.state.drugId}
                    onChange={(e)=>{this.setState({drugId:e.target.value})}}
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="inputDescription" className="form-label">Description</label>
                    <input type="text" 
                    className="form-control" 
                    id="inputDescription"
                    defaultValue={this.state.description}
                    onChange={(e)=>{this.setState({description:e.target.value})}}
                    />
                  </div>
        
                  <div className="col-md-6">
                    <label htmlFor="inputQuantity" className="form-label">Quantity</label>
                    <input type="text" 
                    className="form-control" 
                    id="inputQuantity"
                    defaultValue={this.state.quantity}
                    onChange={(e)=>{this.setState({quantity:e.target.value})}}
                    />
                  </div>
                  
                  <div className="col-md-6">
                    <label htmlFor="inputSupplier" className="form-label">Supplier</label>
                    <input type="text" 
                    className="form-control" 
                    id="inputSupplier"
                    defaultValue={this.state.supplier}
                    onChange={(e)=>{this.setState({supplier:e.target.value})}}
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="inputStatus" className="form-label">Status</label>
                    <input type="text" 
                    className="form-control" 
                    id="inputStatus"
                    defaultValue={this.state.status}
                    onChange={(e)=>{this.setState({status:e.target.value})}}
                    />
                  </div>

                  <br/>
                  <div className="col-md-6">
                  <button type="submit" className="btn btn-success" style={{align: 'right'}} onClick={this.onSubmit}>
                        &nbsp; Add
                  </button>
                  </div>

                  </form>

                  <button className="btn btn-success" type="demo" style={{marginTop:'15px'}} onClick={this.demofill} >   
                    <i className="far fa-check-square"></i>
                    &nbsp; Demo
                  </button>
                
                </div>
            </div>
        )
    }
}