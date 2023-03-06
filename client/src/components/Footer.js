import React from "react";
import "../styles/Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import play from "./images/play.png"



function Footer (){
    return (
        <div id="footer-div">
        <div id="continents-f"></div>
        <div id="dwnld-bnr">
            <div id="bnr-content">
            <div id="banner-txt">
                <h2>Download Our App</h2>
                <p>Offers best functionality among all other travel apps</p>
                <button id="dwnld-btn">
                <div>
                    <img id="play-icon" src={play} height="35" width="35"></img>
                </div>
                <div id="btn-text">
                    <p>GET IT ON</p>
                    <h3>Google Play</h3>
                    </div>
                </button>
                </div>
                <div id="phn-container">
                <img id="phn" src="https://purepng.com/public/uploads/large/purepng.com-apple-iphone-xappleapple-iphonephonesmartphonemobile-devicetouch-screeniphone-xiphone-10electronicsobjects-251530689596wod8s.png" height="320" width="320"></img>
                </div>
            </div>
        </div>
        <footer id="footer">
        <div id="f-body">
        <div id="flogo-div">
        <a href="#"><img id="f-logo" src="https://www.golakshadweep.com/assets/new-theme/img/logo2.png" alt="logo" height="60" width="120"></img></a>
        <p>Many desktop publishing packages and  <br />web page editors now use Lorem Ipsum as their default model text.</p>
        </div>
        <div id="footer-items">
            <div className="footer-list">
            <ul >
            <span className="list-title">Company</span>
                <a href="#"><li className="flist-item">Apple</li></a>
                <a href="#"><li className="flist-item">Pear</li></a>
                <a href="#"><li className="flist-item">Orange</li></a>
            </ul>
            </div>
            <div className="footer-list">
            <ul >
            <span className="list-title">Company</span>
                <a href="#"><li className="flist-item">Apple</li></a>
                <a href="#"><li className="flist-item">Pear</li></a>
                <a href="#"><li className="flist-item">Orange</li></a>
            </ul>
            </div>
            <div className="footer-list">
            <ul >
            <span className="list-title">Company</span>
                <a href="#"><li className="flist-item">Apple</li></a>
                <a href="#"><li className="flist-item">Pear</li></a>
                <a href="#"><li className="flist-item">Orange</li></a>
            </ul>
            </div>
        </div>
        </div>
        <div>
                <FacebookIcon id="icon"/>
                <TwitterIcon id="icon" />
                <LinkedInIcon id="icon" />
                <InstagramIcon id="icon" /> 
            <hr />
            <span id="copy-right"><p>Copyright © 2023 GoL Travels Private Limited. All Rights Reserved.</p></span> 
        </div>
        </footer>
        </div>
    )
}

export default Footer;
