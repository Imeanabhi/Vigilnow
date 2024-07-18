import React from 'react'
import './APIMonitoring.css';
import API from '../../Images/API.webp';
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
     <h2 className="header-title-Api">Simplify <strong>API </strong>Performance<br/> Monitoring</h2><br/>
     <p className='header-p'>Keep an eye on API health, performance, and usage<br/>
      effortlessly, ensuring smooth integration and dependable<br/>
       service delivery.
    <div className="button-group">
   <a href="https://vigilnow.com/book-a-demo/?utm_source=Vigilnow&utm_medium=website&utm_campaign=landing_page&utm_term=api_monitoring_hero_section" target="blank"><button className="button-secondary1"> Request a demo </button></a>   
    </div>
  
    </p>
    </div>
    <img src={API} alt="Company Logo" className="header-logo-Api" />
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
     <a href="https://app.vigilnow.com/signUp?utm_source=Vigilnow&utm_medium=website&utm_campaign=landing_page&utm_term=api_monitoring_feature_1&_gl=1*7cn5ry*_ga*ODcxNDc2MjUzLjE3MTkzMjk0NTc.*_ga_J431DF6MQN*MTcyMDQ1NjEwMC40NC4xLjE3MjA0NTgyNjkuMC4wLjA.&_ga=2.261372105.539706939.1720413142-871476253.1719329457" target="blank"><button className="button-primary">Try for Free</button></a> 
    </div>
    </p>  
    </div>
    </div>
  
    
    <div className="header-container-Insights">
      <div>
     <h2 className="header-title-Insights">
     Gather <l>Detailed</l> Insights</h2><br/>
     <p className='header-p-Insights'>Get a clear picture of how your APIs are performing<br/> with data on response times,
      error rates, and usage<br/> patterns, making it easier to understand how your<br/> systems
      interact and where improvements can be <br/>made.
    <div className="button-group">
   <a href="https://app.vigilnow.com/signUp?utm_source=Vigilnow&utm_medium=website&utm_campaign=landing_page&utm_term=api_monitoring_feature_2&_gl=1*1ma16iy*_ga*ODcxNDc2MjUzLjE3MTkzMjk0NTc.*_ga_J431DF6MQN*MTcyMDQ1NjEwMC40NC4xLjE3MjA0NTgyNjkuMC4wLjA.&_ga=2.260198601.539706939.1720413142-871476253.1719329457" target="blank" ><button className="button-primary">Try for Free</button></a>
    </div>
    </p>
    </div>
    </div>
    <img src={Stream} alt="Company Logo" className="header-logo-Insights" />
    
    
    
    <div className="header-container-Flow ">
    <img src={Insights} alt="Company Logo" className="header-logo-Flow" />
      <div>
     <h2 className="header-title-Flow">Improve Operational <l>Flow</l></h2><br/>
     <p className='header-p-Flow'>Address API issues proactively and adjust your systems for better
      interaction,which helps maintain a steady and responsive service
       environment

    <div className="button-group">
    <a href="https://app.vigilnow.com/signUp?utm_source=Vigilnow&utm_medium=website&utm_campaign=landing_page&utm_term=api_monitoring_feature_3&_gl=1*mq2bpz*_ga*ODcxNDc2MjUzLjE3MTkzMjk0NTc.*_ga_J431DF6MQN*MTcyMDQ1NjEwMC40NC4xLjE3MjA0NTgyNjkuMC4wLjA.&_ga=2.194272489.539706939.1720413142-871476253.1719329457" target="blank"><button className="button-primary">Try for Free</button></a>
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
        < a href="https://vigilnow.com/book-a-demo/?utm_source=Vigilnow&utm_medium=website&utm_campaign=landing_page&utm_term=api_monitoring_next_action" target="blank"><button className="action-button-Bottom">Request Demo</button></a>
        </div>
        <Footer/>
    </div>
  )
}

export default APIMonitoring
