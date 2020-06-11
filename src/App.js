import React, { userState } from 'react';
import './App.css';
import Mes from './message.js';

function App() {

  let [count, setCounter] = userState(0)
  let [bg, changebg] = userState(false)


  return (
    <div className={`bg ${bg ? 'changbg':''}`}>
  <h1>Backgroud {bg ? 'white':'dark'} </h1>
  <br />
  <button onClick={ () => {changebg(!changebg) }}>change Backgroud</button>
  
  
  <Mes counter={count} />
  <br />
  <button onClick={ () => {setCounter(++count) }}>increase the count</button>
  <button onClick={ () => {setCounter(--count) }}>decrease the count</button>
  </div>
  );
}
export default App;
