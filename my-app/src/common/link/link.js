import React from 'react';

// eslint-disable-next-line
type props = {
   text: String,
   link: any, 
}
// eslint-enable-next-line


function Link(props) {
const { text, link } = props;
  return (
    <a class="header" href={link}>{text}</a>
  );
}

export default Link;
