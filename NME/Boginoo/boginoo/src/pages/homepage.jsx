import React from "react";

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import LogoRight from "../assets/logoRight.png";
import LogoLeft from "../assets/logoLeft.png";
import Logo from "../assets/logo.png";

export const HomePage = () => {
  return (
    <div>
      <div>
        <Button variant="text">ХЭРХЭН АЖИЛЛАДАГ ВЭ?</Button>
        <Button variant="contained">НЭВТРЭХ</Button>
      </div>
      <Container>
        <div>
          <div>
            <img src={LogoLeft} alt="logoleft" />
            <img src={Logo} alt="logo" />
            <img src={LogoRight} alt="logoright" />
          </div>
          <div>Boginoo</div>
        </div>
      </Container>
    </div>
  );
};
