import React, { useState, useEffect } from "react";
import { LogoBoginoo } from "../components/Logo";
import axios from "axios";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const [original, setOriginal] = useState("");
  const shortenURL = async () => {
    try {
      let random = "";
      let characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      const chLength = characters.length;
      const randomgenerate = () => {
        for (let i = 0; i < 5; i++) {
          random += characters.charAt(Math.floor(Math.random() * chLength));
        }
        return random;
      };
      randomgenerate();
      const res = await axios.post("http://localhost:9000/", {
        originalURL: original,
        shortenedURL: random,
      });
      await window.location.replace(`/shortened/${random}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="homePageContainer">
      <LogoBoginoo />
      <div className="formContainer">
        <input
          placeholder="https://www.web-huudas.mn"
          className="urlinput"
          onChange={(e) => {
            setOriginal(e.target.value);
          }}
          value={original}
        />
        <button className="containedbutton" onClick={shortenURL}>
          БОГИНОСГОХ
        </button>
      </div>
    </div>
  );
};
