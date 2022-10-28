import { useEffect, useState } from 'react'

import './App.css'


function App() {
  const [color, setColor] = useState(""); 
  const [answers, setAnswers] = useState<String[]>([]);
  const [score, setScore] = useState(0);


  useEffect( () => {
    pickColor();
  }, []); 
  

  const pickColor = () => {
    const trueColor = getColor();
    setColor(trueColor); 
    setAnswers([trueColor, getColor(), getColor()].sort(
     () => 0.5 - Math.random()));  
  }
    
  const getColor = () => {  
    const color = Math.floor(Math.random()*16777215).toString(16);
    return `#${color}`; 
  }


  const checkAnswer = (answer: string) => {
    if (answer === color) { 
      setScore(score + 1);
      pickColor();
      return true; 
    } else {
      if (score == 0) {
        setScore(0);
      } else {
        setScore(score - 1);
    }
   }
  }
 
  return <div className='App'>
    <div className="guess-me" style={{background: color }}></div>

    <div className="answers">
      {answers.map((answer) => (
        <button onClick={() => checkAnswer(answer)} key={answer}> {answer} </button>   
  ))}  
    </div>
    
  <div className="Score">
    <h1>Score: {score}</h1>
      </div>
  </div>;

      }
export default App; 