import React from "react";
import { LearnMore } from "../components/Learnmore";
import Sec4pic from "../assets/images/div4.png";
export const Section4 = () => {
  return (
    <div className="secFourContainer">
      <div className="sec4LMcontainer">
        <LearnMore />
      </div>
      <div className="sec4photoContainer">
        <img src={Sec4pic} alt="sec4photo" className="sec4photo" />
      </div>
    </div>
  );
};
