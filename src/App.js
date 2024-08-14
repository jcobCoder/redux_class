import React, { useEffect, useState } from 'react';
import Home from './home';
import Login from './login';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './slice';
import Reuse from './reuse';

 

// action creator
//store 
// reducer 

//useslector

function App() {
 const {data,handel}=Reuse({name:4000})
// const data=useSelector((state)=>state.counter)

// const makechage=useDispatch()

// const incre=()=>{
//   makechage(increment())

// }
 
  return (
    <div>
      <button onClick={()=>{handel()}}>click</button>
       {data}
    </div>
  );
}

export default App;
