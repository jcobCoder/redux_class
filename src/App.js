import React, { useEffect, useState } from 'react';
import Home from './home';
import Login from './login';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './slice';

 

// action creator
//store 
// reducer 

//useslector

function App() {

const data=useSelector((state)=>state.counter)

const makechage=useDispatch()

const incre=()=>{
  makechage(increment())

}
 
  return (
    <div>
      <button onClick={incre}>increment</button>
      <h1>{data}</h1> 
    </div>
  );
}

export default App;
