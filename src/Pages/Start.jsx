import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Start() {
    const navigate = useNavigate();
    function nav()
    {
        navigate("/quiz");
    }
  return (
    <>
      <div className='felx   w-screen h-screen'>
     <h1 className="absolute text-4xl m-10 text-blue-500 font-bold" >Quiz App</h1>
  
           
<div className='border flex justify-center h-screen items-center'>
    <h1 className='font-extrabold text-5xl'>Start Quiz...</h1>
    <button className='border w-30 h-10 rounded-2xl ml-10 mt-2 bg-blue-500 font-bold' onClick={()=>nav()}>Start &nbsp; ➜</button>
</div>


    </div>
    </>
  )
}
