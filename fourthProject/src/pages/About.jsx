import React from "react";
import ShowContent from "../components/ShowContent";
import Navbar from "../components/Navbar";
import Trial1 from "../components/Trial1";

const About = () => {
  let x = 10;
  return (
    <div>
      <Trial1 x={x} />
      {/* <h2>This is about page</h2> */}
      {/* <Navbar title={'hey aa'}/> */}
      {/* <ShowContent title={'About page'} color="blue" /> */}
    </div>
  );
};

export default About;
