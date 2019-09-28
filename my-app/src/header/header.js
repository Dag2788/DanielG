import React from 'react';
import Link from '../common/link/link'

function Header() {
  return (
  <div className='header sticky padding-header Lineseparator'>
      <Link style="header headerText" text="DG" link="#top"/>
  </div>
  );
}

export default Header;
