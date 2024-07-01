import React from 'react'
import './APIMonitoring.css';
import Api from '../../Images/API.webp';
import TrustedComp from '../TrustedComp/TrustedComp';
const APIMonitoring = () => {
  return (
    <div>
         <div className="header-containerr">
      <div>
     <h2 className="header-title3">Monitor application <strong>errors</strong><br/> more effectively</h2><br/>
     <p className='header-p'> Easily track and manage errors. Get all the details you <br/>
    need, like the line of code and functions involved, to<br/> fix issues fast.
    <div className="button-group">
      <button className="button-secondary1">Request a demo</button>
    </div>
    <h6><b>*vigil</b> is free for 5 days</h6>
    </p>
    </div>
    <img src={Api} alt="Company Logo" className="header-logoo" />
     </div>
     <br/><br/><br/><br/>
     <TrustedComp/>
    </div>
  )
}

export default APIMonitoring
