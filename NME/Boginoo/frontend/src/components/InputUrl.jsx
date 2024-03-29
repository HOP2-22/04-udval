import React, { useContext, useState } from "react";
import axios from "axios";
import { User } from "../UserContext/UserContext";

export const InputUrl = () => {
  const [original, setOriginal] = useState("");
  const { user } = useContext(User);
  const shortenURL = async () => {
    const regex =
      /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    if (!regex.test(original)) {
      alert("Please enter valid URL.");
    } else {
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
        await axios.post("https://uda-boginoo-back.onrender.com/", {
          originalURL: original,
          shortenedURL: random,
          user: user?.email ? user?.email : null,
        });
        await window.location.replace(`/shortened/${random}`);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
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
  );
};
