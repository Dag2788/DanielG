import React from 'react';

// eslint-disable-next-line
type props = {
   text: String,
   handleClick: Function,
   style: String, 
}
// eslint-enable-next-line



function Button(props) {
  const { text, style } = props;


   const handleEvent = (props) => {
    const { text, handleClick } = props;
    handleClick(text);
  }
  return (
    <a className={style} onClick={() => handleEvent(props)}>{text}</a>
  );
}

export default Button;
