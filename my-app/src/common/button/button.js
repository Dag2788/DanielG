import React from 'react';

// eslint-disable-next-line
type props = {
   text: String,
   link: String, 
}
// eslint-enable-next-line


function Button(props) {
const { text, link } = props;
  return (
    <button class="button" href={link}>{text}</button>
  );
}

export default Button;