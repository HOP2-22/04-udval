import React from "react";
import { Link } from "react-router-dom";
import { LogoBoginoo } from "../components/Logo";

export const Login = () => {
  return (
    <div className="signupcontainer">
      <LogoBoginoo />
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          fontFamily: "Ubuntu",
          fontSize: "32px",
          color: "#02B589",
          fontWeight: "700",
          marginTop: "30px",
        }}
      >
        Нэвтрэх
      </div>
      <div>
        <p>Цахим хаяг</p>
        <input
          className="signupinput"
          type="text"
          placeholder="name@mail.domain"
        />
      </div>
      <div>
        <p>Нууц үг</p>
        <input className="signupinput" type="password" placeholder="••••••••" />
      </div>
      <button className="containedbutton buttonsigup">НЭВТРЭХ</button>
      <Link to={"/signup"}>Шинэ хэрэглэгч бол энд дарна уу?</Link>
    </div>
  );
};
