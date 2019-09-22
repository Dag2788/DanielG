import React from 'react';

// eslint-disable-next-line
type props = {
   text: String,
   link: any, 
   style: String,
}
// eslint-enable-next-line


function Link(props) {
const { text, link, style } = props;
  return (
    <a class={style} href={link}>{text}</a>
  );
}

export default Link;
