import React from "react";
import LogoRight from "../assets/logoRight.png";
import LogoLeft from "../assets/logoLeft.png";
import Logo from "../assets/logo.png";

export const HomePage = () => {
  return (
    <div className="container">
      <div className="logocontainer">
        <div className="logoPicContainer">
          <img src={LogoLeft} alt="logoleft" className="logoleft" />
          <img src={Logo} alt="logo" className="logo" />
          <img src={LogoRight} alt="logoright" className="logoright" />
        </div>
        <div className="boginoologo">Boginoo</div>
      </div>
      <div className="formContainer">
        <input placeholder="https://www.web-huudas.mn" />
        <button className="containedbutton">БОГИНОСГОХ</button>
      </div>
    </div>
  );
};
