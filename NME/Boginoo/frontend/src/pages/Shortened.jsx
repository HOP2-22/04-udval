import React, { useState, useEffect } from "react";
import { LogoBoginoo } from "../components/Logo";
import { useParams } from "react-router-dom";
import axios from "axios";
export const Shortened = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const list = await axios.get("http://localhost:9000/");
      list.data.map((e) => {
        if (e.shortenedURL === id) {
          setData(e);
        }
      });
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <div className="homePageContainer">
      <LogoBoginoo />
      <div className="formContainer">
        <input placeholder="https://www.web-huudas.mn" className="urlinput" />
        <button className="containedbutton">БОГИНОСГОХ</button>
      </div>
      <div>
        <div>
          <p>Өгөгдсөн холбоос:</p>
          <p>{data.originalURL}</p>
        </div>

        <div>
          <p>Богино холбоос:</p>
          <div>
            <p>{data.shortenedURL}</p>
            <p>Хуулж авах</p>
          </div>
        </div>
      </div>
    </div>
  );
};
