import React from 'react';
import './Homepage.css';
import Home from '../../Images/HomeImg1.webp';
import TrustedComp from '../TrustedComp/TrustedComp';
import Container1 from '../Container/Container1';
import Container2 from '../Container/Container2';
import Container3 from '../Container/Container3';
import Container4 from '../Container/Container4';
import Exec from '../../Images/Exception.webp';
import Moni from '../../Images/Monitoring.webp';
import Sum from '../../Images/Summary.webp';
import Res from '../../Images/Response.webp';
import vigil from '../../Images/vigil.webp'


const Homepage = () => {
  return (
    <div>
    <div className="header-container">
      <div>
     <h2 className="header-title0">The <strong>all-in-one </strong> <br/> application monitoring  <br/>platform</h2><br/>
     <p className='header-p'> Easily track and manage errors. Get all the details you <br/>
    need, like the line of code and functions involved, to<br/> fix issues fast.
    <div className="button-group">
      <button className="button-primary">Try Vigil for free</button>
      <button className="button-secondary0">Request a demo</button>
    </div>
    <h6><b>*vigil</b> is free for 5 days</h6>
    </p>
    </div>
    <img src={Home} alt="Company Logo" className="header-logom" />
     </div>
     <br/><br/><br/><br/>
     
     <TrustedComp/>
     <h2 className='everything'>Everything your <strong>developer</strong> needs to monitor better</h2>
     <h5 className='Developer'>Developer-first monitoring platform
       providing visibility into the root-cause of every issue</h5>
       <div className="container-row">
        <div className='row-sm-4'>
        <Container1 />
        <Container2 />
        <Container3/>
        <Container4/>
        </div>
      </div>

      <div className="header-container2">
      <img src={Exec} alt="Company Logo" className="header-logo2" />
      <div>
     <h2 className="header-title2">Understand what exactly <br/><l>went wrong</l>in your code</h2><br/>
     <p className='header-p2'>Discover & manage errors with Vigil’s intelligent error<br/> monitoring;
       it captures repetitive exceptions based<br/> on pre-defined criteria and groups them,
        making them<br/> easier to identify. When unexpected exceptions occur,<br/>
       devs can group them for efficient resolution.
    <div className="button-group">
      <button className="button-primary">Try Vigil for free</button>
    </div>
    </p>
    </div>
    </div>
  
    
    <div className="header-container3">
      <div>
     <h2 className="header-title2">Streamline <l>job monitoring </l>to<br/> improve application
      efficiency</h2><br/>
     <p className='header-p3'>Receive immediate alerts with ob monitoring, empowering 
      you to oversee and<br/> manage various scheduled and configured jobs. 
      Stay informed in real-time,<br/> ensuring the seamless execution of critical tasks.
    <div className="button-group">
      <button className="button-primary">Try Vigil for free</button>
    </div>
    </p>
    </div>
    </div>
    <img src={Moni} alt="Company Logo" className="header-logo3" />
    
    
    
    <div className="header-container4 ">
    <img src={Sum} alt="Company Logo" className="header-logo4" />
      <div>
     <h2 className="header-title4">Improve <l>Uptime</l> & Performance<br/> Benchmarking</h2><br/>
     <p className='header-p4'>Utilize health checks to benchmark the performance of 
      applications & analyze<br/> uptime. Data-driven approach facilitates the comparison 
      of current performance<br/> with historical metrics, supporting informed decision-making
       for improvements.


    <div className="button-group">
      <button className="button-primary">Try Vigil for free</button>
    </div>
    </p>
    </div>
    </div>

    <div className="header-container5">
      <div>
     <h2 className="header-title2">Get the complete picture into <l>API stability</l></h2><br/>
     <p className='header-p5'>Address issues that may cause slow response times,
       crashes, or other<br/>disruptions. Analyze the performance of your APIs & third-party
        integrations<br/> with Vigil’s robust API monitoring.
    <div className="button-group">
      <button className="button-primary">Try Vigil for free</button>
    </div>
    </p>
    </div>
    </div>
    <img src={Res} alt="Company Logo" className="header-logo5" />
    
    <div className="content-side-container">
    <div className="header-container6">
      <div className="content">
     <h1 className="header-title6"><blue>The </blue><img src={vigil} alt="Company Logo" className="header-logo6" /> <blue>difference </blue></h1><br/>
     <p className='header-p6'>No more worrying about unexpected downtime<br/>
       disrupting your business operations

    </p>
    </div>
    </div>
    <div className="vertical-container">
      <div className="containeri">
        <h2>Error Grouping</h2>
        <p>Vigil’s intelligent monitoring helps capture<br/>
           repetitive errors based on pre-defined criteria and<br/> groups them,
            making it easier to identify.</p>
      </div>
      <div className="containeri">
        <h2>Easy tracking</h2>
        <p>Vigil keeps track of uptime and downtime<br/> incidents,
          giving you valuable insights into how <br/> your application
            is performing.</p>
      </div>
      <div className="containeri">
        <h2>Smart alerts</h2>
        <p>Receive alerts into slack or teams, email,
           in-app <br/>with complete error information, 
           cutting down<br/> on unnecessary noise.</p>
      </div>
    </div>
    </div>

    </div>
  )
}

export default Homepage
