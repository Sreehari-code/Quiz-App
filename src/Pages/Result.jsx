import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Result() {
    const {res}=useParams();
    const navigate = useNavigate()
    function restart()
    {
        navigate('/')
        location.reload()

    }
  return (
    <>
    <div className='flex w-screen h-screen justify-center items-center'>
        <div className=' w-fit h-fit justify-center items-center p-20 text-center'>
    <h1 className='text-4xl font-extrabold'>Your Score : {res}</h1>
    <br /> <br />
    <button className='bg-blue-500 w-50 h-10 rounded-2xl text-2xl' onClick={()=>{restart()}} >Restart Quiz</button>
        </div>
    </div>
    </>
  )
}
