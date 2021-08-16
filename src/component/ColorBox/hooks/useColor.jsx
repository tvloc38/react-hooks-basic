import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
useColor.propTypes = {
  
};

function getRandomColor() {
  const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue'];
  const randomIndex = Math.trunc(Math.random() * 5);
  return COLOR_LIST[randomIndex];
}

function useColor() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem('box_color') || 'deeppink';
    return initColor;
  });

  function handleBoxClick() {
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem('box_color', newColor)
  }

  return (
    <div 
      className="color-box"
      style = {{backgroundColor: color}}
      onClick= {handleBoxClick}
    >
      COLOR BOX
    </div>
  );
}

export default useColor;