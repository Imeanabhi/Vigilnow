import React from 'react';
import './Development.css';
import Track from '../../Images/Tracking.webp';
import Up from '../../Images/Up.webp';
import Dat from '../../Images/Data.webp'
import Footer from '../Footer/Footer.jsx';


const DevelopmentTeams = () => {
  return (
    <div>
       <div className="header-container-Teams">
     <h2 className="header-title-Team">Spend more time developing, less time<br/> finding errors</h2>
     <p className='header-p-teams'> 
      <p className="re">
     Vigil’s proactive monitoring enables faster discovery and quicker resolutions
     </p>
     <div className="button-groupi">
      <button className="button-primary">Try for free</button>
      <button className="button-secondary0">Request a demo</button>
   </div>
    </p>
     </div>
     <br/><br/><br/><br/>



     <div className="header-container-Imm">
      <div>
     <h2 className="header-title-Imm">
     Immediate Insights, Proactive<br/> Management</h2>
     <p className='header-p-Imm'>Vigil offers immediate, comprehensive insights into<br/>
      your full stack applications’ health and performance.<br/>
       Developers can monitor key metrics across both front-end<br/>
        and back-end components, ensuring your applications<br/>
         run seamlessly. With Vigil’s real-time alerts,<br/>
          potential issues are detected early, allowing your<br/>
           team to address them promptly and avoid costly downtime.
    <div className="button-group">
      <button className="button-primary">Try for Free</button>
    </div>
    </p>
    </div>
    </div>
    <img src={Track} alt="Company Logo" className="header-logo-Imm" />
    


    <div className="header-container-Streamlined">
      <img src={Up} alt="Company Logo" className="header-logo-Streamlined" />
      <div>
     <h2 className="header-title-Streamlined">Streamlined Optimization</h2><br/>
     <p className='header-p-Up'>Take the complexity out of optimizing your applications with Vigil.<br/>
      Achieve deeper understanding of server responses, API call<br/>
       efficiency, and database load times. Identify performance<br/>
        bottlenecks and refine your codebase to enhance application <br/>
        responsiveness and scalability. Vigil gives your development team<br/>
         the tools to continuously improve application performance and<br/>
         user experience.
    </p>
    </div>
    </div>

    <div className="header-container-Imm">
      <div>
     <h2 className="header-title-Imm">
     Collaboration for Higher<br/> Productivity</h2>
     <p className='header-p-Imm'>Vigil promotes effortless collaboration within<br/>
      development teams through its user-friendly dashboard <br/>
      and communication tools. Share critical updates, resolve<br/>
       issues collaboratively, and track enhancements in real time,<br/>
        fostering a unified approach to project management.<br/>
         Whether your team is local or distributed globally,<br/>
          Vigil helps streamline workflows, speeding up <br/>
          development cycles and increasing productivity.
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
  )
}

export default DevelopmentTeams
