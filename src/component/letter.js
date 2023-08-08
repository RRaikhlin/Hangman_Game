import React from 'react';

const Letter = ({ letter, className, onClick }) => {
  const handleClick = () => {
    onClick(letter);
  };  

  return (
    <>
      <span className={className} onClick={handleClick}>
        {letter}
      </span>
  
    </>
  );
};

export default Letter;

