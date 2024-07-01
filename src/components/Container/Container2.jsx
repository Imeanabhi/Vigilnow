import React from 'react'
import { Link } from 'react-router-dom';
import './Container2.css';
const Container2 = () => {
  return (
    <div className="container2">
    <h2>Jobs</h2>
    <p className="c2">Oversight of scheduled jobs for smooth workflows</p>
    <Link to="/job-monitoring">
      <button>Explore</button>
    </Link>
  </div>
  )
}

export default Container2

