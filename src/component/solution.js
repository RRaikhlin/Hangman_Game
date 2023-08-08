import React, { Component } from 'react';
import Letters from './letters';
import { useState } from 'react';




const Solution = ({word, hint, evaluateScore}) => {
    const secretWord = word.split("")

    const [guessArray, setGuessArray] = useState(new Array(secretWord.length).fill('_'))
    const [success, setSuccess] = useState(guessArray.filter(l => l === '_').length)

   
    const findOccurance = (l) => {
      let isMoveSuccess = false
      
      const newGuessArray = []
      guessArray.forEach((lw, index) => {
        if (l===secretWord[index]) {
            newGuessArray.push(l)
            isMoveSuccess=true
    } else {
              newGuessArray.push(lw)
            } 
        })

        const updatedSuccess = newGuessArray.filter(l => l === '_').length;

    if (updatedSuccess === 0) {
        setSuccess(alert("You win!"));
    }
      
      setGuessArray(newGuessArray)
      return isMoveSuccess
    }

  return (
    <>
       <div className='middle'></div>
       {guessArray.map( (l, index) => <span key={index} className='solution'> {l} </span>)}
       <div className="hint">{hint}</div>

       <Letters findOccurance={findOccurance} evaluateScore={evaluateScore}/>

    </>
  );
};

  
  export default Solution;
  