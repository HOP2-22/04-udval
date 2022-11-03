import React from "react";
import { LearnMore } from "./Learnmore";
import Sec3pic from "../assets/images/divThree.png";

export const Section3 = () => {
  return (
    <div className="secThreeContainer">
      <div className="sec3photoContainer">
        <img src={Sec3pic} alt="sec3photo" className="sec3photo" />
      </div>
      <div className="sec3LMcontainer">
        <LearnMore />
      </div>
    </div>
  );
};
