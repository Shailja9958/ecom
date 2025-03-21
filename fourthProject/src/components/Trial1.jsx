import React from "react";
import trial from "./Trial1";
import Sidebar1 from "./Sidebar1";

const Trial1 = (props) => {
  return (
    <div>
      <h1>This is trial page</h1>
      <Sidebar1 x={props.x} />
    </div>
  );
};

export default Trial1;
