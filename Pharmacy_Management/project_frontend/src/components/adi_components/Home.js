import React,{useState} from "react";

const style1 = {
  marginLeft:"60px",
  border:"white",
  backgroundColor:"#00b3b3",
  height:"150px",
  width: "500px",
}
const style2 = {
  border:"white",
  backgroundColor:"#009999",
  height:"150px",
  width: "500px"
}
const style3 = {
  marginLeft:"60px",
  border:"white",
  backgroundColor:"#008080",
  height:"150px",
  width: "500px"
}
const style4 = {
  border:"white",
  backgroundColor:"#006666",
  height:"150px",
  width: "500px"
}
const l1= {
  color:"white",
  fontSize:"30px",
  fontWeight:"500",
  marginTop:"40px"
}

export default function Home(){
    return(
      <div>
        

      <div class="container"style={{marginTop:"120px"}}>
      <div class="row g-2">
        
        <table>
          <tr>
            <td>
              <a className="btn btn-primary btn-lg" style={style1} href="/add">
              &nbsp;<label style={l1} >Retreive Order Details </label> 
              </a>
                &nbsp;
                
              <a className="btn btn-primary btn-lg" style={style2} href="/displayAccOrders">
              &nbsp;<label style={l1} >View Accepted Orders</label> 
              </a> 
            </td>
          </tr>
          
        </table>

        
      </div>
    </div>
    </div>
    )
}