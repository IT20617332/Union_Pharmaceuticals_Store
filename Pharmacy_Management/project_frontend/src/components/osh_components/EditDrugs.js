import axios from 'axios';
import React, { Component } from 'react';
import { Link, useParams } from 'react-router-dom';

export function withRouter(Children){
    return(props)=>{
  
       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
  }

class EditDrugs extends Component{

  constructor(props){
    super(props);
    this.state={
      drugID:"",
      drugName:"",
      manufactureDate:"",
      expireDate:"",
      amount:"",
      price:"",
      discription:""
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
        const {drugID,drugName,manufactureDate,expireDate,amount,price,discription} = this.state;

        const data = {
            drugID:drugID,
            drugName:drugName,
            manufactureDate:manufactureDate,
            expireDate:expireDate,
            amount:amount,
            price:price,
            discription:discription
        }

        console.log(this.state)
        console.log(data)
    
        axios.put(`http://localhost:8070/drug/update/${id}`,data).then((res)=>{

            if(res.data.success){

                alert("Drug Updated Successfully")
                this.setState(
                    {
                        drugID:"",
                        drugName:"",
                        manufactureDate:"",
                        expireDate:"",
                        amount:"",
                        price:"",
                        discription:""

                    }
                )
            }
        }) 
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        console.log(id);

        axios.get(`http://localhost:8070/drug/view/${id}`).then((res) =>{
            if(res.data.success){

                console.log("fetched");
                this.setState({
  
                    drugID:res.data.drugs.drugID,
                    drugName:res.data.drugs.drugName,
                    manufactureDate:res.data.drugs.manufactureDate,
                    expireDate:res.data.drugs.expireDate,
                    amount:res.data.drugs.amount,
                    price:res.data.drugs.price,
                    discription:res.data.drugs.discription
                });

                console.log(this.state.drugs)
            }
        });
    }


    render() {
        return (
            <div className="container">
                <h3>Update Drugs</h3>
                <div>
                  <form className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="inputID" className="form-label">Drug ID</label>
                    <input type="text" 
                    className="form-control" 
                    id="inputID"
                    value={this.state.drugID}
                    onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputDrugName" className="form-label">Drug Name</label>
                    <input type="text" 
                    className="form-control" 
                    id="inputDrugName"
                    defaultValue={this.state.drugName}
                    onChange={(e)=>{this.setState({drugName:e.target.value})}}
                    />
                  </div>
        
                  <div className="col-md-6">
                    <label htmlFor="inputAmount" className="form-label">Amount</label>
                    <input type="text" 
                    className="form-control" 
                    id="inputAmount"
                    defaultValue={this.state.amount}
                    onChange={(e)=>{this.setState({amount:e.target.value})}}
                    />
                  </div>
                  
                  <div className="col-md-6">
                    <label htmlFor="inputMD" className="form-label">Manufacture Date</label>
                    <input type="date" 
                    className="form-control" 
                    id="inputMD"
                    defaultValue={this.state.manufactureDate}
                    onChange={(e)=>{this.setState({manufactureDate:e.target.value})}}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputED" className="form-label">Expired Date</label>
                    <input type="date" 
                    className="form-control" 
                    id="inputED"
                    defaultValue={this.state.expireDate}
                    onChange={(e)=>{this.setState({expireDate:e.target.value})}}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputPrice" className="form-label">Price</label>
                    <input type="text" 
                    className="form-control" 
                    id="inputPrice" 
                    placeholder="Rs."
                    defaultValue={this.state.price}
                    onChange={(e)=>{this.setState({price:e.target.value})}}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputDiscription" className="form-label">Discription</label>
                    <input type="text" 
                    className="form-control" 
                    id="inputDiscription" 
                    value={this.state.discription}
                    onChange={this.handleInputChange}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={this.onSubmit}>
                        &nbsp; Update
                  </button>
       
                  </form>
                
                </div>
            </div>
        )
    }
}

export default withRouter(EditDrugs);