import React, {Component} from "react";
import axios from 'axios';


const l1= {
  color:"black",
  fontSize:"35px",
  fontWeight:"600",
  marginTop:"18px"
}

const l2= {
  color:"black",
  fontSize:"15px",
  fontWeight:"700",
  marginTop:"25px"
}

const l3= {
  color:"black",
  fontSize:"14px",
  fontWeight:"600",
  marginTop:"25px"
}

const style1={
  marginLeft:"60px",
  marginRight:"60px",
  //border:"1px solid black",
  bordercolor:"solid black",
  marginTop:"-5px"
  }



export default class Addarrangedorder extends Component{
  constructor(props){
    super(props);
    this.state={
      order:{},
     orders:[]
     }
    
}



//Retrieve orders

componentDidMount(){
  this.retrieveorders();
}
  retrieveorders(){
    axios.get("http://localhost:8070/arrangedorder/add").then(res=>{
    if(res.data.success){
        this.setState({
          orders:res.data.ords
        });
        console.log(this.state.orders);
    }
  });
}

//Accept Button Link
onAccept = (_id)=>{
  axios.get(`http://localhost:8070/arrangedorder/get/${_id}`).then(res=>{
    if(res.data.success){
        this.setState({
          order:res.data.order
        });
        console.log(this.state.order.orderstatus)      
    }
  
  
    if(this.state.order.orderstatus=="pending...") {
      if (window.confirm('Are you sure you wish to accept this item?')) {
      axios.put(`http://localhost:8070/arrangedorder/addStatus/${_id}`).then((res)=>{
        alert("Accepted Successfully");
        //toast.warning('Order Successfully',{position:toast.POSITION.TOP_CENTER});
     this.retrieveorders();
  })}
    } else{
      alert("Order Already Accepted")
    }
  }); 
     
}

//Discard Button Link
onDiscard = (_id)=>{
  if (window.confirm('Are you sure you wish to Discard this item?')) {
  axios.put(`http://localhost:8070/arrangedorder/addDisStatus/${_id}`).then((res)=>{
     alert("Discarded Successfully");
     //toast.warning('Order Deleted Successfully',{position:toast.POSITION.TOP_CENTER});
     this.retrieveorders();
  })
}}

//Delete Button Link
onDelete = (_id)=>{
  if (window.confirm('Are you sure you wish to Delete this item?')) {
  axios.delete(`http://localhost:8070/arrangedorder/delete/${_id}`).then((res)=>{
     alert("Deleted Successfully");
     //toast.warning('Order Deleted Successfully',{position:toast.POSITION.TOP_CENTER});
     this.retrieveorders();
  })
}}

//Search 
filterData(orders,searchKey){
  const result = orders.filter((orders)=>
  orders.date.includes(searchKey)
  
  )

   this.setState({orders:result})
}

handleSearchArea = (e)=>{
  const searchKey = e.currentTarget.value;
    axios.get("http://localhost:8070/arrangedorder/add").then((res)=>{
      if(res.data.success){
      this.filterData(res.data.ords,searchKey)
    }
  });
}

render() {
    return(

      <div >
      <div >
      <div><h3 align="center" style={l1}><br/>RECEIVED ORDER DETAILS.</h3> 
      <div >      
      </div>           
     
   <br/>
      
       </div></div>  

    

      <div style={style1}>  
    <form className="d-flex" >
        <input className="form-control" type="Search" placeholder="Search" name="searchDate" onChange={this.handleSearchArea}/> 
    </form>         
   </div> 
 <br/>
    
      
                            
    <table  style={{marginTop:'30px',background: "#cccccc"}} >
    <thead>
      <tr bgcolor="grey" align='center'>
           <th scope = "col" style={l2}>Order ID</th><br/>
           <th scope = "col" style={l2}>Customer ID</th><br/>
           <th scope = "col" style={l2}>Name</th><br/>
           <th scope = "col" style={l2}>Item Name1</th><br/>
           <th scope = "col" style={l2}>Item Quantity1</th> <br/>
           <th scope = "col" style={l2}>Item Name2</th><br/>
           <th scope = "col" style={l2}>Item Quantity2</th><br/>  
           <th scope = "col" style={l2}>Item Name3</th><br/>
           <th scope = "col" style={l2}>Item Quantity3</th><br/>
           <th scope = "col" style={l2}>Mobile No</th><br/>
           <th scope = "col" style={l2}>Address</th> <br/>  
           <th scope = "col" style={l2}>Date</th><br/>
           <th scope = "col" style={l2}>Symptoms</th><br/>
           <th scope = "col" style={l2}>Order Status</th><br/>
           <th scope = "col" style={l2}></th><br/>
           
      </tr>
      </thead>
          <tbody>
            {this.state.orders.map((orders,index)=>(
              <tr key={index}>
                  
                
                  
                <td style={l3}>{orders._id}</td><br/><br/>             
                <td style={l3}>{orders.cusid}</td><br/><br/> 
                <td style={l3}>{orders.name}</td><br/><br/> 
                <td style={l3}>{orders.itemname1}</td><br/><br/> 
                <td style={l3}>{orders.itemquantity1}</td><br/><br/> 
                <td style={l3}>{orders.itemname2}</td><br/><br/>    
                <td style={l3}>{orders.itemquantity2}</td><br/><br/> 
                <td style={l3}>{orders.itemname3}</td><br/><br/> 
                <td style={l3}>{orders.itemquantity3}</td><br/><br/> 
                <td style={l3}>{orders.mobileno}</td><br/><br/><br/>  
                <td style={l3}>{orders.address}</td><br/><br/> 
                <td style={l3}>{orders.date}</td><br/><br/> 
                <td style={l3}>{orders.symptoms}</td><br/><br/> 
                <td style={l3}>{orders.orderstatus}</td>

                <td>
                <hr></hr>
                  <button className="btn btn-danger" style={{height:"45px",width:"100px",border_radius:"3px",align:"center"}} onClick={()=>this.onAccept(orders._id)}>Accept</button>
                  <button className="btn btn-warning"style={{height:"45px",width:"100px",border_radius:"3px"}} onClick={()=>this.onDiscard(orders._id)}>Discard</button>
                  <button className="btn btn-primary"style={{height:"45px",width:"100px",border_radius:"3px"}}onClick={()=>this.onDelete(orders._id)}>Delete</button>
                </td>
                
        </tr>
        )
       )}
      </tbody>     
    </table>
    <br/><br/>
    <center>
     <a className="btn-primary btn-lg" style={{background: "#009999"}} href="/displayAccOrders" >
       &nbsp;<label>View Accepted Orders</label>
     </a>
    </center>

    </div>
  
    )
     }
    }
