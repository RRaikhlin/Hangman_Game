import React, { Component } from 'react';
import Letter from './letter';
import { useState } from 'react';



const Letters = ({findOccurance, evaluateScore}) => {
  const alfabet = "abcdefghijklmnopqrstuvwxyz".split("")
  const usedIndex=[]
  const [letters, setLetters] = useState({alfabet, usedIndex})

 

const setClick = (l) => {
  setLetters(prevLetters => {
    const newUsedIndex = [...prevLetters.usedIndex, l];
    const isMoveSuccess = findOccurance(l)
    evaluateScore(isMoveSuccess)

    return { alfabet: prevLetters.alfabet, usedIndex: newUsedIndex };
  });
};

console.log("check")

  return (
    <>
        <div className='middle'></div>
          <div className='container'>
            {letters.alfabet.map(l => letters.usedIndex.indexOf(l) ==-1 ? <Letter key={l} className="simple" onClick={setClick} letter={l}/> : <Letter  key={l} className="unsimple" onClick={()=>""} letter={l}/>) }
          </div>
        
    </>
  );
};

  
  export default Letters;
  