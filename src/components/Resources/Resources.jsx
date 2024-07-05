import React from 'react';
import './Resources.css';
import Linki from '../../Images/Linkedin.png';
import Email from '../../Images/Email.jpeg';
import Footer from '../Footer/Footer.jsx';

const Resources = () => {
  return (
  
        <div>
       <div className="header-container-Teamsi">
     <h2 className="header-title-Teams">
     All about application monitoring</h2>
     <p className='header-p-team'> 
     Whether you’re a seasoned developer or just getting started, keeping a close eye on your application’s<br/>
      performance is crucial for maximizing efficiency. Here, we’ve gathered a collection of resources to help you<br/>
       monitor applications  with ease.
     <div className="button-groupp">
      <p className='Connect'>
        Connect with us:
      </p>
      <a href="https://www.linkedin.com/products/foxsense-innovations-vigil/"rel="noopener noreferrer" target="_blank"><img src={Linki}   alt="Company Logo" className="Linkt" /></a>
      <a href="mailto:support@vigilnow.com" target="_blank"  rel="noopener noreferrer" ><img src={Email} alt="Company Logo" className="Linkr" /></a>
   </div>
    </p>
     </div>
     <br/><br/><br/><br/>
     <h2 className="SDK">
     Choose your SDK
     </h2>
  <div className="Container-button">
    <div className="row-sm-3">
    <a href="https://www.npmjs.com/package/@foxsenseinnovations/vigil-sdk-js" rel="noopener noreferrer" target="_blank">
    <div class="node">
        <h4 class="nodei">Node.js</h4>
    </div>
</a>

<a href="https://www.nuget.org/packages/Foxsense.Innovations.VigilSDK" rel="noopener noreferrer" target="_blank">
    <div class="net">
        <h4 class="neti">.Net</h4>
    </div>
</a>

<a href="https://pypi.org/project/foxsenseinnovations.vigil/" rel="noopener noreferrer" target="_blank">
    <div class="django">
        <h4 class="djangoi">Django</h4>
    </div>
</a>

      
      
    </div>
  </div>


<br/><br/><br/>
<Footer/>
    </div>
  )
}

export default Resources
