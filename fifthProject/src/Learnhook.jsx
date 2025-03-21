import React, { useEffect, useState } from 'react'

const Learnhook = () => {

const [val, setval] = useState(0);
console.log(val)

useEffect(()=>{
console.log('i am inside useEffect')

},[val])
console.log('hello i am outside')





  return (
    <div>
     <h1>This is hookEffect hook practice</h1> 
     <button onClick={()=>setval(val+1)}> Click Here</button>
    </div>
  )
}

export default Learnhook
