import React, { useEffect, useState } from 'react';
import {getQuizDetails} from './services/quiz_service';
import './App.css';
import {QuestionType} from './Types/quiz_types'
import QuestionCard from './Components/QuestionCard';

function App() {

let [quiz, setQuiz]= useState<QuestionType[]>([])
let [currentStep, setCurrentStep]= useState(0)
let [score, setScore]= useState(0)
let [showResult, setShowResult]= useState(false)

  useEffect (()=>{
    async function fetchData() {
      const questios:QuestionType[]= await getQuizDetails(10,'easy');
      setQuiz(questios)
    }

    fetchData();

  },[])

const handleSubmit =(e:React.FormEvent<EventTarget>, userAns:string)=>{
  e.preventDefault();
const currentQuestion:QuestionType=quiz[currentStep]

console.log("Correct Ans : " + currentQuestion.correct_answer+"user Selected: "+userAns)

if(userAns ===currentQuestion.correct_answer ){
    setScore(++score);
}

  if (currentStep !==quiz.length-1)
  setCurrentStep(++currentStep);
  else {
  setShowResult(true);
}
}

if (!quiz.length) 
  return <h3></h3>

if(showResult){
  return (<div className="question-container result-container">
    <h1>Result</h1>
    <p className="result-text">Your Final Score Is <b> {score} </b> Out Of  <b>{quiz.length} </b> </p>
  <button  className="btn"><a className="link" href="index.html">Restart Quiz </a></button>
  </div>)
}

  return (
    <div className="App">

<div className="container">
   <div className="row">
      <div className="neons col-12">
         <h1><em>-Quiz App-</em></h1>
      </div>
   </div>
</div>
      <QuestionCard 
      options={quiz[currentStep].option}
      question={quiz[currentStep].question}
      callback={handleSubmit}
      />
    </div>
  );
}

export default App;
