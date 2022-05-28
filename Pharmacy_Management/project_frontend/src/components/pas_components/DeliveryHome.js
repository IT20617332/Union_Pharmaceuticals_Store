import React, {useState, useEffect} from "react";
  
  export default function DeliveryHome(){
      return(
        <div>
        <h1><i><br/>Welcome to Delivery Unit.....</i></h1> 
        <div class="container"style={{marginTop:"120px"}}>
        <div class="row g-2">
          <table>
            <tr>
              <td>
                <a className="btn btn-primary btn-lg" style={style2} href="/orders">
                &nbsp;Accepted Orders 
                </a> 
              </td>
            </tr>
            <tr>
              <td> 
              <div><a className="btn btn-primary btn-lg" style={style3} href="/view">
                &nbsp;View Delivery Notes 
                </a></div>
                  &nbsp;
                <a className="btn btn-primary btn-lg" style={style4} href="/search">
                &nbsp;Delivery Report 
                </a>
              </td>
            </tr>
            <br></br>
          </table>
          <img id="slide" src="pas_asserts/02.jpg" style={{width:"600px", marginLeft:"600px", marginTop:"-350px"}}/>
		      
        </div>
      </div>
      </div>

      
      )
  }












  const style2 = {
    marginTop:"-15px",
    //border:"white",
    backgroundColor:"#3A3B3C",
    height:"50px",
    width: "250px"
  }
  const style3 = {
    marginLeft:"120px",
    marginTop:"45px",
    //border:"white",
    backgroundColor:"#3A3B3C",
    height:"50px",
    width: "250px"
  }
  const style4 = {
    marginLeft:"230px",
    marginTop:"48px",
    //border:"white",
    backgroundColor:"#3A3B3C",
    height:"50px",
    width: "250px"
  }