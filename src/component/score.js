import React, { Component } from 'react';
import Solution from './solution';




const Score = ({scores, word, hint, evaluateScore}) => {
    const score=scores
    const scoreClass=()=>{
      if (score>=80) {return "score scoreGreen"}
      if (score>=30) {return "score scoreYellow"}
      return "score scoreRed"
    }

  return (
    <>
        <div className={scoreClass()}>{score}</div>
        <Solution word={word} hint={hint} evaluateScore={evaluateScore}/>
    </>
  );
};

  
  export default Score;
  