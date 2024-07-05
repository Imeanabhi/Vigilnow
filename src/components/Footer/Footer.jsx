import React from 'react';
import './Footer.css';
import VigilLo from '../../Images/vigil.webp';
import Email from '../../Images/Email.jpeg';
import Linki from '../../Images/Linkedin.png';
const Footer = () => {
  return (
    <div>
       <footer className="footer">
      <div className="footer-content">
        <img src={VigilLo} alt="logo" className="footer-photo" />
        <div className="division-line"></div>
        <div className="footer-text">
          <p className="simp">Simplified application monitoring</p>
        </div>
      </div>
      <div className="footer-imagesi">
      <a href="https://www.linkedin.com/products/foxsense-innovations-vigil/"rel="noopener noreferrer" target="_blank"><img src={Linki}   alt="Company Logo" className="Linkp" /></a>
      <a href="mailto:support@vigilnow.com" target="_blank"  rel="noopener noreferrer" ><img src={Email} alt="Company Logo" className="Linke" /></a>
      <p className="last">© 2024 VIGIL NOW</p>
   </div>
      <div className="footer-p1">
        <a href="http://localhost:3000/privacy-policy">
        <p className="Top-header">Privacy Policy</p><br/>
        </a>
        <a href="http://localhost:3000/terms">
        <p className='Low-header'>Terms of Service</p>
        </a>
      </div>
    </footer>
    </div>
  )
}

export default Footer
