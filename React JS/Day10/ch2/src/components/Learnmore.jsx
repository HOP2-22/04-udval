import React from "react";
import Arrow from "../assets/images/arrow.png";

export const LearnMore = () => {
  return (
    <div className="compLMContainer">
      <div className="compLMHeading">Your Hub for teamwork</div>
      <div className="compLMContent">
        Give everyone you work with—inside and outside your company—a more
        productive way to stay in sync. Respond faster with emoji, keep
        conversations focused in channels, and simplify all your communication
        into one place.
      </div>
      <div className="compLearnMoreContainer">
        <span className="compLearnMore">Learn more</span>
        <img src={Arrow} alt="arrow" />
      </div>
    </div>
  );
};
