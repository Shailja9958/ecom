import React, { useContext, useEffect, useState } from "react";
import CartContext from "../Context/CartContext";



const Home = () => {
  let x = 10
let ctx=useContext(CartContext);
console.log(ctx)
const [Allproducts, setAllproducts] = useState([]);
const getData=async()=>{
let res = await fetch("https://www.dummyjson.com/products?limit=0");
let data=await res.json();
console.log(data.products)
setAllproducts(data.products)
}
useEffect(()=>{
  getData();
},[])

const handleAdd=(ans)=>{
// console.log(ans)
ctx.addToCart(ans)

}




  return (
    <div>
      <div className="bg-amber-500">This is home page</div>
      {
       Allproducts.map((ele,i)=>{
        return <div className="rounded-l flex-col">
          <img src={ele.thumbnail} alt="" />
          <p>{ele.title}</p>
          <button onClick={()=> handleAdd(ele)}>Add to cart</button>

        </div>
       })
      }
      
    </div>
  );
};

export default Home;
