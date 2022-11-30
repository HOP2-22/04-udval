import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { TimerBox } from "./TimerBox";

export const Timer = (started) => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    let interval = null;
    if (started === true) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    }
    return () => {
      clearInterval(interval);
    };
  }, [started]);

  return (
    <div className="stopwatchContainer">
      <div>
        <TimerBox time={time} />
      </div>
      <div className="buttonContainer">
        {time !== 0 && <button className="resetButton">Reset</button>}
      </div>
    </div>
  );
};
