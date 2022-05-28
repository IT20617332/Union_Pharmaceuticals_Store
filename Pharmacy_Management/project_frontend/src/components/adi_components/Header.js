import React from "react";

function Header() {
    return(
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
                <a href="index.html"><img src="adi_asserts/logo3.jpg" class="logo" /></a>
                <div class="logBtn">
                
                <h1> Union Pharmaceuticals </h1>  
                </div>
            <div>
                <div>  
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                         <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li> 
                        <li className="nav-item">
                        <a className="nav-link" href="/add">Received Orders</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/displayAccOrders">View Accepted Orders</a>
                        </li>

                    </ul>
                    </div>
                    </div>
            </div> 
        </div>
        </nav>
    )
}

export default Header;