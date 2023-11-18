import { useState } from "react";


export default function Player() {
  const [enteredUserName, setEnteredUserName] =  useState('')
  const [submitted, setSubmitted] = useState(false)

function handleChange(event){
  setSubmitted(false);
  setEnteredUserName(event.target.value)
}
function handleClick(){
  setSubmitted(true)

}
  return (
    <section id="player">
      <h2> Welcome  {submitted ? enteredUserName: 'unknown entity' }</h2>
      <p>
        <input type="text" onChange={handleChange} value={enteredUserName}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
