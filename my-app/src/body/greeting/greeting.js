import React from 'react';
import Dan from '../../pictures/myFace4.png'


function Greeting() {
  return (
  <div className="greetingDiv">
    <img className="myFace" src={Dan} alt="Dan"/>
  </div>
  );
}

export default Greeting;
