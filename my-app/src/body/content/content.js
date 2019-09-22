import React from 'react';
import Link from '../../common/link/link';


function Content() {
  return (
  <div className='options'>
    <Link style='header linkOptions' text="Experience" link="/"/>
   <Link style='header linkOptions' text="Education" link="/"/>
   <Link style='header linkOptions' text="About Me" link="/"/>
  </div>
  );
}

export default Content;
