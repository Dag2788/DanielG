import React from 'react';

// eslint-disable-next-line
type props = {
   text: String,
   link: any, 
}
// eslint-enable-next-line


function NavLink(props) {
const { text, link } = props;
  return (
    <a class="navLink" href={link}>{text}</a>
  );
}

export default NavLink;
