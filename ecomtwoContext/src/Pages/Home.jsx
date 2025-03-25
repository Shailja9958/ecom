import React from 'react'


const Home = () => {
    const getData=async()=>{
        // let res = await fetch("https://dummyjson.com/products/search?q=phone");
        let data=await res.json();
        console.log(data.products)
    }

  return (
    <div >
        
      
    </div>
  )
}

export default Home
