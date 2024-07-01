import React from 'react'
import Eip from '../../Images/Eip.webp';
import Edith from '../../Images/Edith.webp';
import a360 from '../../Images/a360.webp';
import M from '../../Images/M.webp';
import  karma from '../../Images/karma.webp';
import  Insure from '../../Images/Insure Trek.webp';
import './TrustedComp.css';
const TrustedComp = () => {
  return (
    <div>
        <h5>Trusted by companies around the world</h5>
        <div className='image-row-sm-6'>
       <img src={Eip} alt="VigilNow Logo" className="Eip" />
        <img src={Edith} alt="VigilNow Logo" className="Edith" />
       <img src={a360} alt="VigilNow Logo" className="a360" />
       <img src={M} alt="VigilNow Logo" className="M" />
       <img src={karma} alt="VigilNow Logo" className="karma" />
       <img src={Insure} alt="VigilNow Logo" className="Insure" />
       </div>

       </div>
   
  )
}

export default TrustedComp
