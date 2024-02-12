import React from 'react'

export const SliderButton = ({ index, currentIndex }) => {
    const buttonStyle = `rotate-45 w-[10px] h-[10px]  ${index === currentIndex ? 'bg-pink' : ' bg-gray-300'}`;
  
    return (
      <button className={buttonStyle}>
          
      </button>
    );
  };