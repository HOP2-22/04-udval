import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { HistoryShort } from "../components/HistoryShort";
import { LogoBoginoo } from "../components/Logo";

export const History = () => {
  const { userid } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const list = await axios.get(
        `https://uda-boginoo-back.onrender.com/history/${userid}`
      );
      console.log(list);
      setData(list.data);
    };
    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        minHeight: "60vh",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <LogoBoginoo />
      <div style={{ width: "80vw" }}>
        <p
          style={{
            fontFamily: "Ubuntu",
            fontWeight: "700",
            fontSize: "32px",
            color: "#02B589",
          }}
        >
          Түүх
        </p>
        <div>
          {data?.map((dataa, index) => {
            return (
              <HistoryShort
                originalURL={dataa.originalURL}
                shortenedURL={dataa.shortenedURL}
                index={index}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
