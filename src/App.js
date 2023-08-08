import './App.css';
import Score from './component/score';


import { useState } from 'react';



function App() {

const data = {word: "driver",
hint: "A person or thing that controls or operates a vehicle"}

const [score, setScore] = useState(100) 

const lost = () => {
  alert("You are lost")
}



const evaluateScore = (isMoveSuccess) => {
  let newScore = score;
 (isMoveSuccess==true) ? (newScore += 5) : (newScore -= 20) 
  newScore <= 0 ? lost() : setScore(newScore)  
}


const word =()=>data.word



  return (
    <div className="App">
      <Score scores={score} word={word()} hint={data.hint} evaluateScore={evaluateScore}/>
      
    </div>
  );
}

export default App;
