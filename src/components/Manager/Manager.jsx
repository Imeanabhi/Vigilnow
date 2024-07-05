import React from 'react'
import Track from '../../Images/Tracking.webp';
import Up from '../../Images/Up.webp';
import Dat from '../../Images/Data.webp';
import './Manager.css';
import Footer from '../Footer/Footer.jsx';
const Manager = () => {
  return (
    <div>
        <div>
       <div className="header-container-Teamsi">
     <h2 className="header-title-Teams">
     Increase monitoring effectiveness</h2>
     <p className='header-p-teami'> 
     Stay on top of your responsibilities, and improve collaboration with development team
     <div className="button-groupis">
      <button className="button-primary">Try for free</button>
      <button className="button-secondary0">Request a demo</button>
   </div>
    </p>
     </div>
     <br/><br/><br/><br/>



     <div className="header-container-Imms">
      <div>
     <h2 className="header-title-Imms">
     Comprehensive Monitoring <br/>and Proactive Management</h2>
     <p className='header-p-Imms'>Vigil equips CTOs and managers with a robust toolset<br/>
      designed to oversee and optimize the performance of <br/>
      applications. Monitor everything from server loads to <br/>
      application response times, and user interactions.<br/> 
      Vigil’s real-time insights allow for proactive management,<br/>
       ensuring that your applications maintain high<br/>
        performance and reliability. Stay informed and ready<br/>
         to act, minimizing downtime and maximizing user <br/>
         satisfaction.
    <div className="button-group">
      <button className="button-primary">Try for Free</button>
    </div>
    </p>
    </div>
    </div>
    <img src={Track} alt="Company Logo" className="header-logo-Imms" />
    


    <div className="header-container-Streamlinede">
      <img src={Up} alt="Company Logo" className="header-logo-Streamlinede" />
      <div>
     <h2 className="header-title-Streamlined">Automated Alerts for Efficient<br/> Operations</h2><br/>
     <p className='header-p-Up'>Shift from reactive to proactive with Vigil’s automated alerting <br/>
     system. Receive immediate notifications about performance <br/>
     anomalies, security issues, or failures within your infrastructure.<br/>
      These alerts enable you to stay ahead of potential disruptions by <br/>
      initiating timely interventions, ensuring continuous system <br/>
      availability and stability. Free up your time from routine checks and<br/>
       focus on strategic activities that drive business growth.
       </p>
    </div>
    </div>

    <div className="header-container-Imm">
      <div>
     <h2 className="header-title-Imm">
     Customizable Dashboards <br/>and Strategic Reporting</h2>
     <p className='header-p-Imm'>
     With Vigil, create tailored dashboards that resonate with<br/>
      the specific needs of your team and projects. Visualize<br/>
       key metrics, from throughput to error rates, in a clear and<br/>
        actionable manner. These custom reports are vital for<br/>
         strategic planning, providing you with the insights <br/>
         needed to make informed decisions about resource <br/>
         allocation, technology investments, and architectural<br/>
          changes.
    </p>
    </div>
    </div>
    <img src={Dat} alt="Company Logo" className="header-logo-Imm" />
    

    <div className="container-Bottom">
            <div className="text-content-Bottom">
                <p className="content-Bottom">Next action</p>
                <h1 className="heading-Bottom">Take control and keep your APIs running smoothly—start<br/>
                 with a smarter monitoring approach today! </h1>
            </div>
            <button className="action-button-Bottom">Request Demo</button>
        </div>
        <br/><br/>



<Footer/>
     </div>
    </div>
  )
}

export default Manager
