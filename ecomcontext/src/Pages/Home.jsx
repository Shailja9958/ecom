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
const [currentPage, setcurrentPage] = useState(1);
const itemPerPage = 10;
const lastIndex = itemPerPage * currentPage;
const firstIndex = lastIndex - itemPerPage;
let noOfBtn = Math.ceil(Allproducts.length / itemPerPage);
console.log(noOfBtn); 

let slicedArr = Allproducts.slice(firstIndex, lastIndex);
console.log(slicedArr);

const handleNext = () => {
  if (currentPage < noOfBtn) {
    setcurrentPage(currentPage + 1);
  }
};

const handlePrev = () => {
  if (currentPage > 1) {
    setcurrentPage(currentPage - 1);
  }
};






  return (
    <div>
      <div className="p-6 bg-gray-500 grid gap-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 ">
        {slicedArr.map((ele, i) => {
          return (
            <div className="'flex bg-red-500 gap-2 rounded-md p-3 flex-col justify-between items-center'">
              <img src={ele.thumbnail} alt="" />
              <p>{ele.title}</p>
              <button
                onClick={() => handleAdd(ele)}
                className="bg-green-500 px-3 py-2 rounded-md text-white">
                
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <button onClick={handlePrev} className="bg-gray-700">
         
          Prev
        </button>
        {Array(noOfBtn)
          .fill("")
          .map((ele, i) => {
            return (
              <button key={i+1}
                onClick={() => setcurrentPage(i + 1)}
                className="bg-blue-500 rounded-md p-1 w-10 `${currenPage===i+1?'bg-green-400':'bg-white'}"
              >
                {i + 1}
              </button>
            );
          })}
        <button onClick={handleNext} className="bg-gray-700">
          Next
        </button>
        {/* {Array(noOfBtn).fill('').map((ele,i)=>{
          return(
            {()}
          )

        })} */}

      </div>
    </div>
  );
};

export default Home;
