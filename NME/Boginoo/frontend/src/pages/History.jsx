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
          setData(...data, e);
        }
      });
    };
    fetchData();
  }, []);

  return (
    <div>
      <LogoBoginoo />
      <p>Түүх</p>
      <div>
        {/* {data?.map((dataa) => {
          console.log(dataa);
          return (
            // <HistoryShort
            //   originalURL={dataa.originalURL}
            //   shortenedURL={dataa.shortenedURL}
            // />
            <p>hi</p>
          );
        })} */}
      </div>
    </div>
  );
};
