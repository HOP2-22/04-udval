import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Timer } from "./timer";

export const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);
  const handleStart = () => {
    setStart(true)
  }
  if (start === true) {
    React.useEffect (() => {
      let interval = null;
       interval = setInterval(() => {
        setTime((time) => time + 10);
    }, 10); 
  }
  }

  return (
    <div>
      <div><Timer time = {time}/>
      </div>
      <div>
        <button onClick={handleStart}>Start</button>
        <button>Stop</button>
        <button>Reset</button>
      </div>
    </div>
  );
};
