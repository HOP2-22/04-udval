import React from "react";

import LogoRight from "../assets/logoRight.png";
import LogoLeft from "../assets/logoLeft.png";
import Logo from "../assets/logo.png";

export const LogoBoginoo = () => {
  return (
    <div>
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
