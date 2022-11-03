import React from "react";
import Sec2pic from "../assets/images/divTwo.png";
import { LearnMore } from "./Learnmore";

export const Section2 = () => {
  return (
    <div className="secTwoContainer">
      <div className="sec2LMcontainer">
        <LearnMore />
      </div>
      <div className="sec2photoContainer">
        <img src={Sec2pic} alt="sec2photo" className="sec2photo" />
      </div>
    </div>
  );
};
