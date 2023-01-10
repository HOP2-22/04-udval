import React from "react";
import { Link } from "react-router-dom";
import { LogoBoginoo } from "../components/Logo";
import { useState } from "react";
import axios from "axios";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:9000/user/login", {
        email: email,
        password: password,
      });
    } catch (error) {
      alert(error);
    }
  };
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
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div>
        <p>Нууц үг</p>
        <input
          className="signupinput"
          type="password"
          placeholder="••••••••"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <button className="containedbutton buttonsigup" onClick={handleSubmit}>
        НЭВТРЭХ
      </button>
      <Link to={"/signup"}>Шинэ хэрэглэгч бол энд дарна уу?</Link>
    </div>
  );
};
