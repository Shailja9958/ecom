import React, { useContext } from 'react'
import CartContext from '../Context/CartContext'

const Login = () => {
  let x=useContext(CartContext)
  console.log(x)
  return (
    <div>
      <div>This is login page</div>
    </div>
  )
}

export default Login
