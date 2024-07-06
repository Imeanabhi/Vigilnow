import React from 'react';
import './ExpandCont.css'; // Import CSS for styling (defined below)

const ExpandCont = ({ title, content }) => {
  return (
          <div className="containerEx">
      <input type="checkbox" id={`toggle-${title}`} className="toggle-checkboxEx" />
      <label htmlFor={`toggle-${title}`} className="headerEx">
        <h4>{title}</h4>
        <span className="toggle-buttonEx">+</span>
      </label>
      <div className="contentEx">
        <p className='bull'>{content}</p>
      </div>
    </div>
  )
}

export default ExpandCont
