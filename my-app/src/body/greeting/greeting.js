import React from 'react';
import Austin from '../../pictures/austin3.jpg'
import { isMobile, MobileView}  from 'react-device-detect';

function Greeting() {
  return (
    <div className='parallax'>
  <div className="container">
    <div className='row'></div>
    <div className='col-4'>
  {!isMobile && <div className='greetingTextDG'>DG</div> }  
  {isMobile && MobileView &&  <div className='greetingTextDG circle'>DG</div> }
      </div>
    </div>
    {/* <img className="myFace" src={Dan} alt="Dan"/> */}
  </div>



  );
}

export default Greeting;
