import React from 'react';
import Button from '../common/button/button'
import NavLink from '../common/link/navLink'
import { slide as Menu } from 'react-burger-menu'



function BurgerMenu() {

  return (
    <Menu left>
      {/* <h1>Daniel G.</h1> */}
      {/* <h1><NavLink text='Daniel Garza' link='/'/></h1> */}
      <h3><NavLink text='Professional Experience' link='/'/></h3>
      <h3><NavLink text='Education' link='/'/></h3>
      <h3><NavLink text='About me' link='/'/></h3>
    </Menu>
  );
}

export default BurgerMenu;
