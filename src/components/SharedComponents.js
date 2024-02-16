import React from 'react';

const Button = ({ children, onClick }) => {
  const buttonStyle = {
    padding: '10px 20px', // Adjust padding to increase button size
    fontSize: '18px', // Adjust font-size to increase text size
  };
  return (
    <button style={buttonStyle} onClick={onClick}>
      {children}
      
    </button>
  );
};

export { Button }