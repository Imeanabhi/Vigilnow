import React from 'react';
import './Resources.css';
import Linki from '../../Images/Linkedin.png';
import Email from '../../Images/Email.jpeg';
import Footer from '../Footer/Footer.jsx';
import Blog from '../../Images/blogs.webp';

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

  <h3 className="boom">Blogs</h3><br/><br/>

  <div className="header-container-Blog">
      <img src={Blog} alt="Company Logo" className="logoBlog" />
     <div className="containerBlog">
      <a href="http://localhost:3000/boosting-application-reliability" className="url">Boosting Application Reliability with Vigil’s Uptime Monitoring Solution
</a>
<p className="bulbul">24th April 2024 &nbsp;&nbsp; &nbsp;&nbsp;  </p>
      <div className="divider"></div>
      <a href="http://localhost:3000/maximizing-full-stack-monitoring-efficiency" className="url">Maximizing Full Stack Monitoring Efficiency with Vigil’s API Monitoring Feature</a>
      <p className="bulbul">24th April 2024</p>
      <div className="divider"></div>
      <a href="http://localhost:3000/streamlining-full-stack-application-error-monitoring" className="urli">Streamlining Full Stack Application Error Monitoring with Vigil: A Game-Changer for Development Teams</a>
      <p className="bulbul">24th April 2024</p>
    </div>
  
    </div>
    <h3 className="boom1">Enhancing Operational Efficiency with Vigil’s Job Monitoring<br/> Feature</h3>
  <a href="http://localhost:3000/enhancing-operational-efficiency" className="Readmore">Read more</a>



  <div className="container-Bottom">
            <div className="text-content-Bottom">
                
                <h1 className="heading-Bottom">Find out how Vigil can help monitor your applications</h1>
            </div>
            <button  className="action-button-Bottom">Request Demo</button>
        </div>




<br/><br/><br/>
<Footer/>
    </div>
  )
}

export default Resources
