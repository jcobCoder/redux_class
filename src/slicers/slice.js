import {createSlice} from '@reduxjs/toolkit'


const userSlice=createSlice({
    name:'user',
    initialState:[],

    reducers:{
        adduser(state,action){
           
             // console.log(action.payload)

              state.push(action.payload)
             
        },

        removeuser(){

        },
        deletea(){

        }


    }


})

export default userSlice
export const {adduser,removeuser,deletea}=userSlice.actions

