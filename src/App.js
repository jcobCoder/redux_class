// App.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { exampleAction } from './actions';
import { fetchThunk, increment } from './slice';

const App = () => {
  const dispatch = useDispatch();
const status=useSelector((state)=>state.counter.status)
const data=useSelector((state)=>state.counter.data)


  // const handleClick = () => {
  //   dispatch(increment('Hello'));
  // };

useEffect(()=>{
  dispatch(fetchThunk())
},[])
 

  console.log(data)
 
  return (
    <div>
      <h2>{status}</h2>
       {data && data.map((e)=>{
        return(<h3>{e.name}</h3>)
       })}
      
    </div>
  );
};

export default App;
