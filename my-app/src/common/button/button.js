import React from 'react';

type props = {
   text: String,
   link: String, 
}


function Button(props) {
const { text, link } = props;
  return (
    <button class="button" href={link}>{text}</button>
  );
}

export default Button;
