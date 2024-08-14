import React, { useEffect, useState } from 'react'

function Reuse({name}) {
const [data,setdata]=useState(60)


useEffect(()=>{
    setdata(name)
},[])
  
 
const handel=()=>{
    setdata("hello")
}

return  {data ,handel}
}

export default Reuse