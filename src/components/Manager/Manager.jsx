import React from 'react'
import Track from '../../Images/Tracking.webp';
import Up from '../../Images/Up.webp';
import Dat from '../../Images/Data.webp';
import '../DevelopmentTeams/Development.css';
import Footer from '../Footer/Footer.jsx';
const Manager = () => {
  return (
    <div>
        
       <div className="header-containerr">
       <div>
     <h2 className="header-title-Api">
     Increase monitoring effectiveness</h2>
     <p className='header-p'> 
     Stay on top of your responsibilities, and improve collaboration with development team
     <div className="button-group">
  <a href="https://app.vigilnow.com/signUp?utm_source=Vigilnow&utm_medium=website&utm_campaign=landing_page&utm_term=manager_hero_signup&_gl=1*10zy5p8*_ga*ODcxNDc2MjUzLjE3MTkzMjk0NTc.*_ga_J431DF6MQN*MTcyMDUxNzkwMC40NS4xLjE3MjA1MTgwNDMuMC4wLjA.&_ga=2.231882715.539706939.1720413142-871476253.1719329457" target='Blank'><button className="button-primary">Try for free</button></a>    
    <a href="https://vigilnow.com/book-a-demo/?utm_source=Vigilnow&utm_medium=website&utm_campaign=landing_page&utm_term=manager_hero_demo" target="blank"><button className="button-secondary0">Request a demo</button> </a>
   </div>
    </p>
    </div>
     </div>
     <br/><br/><br/><br/>



     <div className="header-container-Error">
      <div>
     <h2 className="header-title-Error">
     Comprehensive Monitoring <br/>and Proactive Management</h2>
     <p className='header-p-Error'>Vigil equips CTOs and managers with a robust toolset
      designed to oversee and optimize the performance of 
      applications. Monitor everything from server loads to 
      application response times, and user interactions.
      Vigil’s real-time insights allow for proactive management,
       ensuring that your applications maintain high
        performance and reliability. Stay informed and ready
         to act, minimizing downtime and maximizing user 
         satisfaction.<br/><br/>
    </p>
    </div>
    </div>
    <img src={Track} alt="Company Logo" className="header-logo-Error" />
    


    <div className="header-container-Insights">
      <img src={Up} alt="Company Logo" className="header-logo-Insights" />
      <div>
     <h2 className="header-title-Insights">Automated Alerts for Efficient<br/> Operations</h2><br/>
     <p className='header-p-Insights'>Shift from reactive to proactive with Vigil’s automated alerting
     system. Receive immediate notifications about performance
     anomalies, security issues, or failures within your infrastructure.
      These alerts enable you to stay ahead of potential disruptions by
      initiating timely interventions, ensuring continuous system
      availability and stability. Free up your time from routine checks and
       focus on strategic activities that drive business growth.
       </p><br/><br/>
    </div>
    </div>

    <div className="header-container-Flow">
      <div>
     <h2 className="header-title-Flow">
     Customizable Dashboards and Strategic Reporting</h2>
     <p className='header-p-Flow'>
     With Vigil, create tailored dashboards that resonate with
      the specific needs of your team and projects. Visualize
       key metrics, from throughput to error rates, in a clear an
        actionable manner. These custom reports are vital for
         strategic planning, providing you with the insights 
         needed to make informed decisions about resource 
         allocation, technology investments, and architectural
          changes.<br/><br/>
    </p>
    </div>
    </div>
    <img src={Dat} alt="Company Logo" className="header-logo-Flow" />
    

    <div className="container-Bottom">
            <div className="text-content-Bottom">
                <p className="content-Bottom">Next action</p>
                <h1 className="heading-Bottom">Take control and keep your APIs running smoothly—start<br/>
                 with a smarter monitoring approach today! </h1>
            </div>
       <a href="https://vigilnow.com/book-a-demo/?utm_source=Vigilnow&utm_medium=website&utm_campaign=landing_page&utm_term=manager_next_action" target='blank '><button className="action-button-Bottom">Request Demo</button></a>
        </div>
        <br/><br/>



<Footer/>
    
    </div>
  )
}

export default Manager
