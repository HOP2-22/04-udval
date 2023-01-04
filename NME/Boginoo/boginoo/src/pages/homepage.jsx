import React from "react";

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import LogoRight from "../assets/logoRight.png";
import LogoLeft from "../assets/logoLeft.png";
import Logo from "../assets/logo.png";

export const HomePage = () => {
  return (
    <div className="container">
      <div>
        <div>
          <button className="button">ХЭРХЭН АЖИЛЛАДАГ ВЭ?</button>
          <button className="containedbutton">НЭВТРЭХ</button>
        </div>
      </div>
      <div className="mainPartContainer">
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
      <div className="footer">
        <p>Made with ♥️ by Udval</p>
        <div>©boginooo 2023</div>
      </div>
    </div>
  );
};
