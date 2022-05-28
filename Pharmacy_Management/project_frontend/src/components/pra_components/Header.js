import React from "react";


function Header() {
    return(
        <div>
        <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
            <img src="pra_asserts/logo.jpg" width="30" class="logopa"/>
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
        </nav></div>
    )
}

export default Header;