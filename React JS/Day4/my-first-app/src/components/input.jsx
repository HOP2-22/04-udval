import { useRef } from "react";

export const InputTest = () => {
  const inputRef = useRef();
  const focus = () => {
    inputRef.current.focus();
    console.log(inputRef.current);
  };
  return (
    <div>
      <input ref={inputRef}></input>
      <button onClick={focus}>Focus</button>
    </div>
  );
};
