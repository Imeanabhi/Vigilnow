import React from 'react';
import '../APIMonitoring/APIMonitorings.css';
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
     <h2 className="header-title-Api">Optimize <strong>Application </strong>Performance</h2>
     <p className='header-p'> Keep an eye on the health of your applications. Stay informed
      about their performance and potential issues,
      enabling prompt action to ensure optimal operations.
    <div className="button-group">
   <a href="https://vigilnow.com/book-a-demo/?utm_source=Vigilnow&utm_medium=website&utm_campaign=landing_page&utm_term=health_check_hero_section" target="blank"><button className="button-secondary1">Request a demo</button></a>   
    </div>

    </p>
    </div>
    <img src={Health} alt="Company Logo" className="header-logo-Api" />
     </div>
     <br/><br/><br/><br/>
     <TrustedComp/>
     <div className="header-container-Error">
      <img src={Up} alt="Company Logo" className="header-logo-Error" />
      <div>
     <h2 className="header-title-Error">Always be<l> available</l> for your customers</h2>
     <p className='header-p-Error'>Your applications and their integrations are continuously monitored to
      ensure they’re up and running smoothly. No more worrying about
       unexpected downtime disrupting your business operations – Vigil keeps a
        vigilant eye, 24/7.
    <div className="button-group">
  <a href="https://app.vigilnow.com/signUp?utm_source=Vigilnow&utm_medium=website&utm_campaign=landing_page&utm_term=health_check_feature_1&_gl=1*1a4akz7*_ga*ODcxNDc2MjUzLjE3MTkzMjk0NTc.*_ga_J431DF6MQN*MTcyMDQ1NjEwMC40NC4xLjE3MjA0NTcyMzMuMC4wLjA.&_ga=2.34807269.539706939.1720413142-871476253.1719329457" target="blank"><button className="button-primary">Try for Free</button></a>
    </div>
    </p>
    </div>
    </div>
  
    
    <div className="header-container-Insights">
      <div>
     <h2 className="header-title-Insights"><l>Track</l> & <l>Improve</l> Application Availability</h2>
     <p className='header-p-Insights'>Receive immediate alerts with ob monitoring, empowering 
      you to oversee and manage various scheduled and configured jobs. 
      Stay informed in real-time, ensuring the seamless execution of critical tasks.
    <div className="button-group">
    <a href="https://app.vigilnow.com/signUp?utm_source=Vigilnow&utm_medium=website&utm_campaign=landing_page&utm_term=health_check_feature_2&_gl=1*1hucqcp*_ga*ODcxNDc2MjUzLjE3MTkzMjk0NTc.*_ga_J431DF6MQN*MTcyMDQ1NjEwMC40NC4xLjE3MjA0NTcyMzMuMC4wLjA.&_ga=2.193140585.539706939.1720413142-871476253.1719329457"target="blank"><button className="button-primary">Try for Free</button></a>
    </div>
    </p>
    </div>
    </div>
    <img src={Percentage} alt="Company Logo" className="header-logo-Insights" />
    
    
    
    <div className="header-container-Flow ">
    <img src={web} alt="Company Logo" className="header-logo-Flow" />
      <div>
     <h2 className="header-title-Flow">Stay in the Loop & <l>Act Fast</l></h2><br/>
     <p className='header-p-Flow'>With one-click integration, stay informed and take action swiftly. Receive 
     instant alerts via email, in-app notifications, or your preferred platforms like
      Slack or Microsoft Teams. With Vigil, you’ll always be the first to know,
       empowering you to address any issues promptly and keep your business
        operations running smoothly.


    <div className="button-group">
   <a href="https://app.vigilnow.com/signUp?utm_source=Vigilnow&utm_medium=website&utm_campaign=landing_page&utm_term=health_check_feature_3&_gl=1*1hucqcp*_ga*ODcxNDc2MjUzLjE3MTkzMjk0NTc.*_ga_J431DF6MQN*MTcyMDQ1NjEwMC40NC4xLjE3MjA0NTcyMzMuMC4wLjA.&_ga=2.193140585.539706939.1720413142-871476253.1719329457"target="blank"><button className="button-primary">Try for Free</button></a>  
    </div>
    </p>
    </div>
    </div>

    <div className="container-Bottom">
            <div className="text-content-Bottom">
                <p className="content-Bottom">Next action</p>
                <h1 className="heading-Bottom">Start monitoring your applications' uptime</h1>
            </div>
   <a href="https://vigilnow.com/book-a-demo/?utm_source=Vigilnow&utm_medium=website&utm_campaign=landing_page&utm_term=health_check_next_action"target="Blank"     >   <button className="action-button-Bottom">Request Demo</button></a> 
        </div>





<Footer/>
    </div>
  )
}

export default HealthCheck;
