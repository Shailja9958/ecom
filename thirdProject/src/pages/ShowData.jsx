import React from 'react'

const ShowData = () => {

let x=10;
let obj={
    name:"one",
    age:23,
    course:"fullstack"
}
let arr=[
    {
        id:1,
        name:"one",
        email:"one@gmail.com"

     },
     {
        id:1,
        name:"two",
        email:"two@gmail.com"

     },
     {
        id:1,
        name:"one",
        email:"one@gmail.com"

     },
]





  return (
    <div>
      <p>{x}</p>
      <p>{obj.name}</p>
      <p>{obj.age}</p>
      <p>{obj.course}</p>
      <p>{JSON.stringify(obj)}</p>
      {/* <p>{arr[0].name}</p>
      <p>{arr[0].email}</p>
      <p>{arr[1].name}</p>
      <p>{arr[1].email}</p> */}
      {arr.map((ele,i)=>{
        return <div>
          <p>{ele.name}</p>
          <p>{ele.email}</p>
        </div>;
      })}
    </div>
  );
}

export default ShowData

