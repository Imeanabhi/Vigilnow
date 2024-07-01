import React from 'react'
import { Link } from 'react-router-dom';
import './Container3.css';
const Container3 = () => {
  return (
    <div className="container3">
    <h2>APIs</h2>
    <p className='c3'>Track API health in real-time</p>
    <Link to="/api-monitoring">
      <button className="But">Explore</button>
    </Link>
  </div>
  )
}

export default Container3
