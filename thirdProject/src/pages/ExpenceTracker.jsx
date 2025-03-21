import React, { useRef, useState } from 'react'
import { use } from 'react';

const ExpenceTracker = () => {
  let snoRef=useRef();
  let nameRef = useRef();
  let priceRef = useRef();

  const [expenceArray, setexpenceArray] = useState([
  {
    id: 1,
    name: "petrol",
    price: 400,
  },
  {
    id: 2,
    name: "party",
    price: 1400,
  },
  {
    id: 3,
    name: "moive",
    price: 400,
  },
  {
    id: 4,
    name: "dinner",
    price: 2400,
  },
]);


const handleDelete=(obj,i)=>{
  console.log("running")
  console.log(obj);
  console.log(i);
  let copyArr=[...expenceArray]
  copyArr.splice(i,1)
  console.log(copyArr)
  setexpenceArray(copyArr)

}
const handleSubmit=(e)=>{
  e.preventDefault();
  let obj={
    id:snoRef.current.value,
    name:nameRef.current.value,
    price:priceRef.current.value
  }
  console.log(obj)
  let copyArr=[...expenceArray]
  copyArr.push(obj)
  setexpenceArray(copyArr)
}



  return (
    <div>
      <h3 className="heading">This is Expence Tracker</h3>
      <form action="" className='formPage'>
        <input ref={snoRef} type="number" placeholder="enter sno" />
        <input ref={nameRef} type="text" placeholder="enter name or place" />
        <input ref={priceRef} type="number" placeholder="enter price" />
        <button onClick={handleSubmit}>Add Expence</button>
      </form>
      <table className="expenceTable">
        <thead>
          <tr>
            <th>Sno</th>
            <th>Expence Name</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* <td>1 </td>
            <td>Petrol </td>
            <td>400 </td>
            <td><button>Delete</button></td> */}
          </tr>
          {expenceArray.map((ele, i) => {
            return (
              <tr key={i} className="expenceTable tbody">
                <td>{ele.id}</td>
                <td>{ele.name}</td>
                <td>{ele.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(ele, i)}
                    className="expenceTable button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenceTracker
