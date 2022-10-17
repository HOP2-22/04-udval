import React from "react";
import { useEffect, useRef, useState } from "react";

export const RenderTest = () => {
  const [name, setName] = useState("");
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <div>My name is {name}</div>
      <div>I rendered {renderCount.current} times.</div>
    </div>
  );
};
