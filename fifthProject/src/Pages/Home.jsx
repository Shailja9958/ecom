import React from 'react'

const Home = (props) => {
    let name="one";
    props.xyz(name)
  return (
    <div>
      <h1>this is home page</h1>
    </div>
  )
}

export default Home
