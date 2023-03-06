import React from "react";
import { Routes, Route, Link, Outlet } from 'react-router-dom';




import "../styles/Navbar.css";

function Navbar(){
    return (
        <div id="nav-bar">
            <ul >
            <a href="#"><li><img style={{opacity:"1"}} id="logo" src="https://www.golakshadweep.com/assets/images/gol-logo.png" alt="logo" height="70" width="125"></img></li></a>
                <a href="#"><li className="nav-items">Find Reservations</li></a>
                <a href="#"><li className="nav-items">Packages ▾</li></a>
                <a href="#"><li className="nav-items">About Lakshadweep ▾</li></a>
                <a href="#"><li className="nav-items">About Us</li></a>
                <a href="#"><li className="nav-items">Gol</li></a>
                <a href="#"><li className="nav-items">Support</li></a>
                <li  class="Loginbtns"><button id="login-btn"  type="button">Login</button></li>
                <li  class="Loginbtns"><button id="signup-btn" type="button">Sign Up</button></li>
            </ul>
           
<Outlet />

        </div>
    )
}

export default Navbar