import React from "react";
import bgPicture from "../assets/images/divOneBackground.jpg";

export const Section1 = () => {
  return (
    <div className="secOneContainer">
      <img src={bgPicture} alt="divOneBg" className="secOneBgPic" />
      <div className="upperPartContainer">
        <div className="secOneTeamContainer">
          <span className="secOneUppersTeam">team</span>
          <span className="secOneUppersTeamdot">.</span>
        </div>
        <div className="secOneUppersContainer">
          <span className="secOneUppers">Products</span>
          <span className="secOneUppers">Services</span>
          <span className="secOneUppers">Contact</span>
          <span className="secOneUppers">Log in</span>
          <button className="secOneGetAccess">Get Access</button>
        </div>
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
