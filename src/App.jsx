import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Result from "./Pages/Result";
import Start from "./Pages/Start";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  const [selected, setSelected] = useState(null);
  const [text , setText] = useState("Next")

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
    if (selected) return; 
    const current = questions[number];
    setSelected(selectedAnswer);
    if (selectedAnswer === current.correct) {
      setCount(count + 1);
    }
  }

  function next() {
    if (number < questions.length - 1) {
      setNumber(number + 1);
      setSelected(null); 
    } 
  else if(number >= questions.length-4){
    
     setText("Finish")
    }
  }


  const getButtonStyle = (answer) => {
    if (!selected) return {};
    if (answer === selected) {
      return { border: "2px solid blue",borderRadius:"10px",color: "black" };
    }
    return {};
  };

  const q = questions[number];

  return (
    <>
    {/* <h1 className="absolute text-4xl m-15 text-blue-500">Quiz App</h1>
    <h1 className="absolute top-30 left-50 font-bold text-2xl">Question {number+1} :</h1>
  <div className="max-w-screen h-screen text-center flex justify-center items-center ">
   
    <div className=" shadow-2xl  w-300 h-100 justify-center items-center relative">
      <h1 className="p-10 text-start text-2xl font-bold shadow-xl bg-blue-500">{q.q}</h1>
    <div className=" mt-10 ml-20 flex w-260   justify-between">
      <button
        style={getButtonStyle(q.a1)}
        onClick={() => answer(q.a1)}
        className="h-15 pl-4 pr-4 border-2 border-black  w-100 text-blue-500 rounded-2xl"
      >
        {q.a1}
      </button>

      <button
        style={getButtonStyle(q.a2)}
        onClick={() => answer(q.a2)}
         className="h-15 pl-4 pr-4 border-2 border-black w-100 text-blue-500 rounded-2xl"
      >
        {q.a2}
      </button>
  </div>
<div className=" mt-10 ml-20  flex w-260   justify-between text-blue-500">
      <button
        style={getButtonStyle(q.a3)}
        onClick={() => answer(q.a3)}
         className="h-15 pl-4 pr-4 border-2 border-black  w-100 rounded-2xl"
      >
        {q.a3}
      </button>
      <button
        style={getButtonStyle(q.a4)}
        onClick={() => answer(q.a4)}
         className="h-15 pl-4 pr-4 border-2 w-100 text-blue-500 border-black rounded-2xl"
      >
        {q.a4}
      </button>
      </div>
 
      
      <button onClick={next} className="border w-60 h-10  absolute right-4 bottom-4 rounded-2xl text-black bg-blue-500">{text}</button>
   

     
    </div>
    </div> */}

   <Routes>
    <Route path="/" element={<Start/>}/>
    <Route path="/quiz" element={<Home/>}/>
    <Route path="/result/:res" element={<Result/>}/>
   </Routes>
    </>
  );
}

export default App;
