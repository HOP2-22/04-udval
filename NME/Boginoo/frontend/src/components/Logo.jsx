import React from "react";

import LogoRight from "../assets/logoRight.png";
import LogoLeft from "../assets/logoLeft.png";
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

export const LogoBoginoo = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <div onClick={navigateToHome} className>
      <div className="logocontainer">
        <div className="logoPicContainer">
          <img src={LogoLeft} alt="logoleft" className="" />
          <img src={Logo} alt="logo" className="" />
          <img src={LogoRight} alt="logoright" className="" />
        </div>
        <div className="boginoologo">Boginoo</div>
      </div>
    </div>
  );
};
