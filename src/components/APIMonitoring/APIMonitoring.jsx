import React from 'react'
import './APIMonitoring.css';
import Api from '../../Images/API.webp';
import TrustedComp from '../TrustedComp/TrustedComp';
import Deploy from '../../Images/Deploy.webp';
import Stream from '../../Images/Streamline.webp';
import Insights from '../../Images/Insights.webp';
import Footer from '../Footer/Footer.jsx'
const APIMonitoring = () => {
  return (
    <div>
         <div className="header-containerr">
      <div>
     <h2 className="header-title-Api">Simplify <strong>API </strong> Performance Monitoring</h2><br/>
     <p className='header-p'>Keep an eye on API health, performance, and usage<br/>
      effortlessly, ensuring smooth integration and dependable<br/>
       service delivery.
    <div className="button-group">
      <button className="button-secondary1"> Request a demo </button>
    </div>
  
    </p>
    </div>
    <img src={Api} alt="Company Logo" className="header-logo-Api" />
     </div>
     <br/><br/><br/><br/>
     <TrustedComp/>
     <div className="header-container-Error">
      <img src={Deploy} alt="Company Logo" className="header-logo-Error" />
      <div>
     <h2 className="header-title-Error">Easy API <l>Error Tracking</l></h2><br/>
     <p className='header-p-Error'>Easily track API interactions with a unified dashboard that offers<br/>
      a clear view of API performance metrics and overall health
    <div className="button-group">
      <button className="button-primary">Try for Free</button>
    </div>
    </p>
    </div>
    </div>
  
    
    <div className="header-container-Insights">
      <div>
     <h2 className="header-title-Insights">
     Gather <l>Detailed</l> Insights</h2><br/>
     <p className='header-p-Insights'>Get a clear picture of how your APIs are performing with data on response times,<br/>
      error rates, and usage patterns, making it easier to understand how your systems <br/>
      interact and where improvements can be made.
    <div className="button-group">
      <button className="button-primary">Try for Free</button>
    </div>
    </p>
    </div>
    </div>
    <img src={Stream} alt="Company Logo" className="header-logo-Insights" />
    
    
    
    <div className="header-container-Flow ">
    <img src={Insights} alt="Company Logo" className="header-logo-Flow" />
      <div>
     <h2 className="header-title-Flow">Improve Operational <l>Flow</l></h2><br/>
     <p className='header-p-Flow'>Address API issues proactively and adjust your systems for better<br/>
      interaction, which helps maintain a steady and responsive service<br/>
       environment

    <div className="button-group">
      <button className="button-primary">Try for Free</button>
    </div>
    </p>
    </div>
    </div>


    <div className="container-Bottom">
            <div className="text-content-Bottom">
                <p className="content-Bottom">Next action</p>
                <h1 className="heading-Bottom">Take control and keep your APIs running smoothly—start<br/>
                 with a smarter monitoring approach today! </h1>
            </div>
            <button className="action-button-Bottom">Request Demo</button>
        </div>
        <Footer/>
    </div>
  )
}

export default APIMonitoring
