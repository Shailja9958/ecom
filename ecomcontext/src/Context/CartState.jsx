import React, { useState } from 'react'
import CartContext from './CartContext'
const CartState = (props) => {
  const [CartArray, setCartArray] = useState([]);

  const addToCart = (ans)=>{
    console.log(ans)
    setCartArray([...CartArray, ans])
  }
  return (
    <CartContext.Provider value={{CartArray, addToCart}}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartState
