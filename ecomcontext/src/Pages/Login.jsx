import React, { useContext, useRef } from 'react'
import CartContext from '../Context/CartContext';
import { Link, Navigate, useNavigate } from "react-router-dom";
import Typed from "typed.js";



const Login = () => {
  let x=useContext(CartContext)
  console.log(x)

  let emailRef = useRef();
  let passwordRef = useRef();
  let navigate = useNavigate();

  let arr = JSON.parse(localStorage.getItem("Ecom")) || [];
  console.log(arr);


  const handleSubmit=(e)=>{
e.preventDefault()
// console.log('hello')
let obj = {
  email: emailRef.current.value,
  password: passwordRef.current.value,
};
console.log(obj)

    let find = arr.find((ele) => ele.email === obj.email);

  if (find){
    if(find.password==obj.password){
      return(navigate('/'))
    }
    else{
      alert('wrong password')
    }

  }
  else{
    alert('please signup')
  }


  }
  const el = React.useRef(null);


  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["login","signup","portfolio"],
      typeSpeed: 50,
      backSpeed:20
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
   

  return (
    <div>
      <form
        action=""
        className="bg-pink-200 rounded-xl  w-[400px] h-[300px] flex flex-col m-auto mt-[100px] text-black p-4"
      >
        <h3>
          This page is for <span ref={el}  />
        </h3>
        <label htmlFor="">Email</label>
        <input
          ref={emailRef}
          className="border-px-3 py-2 bg-amber-300 rounded-xl w-full "
          type="email"
        />
        <label htmlFor="">Password</label>
        <input
          ref={passwordRef}
          className="border-px-3 py-2 bg-amber-300 rounded-xl w-full "
          type="password"
        />

        <button
          onClick={handleSubmit}
          className="rounded-l bg-green-400 w-full mt-4 p-4 rounded-xl"
        >
          Login
        </button>
        <p>
          {" "}
          New user? <Link className="text-blue-500"> SignUp</Link> here
        </p>
      </form>
    </div>
  );
}

export default Login
