import React from 'react';

const Button = ({ text, onClick, customClassName }) => {
  return (
    <button onClick={onClick} className={customClassName}>
      {text}
    </button>
  );
};

export default Button;
