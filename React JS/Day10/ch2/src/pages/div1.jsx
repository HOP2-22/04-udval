import React from "react";
import bgPicture from "../assets/images/divOneBackground.jpg";

export const Section1 = () => {
  return (
    <div className="secOneContainer">
      <div className="bgImageContainer">
        <img src={bgPicture} alt="divOneBg" className="secOneBgPic" />
      </div>
      <div className="secOneInfoContainer">
        <span className="secOneFirst">
          Instant collaborations for remote teams
        </span>
        <span className="secOneSec">
          All in one for your remote team chats, collaboration and track
          projects
        </span>
        <div className="secOneEmailContainer">
          <input className="secOneInput" placeholder="Email" />
          <button className="secOneButton">Get early access</button>
        </div>
      </div>
    </div>
  );
};
