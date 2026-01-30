import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let[counter,setcounter]=useState(15)

  //let counter=15

  const addValue = ()=>{
    //counter = counter+1  
    setcounter(counter+1)
}

const removeValue=()=>{
  if(counter > 0) {
    setcounter(counter-1)
  }
}

  return (
    <>
    <h1> rreacct </h1>
    <h2> counter value:{counter} </h2>

    <button
    onClick={addValue}
    >Add value{counter}
    </button>
    <br/>
    <button
    onClick={removeValue}> remove value {counter}
    </button>
    </>
  )
}

export default App
