import React, { useState } from "react";

 function TimerChallenge ({title, targetTime}){
   const[timExpired, SetTimeExpired] =  useState(false)
   const[timeStarted, setTimeStarted]= useState(false)

   function handleStart(){
    setTimeout(() => {
        SetTimeExpired(true);
    }, targetTime * 1000);
    setTimeStarted(true);
   }

    return(
    <section className="challenge">
        <h2>{title}</h2>
        {timExpired && <p>You lost!</p>}
        <p className="challenge-time">
            {targetTime} second {targetTime > 1 ? 's' : ''}
        </p>
        <p>
            <button onClick={handleStart}>
                {timeStarted ? 'Stop' : 'Start'} Challenge
            </button>
        </p>
        <p className={timeStarted ? 'active' : undefined}>
            {timeStarted ? 'Time is running...' : 'Timer inactive'}
        </p>
    </section>
    )
}

export default TimerChallenge;



