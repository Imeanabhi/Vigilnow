import React from 'react';
import './JobMonitoring.css'
import Job from '../../Images/Job.webp';
import TrustedComp from '../TrustedComp/TrustedComp';
import Track from '../../Images/Tracking.webp';
import Data from '../../Images/Data.webp';
import Efficiency from '../../Images/Efficiency.webp';
import Footer from '../Footer/Footer.jsx';
const JobMonitoring = () => {
  return (
    <div>
         <div className="header-container-Main">
      <div>
     <h2 className="header-title-Heading">Simplify <strong>Job Monitoring</strong></h2><br/>
     <p className='header-p'> Manage your application jobs effortlessly. Stay updated<br/>
      on their performance and status, ensuring efficient<br/>
      execution and system reliability.
    <div className="button-group">
      <button className="button-secondary-Job">Request a demo</button>
    </div>
    </p>
    </div>
    <img src={Job} alt="Company Logo" className="header-logo-Head" />
     </div>
     <br/><br/><br/><br/>
     <TrustedComp/>
     <div className="header-container-Track">
      <img src={Track} alt="Company Logo" className="header-logo-Track" />
      <div>
     <h2 className="header-title-Track">Easy <l>Tracking </l>and <l>Monitoring</l></h2><br/>
     <p className='header-p-Track'>Discover & manage errors with Vigil’s intelligent error<br/> monitoring;
       it captures repetitive exceptions based<br/> on pre-defined criteria and groups them,
        making them<br/> easier to identify. When unexpected exceptions occur,<br/>
       devs can group them for efficient resolution.
    <div className="button-group">
      <button className="button-primary">Try for Free</button>
    </div>
    </p>
    </div>
    </div>
  
    
    <div className="header-container-Data">
      <div>
     <h2 className="header-title-Data">Comprehensive <l>Data  Capture</l></h2><br/>
     <p className='header-p-Data'>Gain insights into your job performance effortlessly. Vigil captures crucial<br/>
      data such as job status and timestamps, giving you a comprehensive <br/>
      understanding of your application workflows.
    <div className="button-group">
      <button className="button-primary">Try for Free</button>
    </div>
    </p>
    </div>
    </div>
    <img src={Data} alt="Company Logo" className="header-logo-Data" />
    
    
    
    <div className="header-container-Efficiency ">
    <img src={Efficiency} alt="Company Logo" className="header-logo-Efficiency" />
      <div>
     <h2 className="header-title-Efficiency">Enhanced <l>Efficiency</l></h2><br/>
     <p className='header-p-Efficiency'>Stay ahead of issues and streamline your workflow. By effortlessly capturing <br/>
     job statuses and timestamps, you can optimize your application operations <br/>
     and ensure smoother execution.

    <div className="button-group">
      <button className="button-primary">Try for Free</button>
    </div>
    </p>
    </div>
    </div>

    <div className="container-Bottom">
            <div className="text-content-Bottom">
                <p className="content-Bottom">Next action</p>
                <h1 className="heading-Bottom">Streamline job monitoring for your applications</h1>
            </div>
            <button className="action-button-Bottom">Request Demo</button>
        </div>




<Footer/>
    </div>
  )
}

export default JobMonitoring
