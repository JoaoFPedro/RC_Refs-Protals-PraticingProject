import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";


 function TimerChallenge ({title, targetTime}){
   const timer = useRef()
   const[timExpired, SetTimeExpired] =  useState(false)
   const[timeStarted, setTimeStarted]= useState(false)

   function handleStart(){
    timer.current = setTimeout(() => {
        SetTimeExpired(true);
    }, targetTime * 1000);
    setTimeStarted(true);
   }
   function handleStop(){
    clearTimeout(timer.current)
   }

    return(
    <>
    {timExpired && <ResultModal targetTime={targetTime} result ='lost' />}
    <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
            {targetTime} second {targetTime > 1 ? 's' : ''}
        </p>
        <p>
            <button onClick={timeStarted ? handleStop : handleStart}>
                {timeStarted ? 'Stop' : 'Start'} Challenge
            </button>
        </p>
        <p className={timeStarted ? 'active' : undefined}>
            {timeStarted ? 'Time is running...' : 'Timer inactive'}
        </p>
    </section>
    </>    
    )
    
}

export default TimerChallenge;



