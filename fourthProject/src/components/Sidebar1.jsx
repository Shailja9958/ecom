import React from 'react'
import Sidebarright1 from './Sidebar1'
import Other from './Other'

const Sidebar1 = (props) => {
  return (
    <div>
      <h1>
        this is sidebar
        this is child of services
      </h1>
      <Other/>
      {/* <Sidebarright1 x={props.x}/> */}
    </div>
  )
}

export default Sidebar1
