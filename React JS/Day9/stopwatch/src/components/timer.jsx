import React from "react";
export const Timer = (props) => {
  return (
    <div className="timerContainer">
      <div className="tsag">
        {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}
      </div>
      <div className="temdeg">:</div>
      <div className="tsag">
        {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}
      </div>
      <div className="temdeg">.</div>
      <div className="tsag">{("0" + ((props.time / 10) % 100)).slice(-2)}</div>
    </div>
  );
};
