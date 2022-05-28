import React, { useState, useEffect, Component } from 'react';
import axios from "axios";

const style1 = {
	color: "white",
	align: "center",
  backgroundColor: "#212329",
}

function Header(){

  return(
    
    <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid" style={style1}>
    
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" >

          <li className="nav-item">
            <a className="nav-link active" style={{color:'white'}} aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{color:'white'}} href="/add">Add Drugs</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{color:'white'}} href="/view">View Drugs</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{color:'white'}} href="/request/save">Add Request</a>
          </li>

          </ul>

          
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Header;
