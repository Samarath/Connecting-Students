import React from 'react';
import './Footer.css';
import { 
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaMapMarker,
    FaPhone,
    FaEnvelope
} from "react-icons/fa";

const Footer = () => {
    return (
      <div>
          <footer class="footer-distributed">

<div class="footer-left">

    <h3>Company<span>logo</span></h3>

    <p class="footer-links">
        <a href="#" class="link-1">Home</a>
    
        <a href="#">About</a>
        
        <a href="#">Contact</a>
    </p>

    <p class="footer-company-name">Company Name © 2015</p>
</div>

<div class="footer-center">

    <div>
        <i><FaMapMarker /></i>
        <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
    </div>

    <div>
        <i><FaPhone /></i>
        <p>+1.555.555.5555</p>
    </div>

    <div>
        <i><FaEnvelope /></i>
        <p><a href="mailto:support@company.com">support@company.com</a></p>
    </div>

</div>

<div class="footer-right">

    <p class="footer-company-about">
        <span>About the company</span>
        Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
    </p>

    <div class="footer-icons">

        <a href="#"><FaFacebook /></a>
        <a href="#"><FaLinkedin /></a>
        <a href="#"><FaTwitter /></a>

    </div>

</div>

</footer>
      </div>
    )
}

export default Footer;