import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LogoBoginoo } from "../components/Logo";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const handleSubmit = async () => {
    try {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        if (password !== password2) {
          alert("passwords doesnt match");
          return;
        }
        if (password === password2) {
          await axios.post("http://localhost:9000/user/signup", {
            email: email,
            password: password,
          });
          alert("succesfully created new account, now sign in");
        }
      } else {
        alert("You have entered an invalid email address!");
      }
    } catch (error) {
      console.log(error);
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
        Бүртгүүлэх
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
      <div>
        <p>Нууц үгээ давтана уу?</p>
        <input
          className="signupinput"
          type="password"
          placeholder="••••••••"
          onChange={(e) => {
            setPassword2(e.target.value);
          }}
        />
      </div>
      <button className="containedbutton buttonsigup" onClick={handleSubmit}>
        БҮРТГҮҮЛЭХ
      </button>
      <Link to={"/login"}>Надад хаяг байгаа</Link>
    </div>
  );
};
