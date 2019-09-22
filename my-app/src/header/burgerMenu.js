import React from 'react';
import NavLink from '../common/link/navLink'
import { slide as Menu } from 'react-burger-menu'



function BurgerMenu() {

  return (
    <Menu left>
      <h3><NavLink text='Experience' link='/'/></h3>
      <h3><NavLink text='Education' link='/'/></h3>
      <h3><NavLink text='About me' link='/'/></h3>
    </Menu>
  );
}

export default BurgerMenu;
