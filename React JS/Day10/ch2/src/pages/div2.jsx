import React from "react";
import Sec2pic from "../assets/images/divTwo.png";
import { LearnMore } from "../components/Learnmore";

export const Section2 = () => {
  return (
    <div className="secTwoContainer">
      <LearnMore />
      <img src={Sec2pic} alt="sec2photo" />
    </div>
  );
};
