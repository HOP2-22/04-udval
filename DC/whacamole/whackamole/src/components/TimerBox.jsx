import React from "react";
import { useEffect } from "react";
import { useState } from "react";
export const TimerBox = ({ started, setStarted }) => {
  const [time, setTime] = useState(30000);

  useEffect(() => {
    let interval = null;
    if (time === 0) {
      setStarted(false);
      setTime(30000);
    }
    if (started === true) {
      interval = setInterval(() => {
        setTime((time) => time - 10);
      }, 10);
    }
    return () => {
      clearInterval(interval);
    };
  }, [started, time]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "50px",
      }}
    >
      <div>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}</div>
      <div>:</div>
      <div>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</div>
      <div>.</div>
      <div>{("0" + ((time / 10) % 100)).slice(-2)}</div>
    </div>
  );
};
