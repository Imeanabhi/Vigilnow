import React from 'react'
import { Link } from 'react-router-dom';
import './Container4.css';
const Container4 = () => {
  return (
    <div className="container4">
    <h2>Uptime</h2>
    <p className='c4'>Ensure constant availability of your applications</p>
    <Link to="/health-checks">
      <button className='but'>Explore</button>
    </Link>
  </div>
  )
}

export default Container4
