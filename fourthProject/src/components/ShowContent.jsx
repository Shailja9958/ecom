import React from 'react'

const ShowContent = (props) => {

  return (
    <div>
        <h1> welcome to <span style={{backgroundColor:props.color}}>{props.title}</span></h1>
      
    </div>
  )
}

export default ShowContent
