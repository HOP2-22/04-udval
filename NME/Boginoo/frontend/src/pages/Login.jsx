import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogoBoginoo } from "../components/Logo";
import { useState } from "react";
import axios from "axios";
import { User } from "../UserContext/UserContext";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { setUser } = useContext(User);

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:9000/user/login", {
        email: email,
        password: password,
      });
      localStorage.setItem("jwt-token", res.data.token);
      localStorage.setItem("email", res.data.email);
      console.log(res);
      navigate("/");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="signupcontainer">
      {/* <LogoBoginoo /> */}
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
      <button className="containedbutton buttonsigup" onClick={handleLogin}>
        НЭВТРЭХ
      </button>
      {/* <Link to={"/signup"}>Шинэ хэрэглэгч бол энд дарна уу?</Link> */}
    </div>
  );
};
