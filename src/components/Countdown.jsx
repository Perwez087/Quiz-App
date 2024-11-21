import React, { useEffect } from 'react'

const Countdown = ({setTimeLeft, timeLeft}) => {

    useEffect(()=>{
      if(timeLeft <= 0){
         return;
      }

      const timer = setTimeout(()=>{
         setTimeLeft((prevTime)=> prevTime - 1);
      },1000)

      return () => clearTimeout(timer);
    },[timeLeft])

    const formatTime = (second) =>{
        const mins = Math.floor(second / 60);
        const secs = second % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

  return (
    <div>
        <h1>Timer</h1>
        <p>{formatTime(timeLeft)}</p>
    </div>
  )
}

export default Countdown
