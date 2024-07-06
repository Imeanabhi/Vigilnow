import React from 'react'
import './ContainerHome1.css';
import track from '../../Images/Tracking.webp';
const ContainerHome1 = () => {
  return (
    <div>
          <div className="container-Home1">
          <img src={track} alt="Company Logo" className="track-logo" />
      <h2>Public Status Pages for better collaboration</h2>
      <p className='c2'>Give your Team & the relevant stakeholders complete visibility into exception management and work together to fix it faster.</p><br/>
    </div>
    </div>
  )
}

export default ContainerHome1
