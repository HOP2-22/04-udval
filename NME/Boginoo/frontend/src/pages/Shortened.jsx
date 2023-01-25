import React, { useState, useEffect } from "react";
import { LogoBoginoo } from "../components/Logo";
import { useParams } from "react-router-dom";
import axios from "axios";
import { InputUrl } from "../components/InputUrl";
import { Button } from "@mui/material";
export const Shortened = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const copyToClipboard = (link) => {
    navigator.clipboard.writeText(link);
  };
  useEffect(() => {
    const fetchData = async () => {
      const list = await axios.get(
        `https://uda-boginoo-back.onrender.com/shortened/${id}`
      );
      setData(list.data);
    };
    fetchData();
  }, []);
  return (
    <div className="homePageContainer">
      <LogoBoginoo />
      <InputUrl />
      <div>
        <div>
          <p>Өгөгдсөн холбоос:</p>
          <p>{data.originalURL}</p>
        </div>

        <div>
          <p>Богино холбоос:</p>
          <div>
            <p>
              <a href={`http://uda-boginoo.web.app/${data.shortenedURL}`}>
                uda-boginoo.web.app/{data.shortenedURL}
              </a>
            </p>
            <Button
              style={{
                fontSize: "18px",
                color: "#02B589",
                width: "12vw",
                textAlign: "start",
              }}
              onClick={() => {
                copyToClipboard(
                  `http://uda-boginoo.web.app/${data.shortenedURL}`
                );
              }}
            >
              Хуулж авах
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
