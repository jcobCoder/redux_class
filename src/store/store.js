import {configureStore} from "@reduxjs/toolkit"
import myslicer from "../slice"



const store=configureStore({

   reducer:{
    counter: myslicer.reducer
   },
  

})


export default store
