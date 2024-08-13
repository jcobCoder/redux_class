import {createSlice} from "@reduxjs/toolkit"

const myslicer=createSlice({
name:'user' ,
initialState:0,

  reducers:{

   increment:(state)=>state+1,
   decrement:(state)=> state-1
       
   
   
 

  }



})

export const {increment,decrement}=myslicer.actions

export default myslicer
