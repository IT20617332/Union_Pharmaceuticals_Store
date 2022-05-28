import React from 'react';

function Footer() {

    return(

<div class="footer-containerpa">
<hr />
<div class="footerpa">
    <div class="footer-head footer-5 option1 option2">
        <h2>About Us</h2>
        <p>Trustworthy service <br /> More than a decade.<br /> (Since 2011).</p>
        <a href="https://www.facebook.com/"><i class="fa fa-facebook"></i></a>
        <a href="https://twitter.com/"><i class="fa fa-twitter"></i></a>
        <a href="https://www.linkedin.com/login"><i class="fa fa-linkedin"></i></a>
        <a href="https://www.youtube.com/"><i class="fa fa-youtube"></i></a>
    </div>
    <div class="footer-head footer-2 option1 option2">

        <h2>Quick Links</h2>

        
        <a href="/add">Create Account</a><br />
        <a href="/viewe">View Employees</a><br />
        <a href="/views">View Salary Details</a><br />

    </div>
    <div class="footer-head footer-3 option2">
        <h2>Contact Us</h2>
        <ul>
            <li>No 28, Tangalle road, Beliatta.</li><br />
            <li>pharmacy@union.com</li><br />
            <li>+(94)473456763</li><br />

        </ul>
    </div>
    <div class="footer-head footer-4 option2">
        <h2>Maps</h2>
        <a href="https://goo.gl/maps/EXUFRzFMCEasMyH16"><img class="map" src="pra_asserts/map.png" height="160px" width="250px" /></a>
    </div>
</div>
<p class="bottom-textp">Copyright Company 2012 : All Rights Reserved</p>
</div>
    )
}

export default Footer;