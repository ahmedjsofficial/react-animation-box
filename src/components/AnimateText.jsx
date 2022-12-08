import React, { useState } from "react";
import { useInterval } from "react-use";
import '../styles/Demo1.css';

const AnimateText = () => {
  const text = "SOVEREIGN".split("");
  const [textState, setTextState] = useState(text);
  const [count, setCount] = useState(0);
  const play = false;

  useInterval(
    () => {
      setTextState(text);
      setCount(() => count + 1);
    },
    play ? 6000 : null
  );
  return (
    <>
      <div className="brand-wrapper">
        <div className="brand-box-wrapper">
          <div className="box"></div>
          <div className="box hidden-box">
            <span className="text">X</span>
          </div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
        <div className="brand-text">
          <h1 className="animate-text">
            {textState.map((val, i) => (
              <span key={i}>{val}</span>
            ))}
          </h1>
        </div>
      </div>
    </>
  );
};

export default AnimateText;
