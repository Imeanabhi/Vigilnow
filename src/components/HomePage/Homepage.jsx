import React from 'react';
import './Homepage.css';
import Home from '../../Images/HomeImg1.webp';
import TrustedComp from '../TrustedComp/TrustedComp';
import Container1 from '../Container/Container1';
import Container2 from '../Container/Container2';
import Container3 from '../Container/Container3';
import Container4 from '../Container/Container4';
import Home1 from '../../Images/Home1.webp';
import Job from '../../Images/Jobi.webp';
import Improve from '../../Images/Improve Home.webp';
import Api from '../../Images/ApiHome.webp';
import vigil from '../../Images/vigil.webp';
import Footer from '../Footer/Footer.jsx';
import ContainerHome1 from '../ContainerHome/ContainerHome1.jsx';
import ContainerHome2 from '../ContainerHome/ContainerHome2.jsx';
import ContainerHome3 from '../ContainerHome/ContainerHome3.jsx';
import ExpandCont from '../ExpandCont/ExpandCont';

const Homepage = () => {
  return (
    <div>
    <div className="header-container">
      <div>
     <h2 className="header-title0">The <strong>all-in-one </strong> <br/> application monitoring  <br/>platform</h2><br/>
     <p className='header-p'> Easily track and manage errors. Get all the details you <br/>
    need, like the line of code and functions involved, to<br/> fix issues fast.
    <div className="button-group">
     <a href="https://app.vigilnow.com/signUp?utm_source=Vigilnow&utm_medium=website&utm_campaign=landing_page&utm_term=homepage_hero_signup&_gl=1*422nb7*_ga*ODcxNDc2MjUzLjE3MTkzMjk0NTc.*_ga_J431DF6MQN*MTcyMDQ1MjcyMS40My4xLjE3MjA0NTI3MzkuMC4wLjA.&_ga=2.189366255.539706939.1720413142-871476253.1719329457" target="blank"> <button className="button-primary">Try Vigil for free</button></a>
     <a href="https://vigilnow.com/book-a-demo/?utm_source=Vigilnow&utm_medium=website&utm_campaign=landing_page&utm_term=homepage_hero_demo"target="blank"> <button className="button-secondary0">Request a demo</button></a>
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

      <div className="header-container-Exception">
      <img src={Home1} alt="Company Logo" className="header-logo-Exception" />
      <div>
     <h2 className="header-title-Exception">Understand what exactly <br/><l>went wrong</l>in your code</h2><br/>
     <p className='header-p-Exception'>Discover & manage errors with Vigil’s intelligent error<br/> monitoring;
       it captures repetitive exceptions based<br/> on pre-defined criteria and groups them,
        making them<br/> easier to identify. When unexpected exceptions occur,<br/>
       devs can group them for efficient resolution.
    <div className="button-group">
      <a href="https://app.vigilnow.com/signUp?utm_source=Vigilnow&utm_medium=website&utm_campaign=landing_page&utm_term=homepage_error_monitoring&_gl=1*9tmnjl*_ga*ODcxNDc2MjUzLjE3MTkzMjk0NTc.*_ga_J431DF6MQN*MTcyMDQ1MjcyMS40My4xLjE3MjA0NTMyNjYuMC4wLjA.&_ga=2.235216069.539706939.1720413142-871476253.1719329457" target="blank"><button className="button-primary">Try for free</button></a>
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
     <a href="https://app.vigilnow.com/signUp?utm_source=Vigilnow&utm_medium=website&utm_campaign=landing_page&utm_term=homepage_job_monitoring&_gl=1*qy0p*_ga*ODcxNDc2MjUzLjE3MTkzMjk0NTc.*_ga_J431DF6MQN*MTcyMDQ1MjcyMS40My4xLjE3MjA0NTM2MDEuMC4wLjA.&_ga=2.25967737.539706939.1720413142-871476253.1719329457" target="blank"><button className="button-primary">Try for free</button></a>
    </div>
    </p>
    </div>
    </div>
    <img src={Job} alt="Company Logo" className="header-logo3" />
    
    
    
    <div className="header-container-Uptime ">
    <img src={Improve} alt="Company Logo" className="header-logo-Uptime" />
      <div>
     <h2 className="header-title4">Improve <l>Uptime</l> & Performance<br/> Benchmarking</h2><br/>
     <p className='header-p-Uptime'>Utilize health checks to benchmark the performance of 
      applications<br/> & analyze uptime. Data-driven approach facilitates the comparison<br/>
      of current performance  with historical metrics, supporting informed <br/>decision-making
       for improvements.


    <div className="button-group">
    <a href="https://app.vigilnow.com/signUp?utm_source=Vigilnow&utm_medium=website&utm_campaign=landing_page&utm_term=homepage_uptime_monitoring&_gl=1*vc9ga4*_ga*ODcxNDc2MjUzLjE3MTkzMjk0NTc.*_ga_J431DF6MQN*MTcyMDQ1MjcyMS40My4xLjE3MjA0NTM2MDEuMC4wLjA.&_ga=2.201937877.539706939.1720413142-871476253.1719329457" target="blank"><button className="button-primary">Try for free</button></a>
    </div>
    </p>
    </div>
    </div>

    <div className="header-container5">
      <div>
     <h2 className="header-title5">Get the complete picture into <l>API <br/>stability</l></h2><br/>
     <p className='header-p5'>Address issues that may cause slow response times,
       crashes, or other<br/>disruptions. Analyze the performance of your APIs & third-party
        integrations<br/> with Vigil’s robust API monitoring.
    <div className="button-group">
    <a href="https://app.vigilnow.com/signUp?utm_source=Vigilnow&utm_medium=website&utm_campaign=landing_page&utm_term=homepage_api_monitoring&_gl=1*5rtm5y*_ga*ODcxNDc2MjUzLjE3MTkzMjk0NTc.*_ga_J431DF6MQN*MTcyMDQ1MjcyMS40My4xLjE3MjA0NTM2MDEuMC4wLjA.&_ga=2.260265801.539706939.1720413142-871476253.1719329457" target="blank"><button className="button-primary">Try for free</button></a>
    </div>
    </p>
    </div>
    </div>
    <img src={Api} alt="Company Logo" className="header-logo5" />
    
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




    <div className="container-Home">
        <div className='rows'>
<ContainerHome1/>
<ContainerHome2/>
<ContainerHome3/>
        </div>
      </div>
      <br/><br/><br/><br/>

<h1 className="bye">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Got <n>questions?</n><br/>We've gathered some <n>answers</n>
</h1>




<div className="black">
      <ExpandCont
        title="What does Vigil monitor?"
        content="Vigil monitors every aspect of your application’s performance, from errors and background jobs to uptime and APIs. With Vigil, you get a comprehensive view of your application’s health in real-time, allowing you to address issues before they impact your users."
      />
      <ExpandCont
        title="How does Vigil help in detecting and resolving errors?"
        content="Vigil provides real-time error monitoring, instantly alerting you to any issues within your application. With detailed error reports and stack traces, you can quickly identify the root cause of errors and take action to resolve them. Our intuitive interface makes it easy to prioritize and track the resolution process, ensuring a seamless experience for both developers and operations teams."
      />
        <ExpandCont
        title="Can Vigil handle complex background jobs and tasks?"
        content="Absolutely! Vigil is designed to handle even the most complex background jobs and tasks. Whether you’re processing large volumes of data or running asynchronous processes, Vigil’s monitoring capabilities ensure that everything runs smoothly. You’ll have full visibility into job queues, processing times, and job statuses, allowing you to optimize performance and resource utilization."/>
          <ExpandCont
        title="How does Vigil ensure high uptime for my application??"
        content="Vigil employs robust uptime monitoring features to ensure that your application remains available and responsive at all times. With continuous uptime checks and proactive alerting, you’ll be notified immediately of any downtime or performance degradation. Our customizable dashboards provide real-time insights into your application’s availability, empowering you to minimize downtime and maximize reliability."/>
   
   <ExpandCont
        title="Can Vigil help in optimizing API performance?"
        content="Absolutely! Vigil includes comprehensive API monitoring capabilities, allowing you to track endpoint performance, latency, and error rates. With detailed metrics and analytics, you can identify bottlenecks, optimize response times, and improve overall API reliability. Whether you’re building or consuming APIs, Vigil provides the insights you need to deliver a seamless user experience."/>

<div className="container-Bottom">
            <div className="text-content-Bottom">
                
                <h1 className="heading-Bottom">Find out how <n className='jump'>Vigil</n> can help monitor your applications </h1>
            </div>
        <a href="https://calendly.com/maniteja-pm-vigil/30min?utm_source=Vigilnow&utm_medium=website&utm_campaign=landing_page&utm_term=homepage_next_action" target="blank"> <button className="action-button-Bottom">Talk to an expert</button></a>
        </div>
        <br/><br/><br/><br/>

      
    </div>
    






<Footer/>
    </div>
  )
}

export default Homepage
