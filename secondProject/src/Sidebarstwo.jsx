import React,{useState} from 'react'

function Sidebartwo(){
    const[count, setcount]=useState(0)
    // let count=0;
    console.log(count)

    const handleIncrement=()=>{
        setcount(count+1)
    }
    const handleDecrement=()=>{
        
        if(count>0){
            setcount(count - 1);
        }
    }
    const handleMultiply=()=>{
          setcount(count*2)
    }
    const handleDivide=()=>{
        setcount(count/5)
    }
    const handleReset=()=>{
        setcount(0)
    }

    return (
        <div>
            <h1 style={{textAlign:"center" }}>this is counter appp</h1>
            <h1 style={{textAlign:"center"}}> count={count}</h1>
            <div style={{textAlign:"center"}}>
                <button onClick={handleIncrement} style={{padding:"10px 20px",margin:"5px 10px" }}>Increment</button>
                <button class="one" onClick={handleDecrement} style={{padding:"10px 20px",margin:"5px 10px"}}>Decrement</button>
                <button onClick={handleMultiply} style={{padding:"10px 20px",margin:"5px 10px"}}>Multiply by 2</button>
                <button onClick={handleDivide} style={{padding:"10px 20px",margin:"5px 10px"}}>Divide by 5</button>
                <button onClick={handleReset} style={{padding:"10px 20px",margin:"5px 10px"}}> Reset</button>
            </div>

            
        </div>
    )

}
export default Sidebartwo 