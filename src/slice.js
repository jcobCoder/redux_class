import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"



 export const fetchThunk=createAsyncThunk(
    "user/fetchThunk",

    //////////////////////////////
           async ()=>{

       return new Promise((resolve)=>{

        setTimeout(async()=>{
 
                 const respond= await fetch('http://localhost:3001/mydata') 
                    const data=await respond.json()
                    resolve(data)  
                    
                },2000)

       })
    
//////////////////////////////////////////////

 })



// pending // resolved // error

//loding
//data
//error

const myslicer=createSlice({
name:'user' ,
initialState:{
    data:0,
    status:'idle',
    error:null,
},

  reducers:{

   increment:(state)=>{
   // console.log('dd')
   // state.push('d')
   },
   decrement:(state)=> {

   }
       
  },
  extraReducers:(builder)=>{
     
       builder.addCase(fetchThunk.pending,(state)=>{

         state.status='loading'

       })  
       .addCase(fetchThunk.fulfilled,(state,action)=>{
          
              state.status="succeeded"
              state.data=action.payload
        
       })  
       .addCase(fetchThunk.rejected,(state)=>{

          state.status="error something failed"
       })  
  
    
  }

  


})

export const {increment,decrement}=myslicer.actions

export default myslicer
