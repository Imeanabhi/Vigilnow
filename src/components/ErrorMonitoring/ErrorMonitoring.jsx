import React from 'react'
import TrustedComp from '../TrustedComp/TrustedComp';
import Dep from '../../Images/Deploy.webp';
import Stream from '../../Images/Streamline.webp';
import Error from '../../Images/Error.webp';
import Insights from '../../Images/Insights.webp';
import './ErrorMonitoring.css';
import Footer from '../Footer/Footer.jsx';

const ErrorMonitoring = () => {
  return (
    <div>
         <div className="header-containerr">
      <div>
     <h2 className="header-title3">Monitor application <strong>errors</strong><br/> more effectively</h2><br/>
     <p className='header-p'> Easily discover, track and manage errors in. Get all the<br/> details you need,
       like the line of code and functions<br/> involved, to fix issues fast.
    <div className="button-group">
      <button className="button-secondary1">Request a demo</button>
    </div>
    </p>
    </div>
    <img src={Error} alt="Company Logo" className="header-logoi" />
     </div>
     <br/><br/><br/><br/>
     <TrustedComp/>
     <div className="header-container-Deploy">
      <img src={Dep} alt="Company Logo" className="logo-2" />
      <div>
     <h2 className="header-title-Deploy"><l>Alert </l>and Assign, Effortlessly</h2><br/>
     <p className='heading-p-Deploy'>Don’t let errors slow you down. With our full-stack monitoring solution, Vigil,<br/>
      detect and assign issues to the right team members in real-time. Avoid<br/>
       confusion and ensure timely resolutions by streamlining task allocation. Gain<br/>
        deep insights into error patterns with detailed messages, simplifying<br/>
         troubleshooting and optimizing performance with ease.
    <div className="button-group">
      <button className="button-primary">Try for Free</button>
    </div>
    </p>
    </div>
    </div>
  
    
    <div className="header-container3">
      <div>
     <h2 className="header-title-Stream">
     Streamline <l>Incident </l>Management
     </h2><br/>
     <p className='header-p3'>Effortlessly manage incidents, From creation to resolution, Vigil keeps you in <br/>
     control every step of the way. Easily track progress, access crucial details, and <br/>
     prevent any incidents from slipping through the cracks. With Vigil, keep your<br/>
      incident management organized and efficient, all from one centralized hub.
    <div className="button-group">
      <button className="button-primary">Try for Free</button>
    </div>
    </p>
    </div>
    </div>
    <img src={Stream} alt="Company Logo" className="header-logo-Stream" />
    
    <div className="header-container-Deploy">
      <img src={Insights} alt="Company Logo" className="logo-2" />
      <div>
     <h2 className="header-title-Deploy">Gain <l>Insights </l>, Act Faster</h2><br/>
     <p className='heading-p-Deploy'>Understand your code like never before. With Vigil’s application monitoring <br/>
      capabilities, stay one step ahead by proactively identifying and resolving<br/>
       errors in real-time. Pinpoint the root cause of issues and expedite resolutions,<br/>
        ensuring smooth operations. Group errors intelligently based on various <br/>
        factors such as request type, source, and app version, enabling you to tackle<br/>
         them with precision and speed.
    <div className="button-group">
      <button className="button-primary">Try for Free</button>
    </div>
    </p>
    </div>
    </div>
  

    <div className="container-Bottom">
            <div className="text-content-Bottom">
                <p className="content-Bottom">Next action</p>
                <h1 className="heading-Bottom">Dont just discover errors, start monitoring better!</h1>
            </div>
            <button  className="action-button-Bottom">Request Demo</button>
        </div>

<Footer/>
    </div>
  )
}

export default ErrorMonitoring
