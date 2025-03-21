import React, { useState } from 'react'




const ConditionalRendering = () => {
    const[x,setx]=useState(false)

    const handleSwap=()=>{
        if (x===true){
            setx(false)
        }
        else{
            setx(true)
        }
    }
  return (
    <div>
      <h1 >Hello welcome page</h1>
      {/* <h1>this is heading one</h1> */}
      {/* <h2>this is eading two</h2> */}
      {x ? <h1>this is heading one</h1> : <h2>this is eading two</h2>}
      <button onClick={handleSwap}>Swap</button>
    </div>
  );
}

export default ConditionalRendering
