import React from "react";
import { LogoBoginoo } from "../components/Logo";

export const HomePage = () => {
  return (
    <div className="homePageContainer">
      <LogoBoginoo />
      <div className="formContainer">
        <input placeholder="https://www.web-huudas.mn" className="urlinput" />
        <button className="containedbutton">БОГИНОСГОХ</button>
      </div>
    </div>
  );
};
