import React from 'react'
import { useState } from 'react'

const Conditional1 = () => {
    const [showform,showformx]=useState(false)
    const handleShow=()=>{
       showformx(true)
    }
    const handleClose=()=>{
        showformx(false)

    }
  return (
    <div>
        <button onClick={handleShow}>Show</button>
      {showform && <div className="form">
        <div>
          <button onClick={handleClose} className="cross">X</button>
        </div>
        <label htmlFor="">Name</label>
        <input type="text" />
        <label htmlFor="">Email</label>
        <input type="email" />
        <button style={{ width: "100%", marginTop: "50px" }}>submit</button>
      </div>}
    </div>
  );
}

export default Conditional1
