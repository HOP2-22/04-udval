import React from "react";
import Arrow from "../assets/images/arrow.png";

import { useContext } from "react";
import { ColorModeContext } from "../ThemeContext/ThemeContext";

export const LearnMore = () => {
  const { theme } = useContext(ColorModeContext);
  return (
    <div className="compLMContainer">
      <div
        className="compLMHeading"
        style={{
          color: theme === "dark" ? "black" : "white",
        }}
      >
        Your Hub for teamwork
      </div>
      <div
        className="compLMContent"
        style={{
          color: theme === "dark" ? "black" : "white",
        }}
      >
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
