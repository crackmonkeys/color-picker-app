import { useEffect, useState } from 'react'

import './App.css'

 


function App() {
  const [color, setColor] = useState(""); 
  const [answers, setAnswers] = useState<String[]>([]);





  useEffect( () => {
     const trueColor = getColor();
     setColor(trueColor); 

     setAnswers([trueColor, getColor(), getColor()].sort(
      () => 0.5 - Math.random())); 
  }, []); 
    
  const getColor = () => {  
    const color = Math.floor(Math.random()*16777215).toString(16);
    return `#${color}`; 
  }




  return <div className='App'>
    <div className="guess-me" style={{background: color }}></div>

  answers.map((answer = () = {
      <button> key={answers} >{answers}</button>
  })

  </div>;

  }

export default App; 

