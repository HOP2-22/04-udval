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
      const list = await axios.get("http://localhost:9000/");
      list.data.map((e) => {
        if (e.user === userid) {
          setData(e);
        }
      });
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <div>
      <LogoBoginoo />
      <p>Түүх</p>
      <div>
        <HistoryShort
          originalURL={data.originalURL}
          shortenedURL={data.shortenedURL}
        />
      </div>
    </div>
  );
};
