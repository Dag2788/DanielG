import React from 'react';
import {isMobile, MobileView } from 'react-device-detect';

// eslint-disable-next-line
type props = {
   text: String,
   link: any, 
   handleClick : Function;
}
// eslint-enable-next-line


function NavLink(props) {

 const closeMenu = (props) => {
    const { handleClick } = props;
    handleClick();
  }

const { text , link} = props;
  return (
    <a class="navLink" onClick={() => closeMenu(props)} href={link}>{text}</a>
  );
}

export default NavLink;
