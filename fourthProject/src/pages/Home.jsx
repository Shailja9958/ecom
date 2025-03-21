import React from 'react'
import Navbar from '../components/Navbar'
import ShowContent from '../components/ShowContent'

const Home = () => {
  let x=45
  // let y="hello"
  return (
    <div>
      <Navbar x={x} y={"hello"} />
      <ShowContent title={"Home page"} color= "red"/>
      {/* <h1>This is home page</h1> */}
      {/* <h1>num={x}</h1> */}
    </div>
  )
}

export default Home
