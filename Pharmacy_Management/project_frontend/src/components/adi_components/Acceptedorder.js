import React, {Component} from "react";
import axios from 'axios';
import ReactToPrint from 'react-to-print';

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
  marginLeft:"1100px",
  marginTop:"5px"
  }



export default class AcceptedOrders extends Component{
  constructor(props){
    super(props);
    
     const orders=[]; 
     this.state={orders};
}

//Retrieve Accepted orders

componentDidMount(){
  this.retrieveorders();
}
  retrieveorders(){
    axios.get("http://localhost:8070/arrangedorder/displayAccOrders").then(res=>{
    if(res.data.success){
        this.setState({
          orders:res.data.ords
        });
        console.log(this.state.orders);
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

render() {
    return(

    <div >
    <div >
    <div><h3 align="center" style={l1} ><br/>VIEW ACCEPTED ORDERS</h3>
    <div >      
    </div> 

          
   
 

 <div className='text-right mb-2' style={style1}>

            <ReactToPrint

            trigger={()=>{

            return <button className="btn btn-danger"  > Download Report </button>

            }}

            content={()=>this.componentRef}
            
            documentTitle = 'Accepted Order Details Report'
           
            pageStyle= "print"

            />

          </div>    
    
     </div></div>  
                            
    <table  style={{marginTop:'30px',background: "#cccccc"}}  ref={el=>(this.componentRef=el)}>
    <thead>
      <tr bgcolor="gray" align='center'>
           <th scope = "col" style={l2}>Order ID</th><br/><br/>
           <th scope = "col" style={l2}>Customer ID</th><br/><br/>
           <th scope = "col" style={l2}>Name</th><br/><br/>  
           <th scope = "col" style={l2}>Item Name1</th><br/><br/>
           <th scope = "col" style={l2}>Item Quantity1</th><br/><br/> 
           <th scope = "col" style={l2}>Item Name2</th><br/><br/>
           <th scope = "col" style={l2}>Item Quantity2</th><br/> <br/> 
           <th scope = "col" style={l2}>Item Name3</th><br/><br/>
           <th scope = "col" style={l2}>Item Quantity3</th><br/><br/>
           <th scope = "col" style={l2}>Mobile No</th><br/><br/>
           <th scope = "col" style={l2}>Address</th> <br/> <br/> 
           <th scope = "col" style={l2}>Date</th><br/><br/>
           <th scope = "col" style={l2}>Order Status</th><br/><br/>
           <th scope = "col" style={l2}></th>
           
      </tr>
      </thead>
          <tbody>
            {this.state.orders.map((orders,index)=>(
              <tr key={index}>
                  
                
                  
                <td style={l3}>{orders._id}</td><br/><br/><br/><br/>
                <br/><br/> 
                <td style={l3}>{orders.cusid}</td><br/><br/><br/><br/>
                <td style={l3}>{orders.name}</td><br/><br/><br/><br/>
                <td style={l3}>{orders.itemname1}</td><br/><br/><br/>
                <td style={l3}>{orders.itemquantity1}</td><br/><br/>
                <td style={l3}>{orders.itemname2}</td><br/><br/><br/>  
                <td style={l3}>{orders.itemquantity2}</td><br/><br/>
                <td style={l3}>{orders.itemname3}</td><br/><br/><br/>
                <td style={l3}>{orders.itemquantity3}</td><br/><br/><br/>
                <td style={l3}>{orders.mobileno}</td><br/><br/><br/><br/><br/>
                <td style={l3}>{orders.address}</td><br/><br/><br/>
                <td style={l3}>{orders.date}</td><br/><br/><br/><br/>
                <td style={l3}>{orders.orderstatus}</td>

                <td>
                  <hr></hr>
                  <button className="btn btn-warning" style={{height:"45px",width:"150px",border_radius:"3px",align:"center"}} onClick={()=>this.onDiscard(orders._id)}>Discard</button>
                  <button className="btn btn-danger" style={{height:"45px",width:"150px",border_radius:"3px",align:"center"}} onClick={()=>this.onDelete(orders._id)}>Delete</button>
                </td>
                
        </tr>
        )
       )}
      </tbody>     
    </table>

    
          
    </div>

    
  
    )
     }
    }
