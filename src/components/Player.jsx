import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [enteredUserName, setEnteredUserName] =  useState(null)

function handleClick(){
  setEnteredUserName(playerName.current.value)
  playerName.current.value = '';
}
  return (
    <section id="player">
      <h2> Welcome  { enteredUserName ?? 'unknown entity' }</h2>
      <p>
        <input ref={playerName} type="text"/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
