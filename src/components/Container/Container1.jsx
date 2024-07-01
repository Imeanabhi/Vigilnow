// Container1.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Container1.css';

const Container1 = () => {
  return (
    <div className="container1">
      <h2>Errors</h2>
      <p className='c1'>Discover errors before they disrupt</p><br/>
      <Link to="/error-monitoring">
        <button>Explore</button>
      </Link>
    </div>
  );
};

export default Container1;
