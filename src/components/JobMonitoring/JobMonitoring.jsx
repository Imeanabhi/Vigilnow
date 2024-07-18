import React from 'react';
import './JobMonitoring.css'
import Job from '../../Images/Job.webp';
import TrustedComp from '../TrustedComp/TrustedComp.jsx';
import Track from '../../Images/Tracking.webp';
import Data from '../../Images/Data.webp';
import Efficiency from '../../Images/Efficiency.webp';
import Footer from '../Footer/Footer.jsx';
const JobMonitoring = () => {
  return (
    <div>
         <div className="header-containerr">
      <div>
     <h2 className="header-title-Api">Simplify <strong>Job Monitoring</strong></h2><br/>
     <p className='header-p'> Manage your application jobs effortlessly. Stay updated<br/>
      on their performance and status, ensuring efficient<br/>
      execution and system reliability.
    <div className="button-group">
   < a href="https://vigilnow.com/book-a-demo/?utm_source=Vigilnow&utm_medium=website&utm_campaign=landing_page&utm_term=job_monitoring_hero_section" target="blank"><button className="button-secondary1">Request a demo</button></a>   
    </div>
    </p>
    </div>
    <img src={Job} alt="Company Logo" className="header-logo-Api" />
     </div>
     <br/><br/><br/><br/>
     <TrustedComp/>
     <div className="header-container-Error">
      <img src={Track} alt="Company Logo" className="header-logo-Error" />
      <div>
     <h2 className="header-title-Error">Easy <l>Tracking </l>and <l>Monitoring</l></h2><br/>
     <p className="header-p-Error">Discover & manage errors with Vigil’s intelligent error monitoring;
       it captures repetitive exceptions based on pre-defined criteria and groups them,
        making them easier to identify. When unexpected exceptions occur,
       devs can group them for efficient resolution.
    <div className="button-group">
    <a href="https://app.vigilnow.com/signUp?utm_source=Vigilnow&utm_medium=website&utm_campaign=landing_page&utm_term=job_monitoring_feature_1&_gl=1*1m04mfo*_ga*ODcxNDc2MjUzLjE3MTkzMjk0NTc.*_ga_J431DF6MQN*MTcyMDQ1NjEwMC40NC4xLjE3MjA0NTc5MTEuMC4wLjA.&_ga=2.22285567.539706939.1720413142-871476253.1719329457" target="blank"><button className="button-primary">Try for Free</button></a>
    </div>
    </p>
    </div>
    </div>
  
    
    <div className="header-container-Insights">
      <div>
     <h2 className="header-title-Insights">Comprehensive <l>Data  Capture</l></h2><br/>
     <p className='header-p-Insights'>Gain insights into your job performance effortlessly.<br/> Vigil captures crucial
      data such as job status and timestamps,<br/> giving you a comprehensive 
      understanding of your<br/> application workflows.
    <div className="button-group">
   <a href="https://app.vigilnow.com/signUp?utm_source=Vigilnow&utm_medium=website&utm_campaign=landing_page&utm_term=job_monitoring_feature_2&_gl=1*8hce4w*_ga*ODcxNDc2MjUzLjE3MTkzMjk0NTc.*_ga_J431DF6MQN*MTcyMDQ1NjEwMC40NC4xLjE3MjA0NTc5MTEuMC4wLjA.&_ga=2.189431663.539706939.1720413142-871476253.1719329457" target="blank"><button className="button-primary">Try for Free</button></a>   
    </div>
    </p>
    </div>
    </div>
    <img src={Data} alt="Company Logo" className="header-logo-Insights" />
    
    
    
    <div className="header-container-Flow">
    <img src={Efficiency} alt="Company Logo" className="header-logo-Flow" />
      <div>
     <h2 className="header-title-Flow">Enhanced <l>Efficiency</l></h2><br/>
     <p className="header-p-Flow">Stay ahead of issues and streamline your workflow. By effortlessly capturing <br/>
     job statuses and timestamps, you can optimize your application operations <br/>
     and ensure smoother execution.

    <div className="button-group">
     <a href="https://app.vigilnow.com/signUp?utm_source=Vigilnow&utm_medium=website&utm_campaign=landing_page&utm_term=job_monitoring_feature_3&_gl=1*1dmp0ji*_ga*ODcxNDc2MjUzLjE3MTkzMjk0NTc.*_ga_J431DF6MQN*MTcyMDQ1NjEwMC40NC4xLjE3MjA0NTc5MTEuMC4wLjA.&_ga=2.188905327.539706939.1720413142-871476253.1719329457" target="blank"><button className="button-primary">Try for Free</button></a>
    </div>
    </p>
    </div>
    </div>

    <div className="container-Bottom">
            <div className="text-content-Bottom">
                <p className="content-Bottom">Next action</p>
                <h1 className="heading-Bottom">Streamline job monitoring for your applications</h1>
            </div>
       <a href="https://vigilnow.com/book-a-demo/?utm_source=Vigilnow&utm_medium=website&utm_campaign=landing_page&utm_term=job_monitoring_next_action" target="blank"><button className="action-button-Bottom">Request Demo</button></a>
        </div>
<Footer/>
    </div>
  )
}

export default JobMonitoring
