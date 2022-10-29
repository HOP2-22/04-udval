import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Timer } from "./timer";

export const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);
  useEffect(() => {
    let interval = null;
    if (start === true) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    }
    return () => {
      clearInterval(interval);
    };
  }, [start]);

  const handleStart = () => {
    setStart(!start);
  };
  const handleReset = () => {
    setStart(false);
    setTime(0);
  };

  return (
    <div className="stopwatchContainer">
      <div>
        <Timer time={time} />
      </div>
      <div className="buttonContainer">
        <button className="Button1" onClick={handleStart}>
          {start === false && time === 0 && "Start"}
          {start === false && time !== 0 && "Resume"}
          {start === true && "Stop"}
        </button>
        {time !== 0 && (
          <button className="resetButton" onClick={handleReset}>
            Reset
          </button>
        )}
      </div>
    </div>
  );
};
