import React, { useRef } from 'react'
import {Link,useNavigate} from "react-router-dom"



const SignUp = () => {

   let nameRef = useRef();
   let emailRef = useRef();
   let passwordRef = useRef();
   let navigate = useNavigate();

   let arr=JSON.parse(localStorage.getItem('Ecom'))||[];
   console.log(arr)

const handleSubmit=(e)=>{
  e.preventDefault()
  // console.log('hello')

  let obj = {
    name: nameRef.current.value,
    email: emailRef.current.value,
    password: passwordRef.current.value,
  };
  console.log(obj)

  if(obj.name&&obj.email&&obj.password){
    let find=arr.find((ele)=>ele.email===obj.email)
    if (find){
      return alert ('user already registered')

    }
    else{
      arr.push(obj);
      localStorage.setItem("Ecom",JSON.stringify(arr))
      navigate('/login')
      alert ('user registered suceessfully')
    }
  }

  else{

    alert('please fill all the details')
  }

  
}



  return (
    <div>
      <form
        action=""
        className="bg-gray-400 w-[400px] h-[300px] flex flex-col m-auto mt-[100px] text-black p-3"
      >
        <label htmlFor="">Name</label>
        <input ref={nameRef}
          className="border-px-3 py-2 bg-amber-300 rounded-xl w-full "
          type="text"
        />
        <label htmlFor="">Email</label>
        <input ref={emailRef}
          className="border-px-3 py-2 bg-amber-300 rounded-xl w-full "
          type="email"
        />
        <label htmlFor="">Password</label>
        <input ref={passwordRef}
          className="border-px-3 py-2 bg-amber-300 rounded-xl w-full "
          type="password"
        />
        <button onClick={handleSubmit} className="rounded-l bg-green-400 w-full mt-4 p-4 rounded-xl">SignUp</button>
        <p> Already have an account? <Link className="text-blue-500">login</Link></p>
      </form>
    </div>
  );
}

export default SignUp
