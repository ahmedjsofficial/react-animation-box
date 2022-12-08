import React from "react";
import '../styles/Demo1.css';
import AnimateText from "./AnimateText";

const Demo1 = () => {
 
  const animationBox = new Array(1512)
    .fill()
    .map((_, i) => <div className="animation-box" id={i} key={i}></div>);

  return (
    <>
      <div className="animation-container">
        <div className="animation-box-wrapper">{animationBox}</div>
        <AnimateText/>
      </div>
    </>
  );
};

export default Demo1;
