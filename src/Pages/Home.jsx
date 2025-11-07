import React, { useEffect } from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Home() {
 const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  const [selected, setSelected] = useState(null);
  const [text , setText] = useState("Next")
  const navigate = useNavigate();
  const [sec, setSec] = useState(0);
  const [min , setMin]=useState(0);

  useEffect(()=>{
   setTimeout(()=>{
     setSec(sec +1);
 },1000)
if(sec== 60)
{
  setMin(min + 1);
  setSec(0);
}
  },[sec])
 
  const questions = [
  {
    q: "What does CPU stand for?",
    a1: "Central Processing Unit",
    a2: "Central Program Utility",
    a3: "Control Processing Unit",
    a4: "Central Power Unit",
    correct: "Central Processing Unit",
  },
  {
    q: "Which language is used for web page structure?",
    a1: "Python",
    a2: "HTML",
    a3: "C++",
    a4: "CSS",
    correct: "HTML",
  },
  {
    q: "Which tag is used to insert an image in HTML?",
    a1: "<img>",
    a2: "<image>",
    a3: "<src>",
    a4: "<pic>",
    correct: "<img>",
  },
  {
    q: "Which of the following is a JavaScript framework?",
    a1: "Laravel",
    a2: "React",
    a3: "Django",
    a4: "Flask",
    correct: "React",
  },
  {
    q: "Which CSS property changes text color?",
    a1: "font-style",
    a2: "text-color",
    a3: "color",
    a4: "background-color",
    correct: "color",
  },
];


  function answer(selectedAnswer) {
    const current = questions[number];
    setSelected(selectedAnswer);
    if (selectedAnswer === current.correct) {
      setCount(count + 1);
    }
  }

  function next() {
    if(text == "Next")
    {

    if (number < questions.length - 1) {
      setNumber(number + 1);
      setSelected(null); 
    } 
    if(number >= questions.length-2){
    
     setText("Finish")
    }}
    else{
        navigate(`/result/${count}`)
    }

  }

  
  function prev()
  {
    if(number == 0)
    {
        return;
    }
    else{
 setNumber(number-1);
    }
   
  }


  const getButtonStyle = (answer) => {
   if(!selected) return{};
    if (answer==selected ) {
      return { border: "4px solid green" , boxShadow: "0px 0px 5px",borderRadius:"10px",color: "black" , backgroundColor:"green" };
    }
    return {};
  };


function dissapear(num)
{
    if(num == 0)
    {
        return{display: "none"}
    }
}
  const q = questions[number];

  return (
    <>
    <h1 className="absolute text-4xl m-10 text-blue-500 font-bold" >Quiz App</h1>
    <h1 className="absolute top-30 left-50 font-bold text-2xl">Question {number+1} :   </h1>
    <h1 className="absolute top-30 right-50 font-bold text-xl">{min} : {sec}  </h1>
  <div className="max-w-screen h-screen text-center flex justify-center items-center ">
   
    <div className=" shadow-2xl  w-300 h-100 justify-center items-center relative">
      <h1 className="p-10 text-start text-2xl font-bold shadow-xl bg-blue-500">{q.q}</h1>
    <div className=" mt-10 ml-20 flex w-260   justify-between">
      <button
        style={getButtonStyle(q.a1)}
        onClick={() => {answer(q.a1)} }
        className="h-15 pl-4 pr-4 border-3 border-black  w-100 text-blue-500 rounded-2xl"
      >
        {q.a1}
      </button>

      <button
        style={getButtonStyle(q.a2)}
        onClick={() => answer(q.a2)}
         className="h-15 pl-4 pr-4 border-3 border-black w-100 text-blue-500 rounded-2xl"
      >
        {q.a2}
      </button>
  </div>
<div className=" mt-10 ml-20  flex w-260   justify-between text-blue-500">
      <button
        style={getButtonStyle(q.a3)}
        onClick={() => answer(q.a3)}
         className="h-15 pl-4 pr-4 border-3 border-black  w-100 rounded-2xl"
      >
        {q.a3}
      </button>
      <button
        style={getButtonStyle(q.a4)}
        onClick={() => answer(q.a4)}
         className="h-15 pl-4 pr-4 border-3 w-100 text-blue-500 border-black rounded-2xl"
      >
        {q.a4}
      </button>
      </div>
 
    
      <button onClick={next} className="border w-60 h-10  absolute right-4 bottom-4 rounded-2xl text-black bg-blue-500">{text} &nbsp; 🡲</button>
         <button  onClick={prev} style={dissapear(number)}  className="border w-60 h-10  absolute left-4 bottom-4 rounded-2xl text-black bg-blue-500">🡰 Previous</button>


    </div>
    </div>
    </>
  );
}
