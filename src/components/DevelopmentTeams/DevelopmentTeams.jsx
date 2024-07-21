import React from 'react';
import './Development.css';
import Track from '../../Images/Tracking.webp';
import Up from '../../Images/Up.webp';
import Dat from '../../Images/Data.webp'
import Footer from '../Footer/Footer.jsx';


const DevelopmentTeams = () => {
  return (
    <div>
       <div className="header-containerr">
        <div>
     <h2 className="header-title-Api">Spend more time developing, less time finding errors</h2>
     <p className='header-p'> 
     Vigil’s proactive monitoring enables faster discovery and quicker resolutions
     <div className="button-group">
     < a href="https://app.vigilnow.com/signUp?utm_source=Vigilnow&utm_medium=website&utm_campaign=landing_page&utm_term=teams_hero_signup&_gl=1*qnjma2*_ga*ODcxNDc2MjUzLjE3MTkzMjk0NTc.*_ga_J431DF6MQN*MTcyMDQ1NjEwMC40NC4xLjE3MjA0NTkxNjguMC4wLjA.&_ga=2.222526559.539706939.1720413142-871476253.1719329457" target="blank"><button className="button-primary">Try for free</button></a> 
     <a href="https://vigilnow.com/book-a-demo/?utm_source=Vigilnow&utm_medium=website&utm_campaign=landing_page&utm_term=teams_hero_demo" target="blank"><button className="button-secondary0">Request a demo</button></a>
   </div>
    </p>
    </div>
     </div>
     <br/><br/><br/><br/>



     <div className="header-container-Error">
      <div>
     <h2 className="header-title-Error">
     Immediate Insights,Proactive Management</h2>
     <p className='header-p-Error'>Vigil offers immediate, comprehensive insights into
      your full stack applications’ health and performance.
       Developers can monitor key metrics across both front-end
        and back-end components, ensuring your applications
         run seamlessly. With Vigil’s real-time alerts,
          potential issues are detected early, allowing your
           team to address them promptly and avoid costly downtime.
    <div className="button-group">
         </div>
    </p>
    </div>
    </div>
    <img src={Track} alt="Company Logo" className="header-logo-Error" />
    


    <div className="header-container-Insights">
      <img src={Up} alt="Company Logo" className="header-logo-Insights" />
      <div>
     <h2 className="header-title-Insights">Streamlined Optimization</h2><br/>
     <p className='header-p-Insights'>Take the complexity out of optimizing your applications with Vigil.<br/>
      Achieve deeper understanding of server responses, API call<br/>
       efficiency, and database load times. Identify performance<br/>
        bottlenecks and refine your codebase to enhance application <br/>
        responsiveness and scalability. Vigil gives your development team<br/>
         the tools to continuously improve application performance and<br/>
         user experience.
    </p>
    </div>
    </div>

    <div className="header-container-Flow">
      <div>
     <h2 className="header-title-Flow">
     Collaboration for Higher<br/> Productivity</h2>
     <p className='header-p-Flow'>Vigil promotes effortless collaboration within
      development teams through its user-friendly dashboard 
      and communication tools. Share critical updates, resolve
       issues collaboratively, and track enhancements in real time,
        fostering a unified approach to project management.
         Whether your team is local or distributed globally,
          Vigil helps streamline workflows, speeding up 
          development cycles and increasing productivity.
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
           <a href="https://vigilnow.com/book-a-demo/?utm_source=Vigilnow&utm_medium=website&utm_campaign=landing_page&utm_term=teams_next_action" target="blank"><button className="action-button-Bottom">Request Demo</button></a> 
        </div>
        <br/><br/>

<Footer/>
     </div>
  )
}

export default DevelopmentTeams
