import React from "react";
import "./Footer.css";

const Footer = () => (
    <footer className="footer">
        <div className="bottom">
            <ul id='footer-list'>
                <li><span><img className='logo' id="reactLogo" src="assets/images/react-logo.png" alt= "react logo"/></span> Clicky Game!</li>
                <li>© 2019 Joshua Rivenburgh</li>
                <li><a href="https://github.com/jrivenburgh/clicky" target="blank"><span><img className='logo' src="" alt= "github logo"/></span> Github</a></li>
            </ul>
        </div>
    </footer>
)

export default Footer;