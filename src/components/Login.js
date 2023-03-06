import React from "react";
import "../styles/Login.css";

function Login(){
    return (
        <div id="login">
            <h2>My Booking</h2>
            <div id="login-body">
                <div>
                <img id="login-img" src="https://www.pngall.com/wp-content/uploads/8/Tourist-People-PNG-Clipart.png" height="400" width="400" ></img>
                </div>
                <div id="login-form">
                <label className="labels" htmlFor="email">Email</label>
                <input id="email" name="email" type="email"></input>
                <label className="labels"  htmlFor="text">Booking ID</label>
                <input id="text" name="text" type="text"></input>
                <button type="submit">Find</button>
                </div>
            </div>
        </div>
    )
}

export default Login;