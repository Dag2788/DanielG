import React from 'react';
import Link from '../common/link/link'

function Header() {
  return (
  <div className='header sticky padding-header'>
      <Link style="header headerText" text="DANIEL GARZA" link="/"/>
  </div>
  );
}

export default Header;
