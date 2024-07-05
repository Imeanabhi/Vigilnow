import React from 'react';
import './HealthCheck.css'
import  Health from '../../Images/Health Checks.webp';
import TrustedComp from '../TrustedComp/TrustedComp';
import Up from '../../Images/Up.webp';
import Percentage from '../../Images/Percentage.webp';
import web from '../../Images/Website.webp';
import Footer from '../Footer/Footer.jsx';

const HealthCheck = () => {
  return (
    <div>
         <div className="header-containerr">
      <div>
     <h2 className="header-title3">Optimize <strong>Application </strong>Performance</h2><br/>
     <p className='header-p'> Keep an eye on the health of your applications. Stay <br/>informed
      about their performance and potential issues,<br/>
      enabling prompt action to ensure optimal operations.
    <div className="button-group">
      <button className="button-secondary1">Request a demo</button>
    </div>

    </p>
    </div>
    <img src={Health} alt="Company Logo" className="header-logoo" />
     </div>
     <br/><br/><br/><br/>
     <TrustedComp/>
     <div className="header-container-Up">
      <img src={Up} alt="Company Logo" className="header-logo-Up" />
      <div>
     <h2 className="header-title-Up">Always be<l> available</l> for your<br/> customers</h2><br/>
     <p className='header-p-Up'>Your applications and their integrations are continuously monitored to<br/>
      ensure they’re up and running smoothly. No more worrying about<br/>
       unexpected downtime disrupting your business operations – Vigil keeps a<br/>
        vigilant eye, 24/7.
    <div className="button-group">
      <button className="button-primary">Try for Free</button>
    </div>
    </p>
    </div>
    </div>
  
    
    <div className="header-container-Tracki">
      <div>
     <h2 className="header-title-Track"><l>Track</l> & <l>Improve</l> Application Availability</h2>
     <p className='header-p-Track'>Receive immediate alerts with ob monitoring, empowering 
      you to oversee and<br/> manage various scheduled and configured jobs. 
      Stay informed in real-time,<br/> ensuring the seamless execution of critical tasks.
    <div className="button-group">
      <button className="button-primary">Try for Free</button>
    </div>
    </p>
    </div>
    </div>
    <img src={Percentage} alt="Company Logo" className="header-logo-Percentage" />
    
    
    
    <div className="header-container-Summary ">
    <img src={web} alt="Company Logo" className="header-logo-Summary" />
      <div>
     <h2 className="header-title-Summary">Stay in the Loop & <l>Act Fast</l></h2><br/>
     <p className='header-p-Summary'>With one-click integration, stay informed and take action swiftly. Receive <br/>
     instant alerts via email, in-app notifications, or your preferred platforms like<br/>
      Slack or Microsoft Teams. With Vigil, you’ll always be the first to know,<br/>
       empowering you to address any issues promptly and keep your business<br/>
        operations running smoothly.


    <div className="button-group">
      <button className="button-primary">Try for Free</button>
    </div>
    </p>
    </div>
    </div>

    <div className="container-Bottom">
            <div className="text-content-Bottom">
                <p className="content-Bottom">Next action</p>
                <h1 className="heading-Bottom">Start monitoring your applications' uptime</h1>
            </div>
            <button className="action-button-Bottom">Request Demo</button>
        </div>





<Footer/>
    </div>
  )
}

export default HealthCheck;
