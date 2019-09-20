import React from 'react';
import Button from '../common/button/button'
import { isMobile } from "react-device-detect";



function Header() {
  return (
 <div className="header sticky">
    <span className='right'>
     <Button text='Home' link='/'/>
     <Button text='Resume' link='/'/>
     <Button text='Pets' link='/'/>
     </span>
 </div>
  );
}

export default Header;
