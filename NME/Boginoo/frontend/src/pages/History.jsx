import { CircularProgress, Pagination } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { User } from "../UserContext/UserContext";
import { HistoryShort } from "../components/HistoryShort";
import { LogoBoginoo } from "../components/Logo";
// import { useParams } from "react-router-dom";

export const History = () => {
  const [loading, setLoading] = useState(true);
  const { user } = useContext(User);
  const [pageNum, setPageNum] = useState(1);
  const [data, setData] = useState([]);
  const [dataCount, setDataCount] = useState(null);
  useEffect(() => {
    const countData = async () => {
      const res = await axios.get(`http://localhost:9000/historycount`);
      setDataCount(Math.ceil(res.data / 6));
    };
    countData();
  }, []);
  useEffect(() => {
    console.log(user.email);
    const fetchData = async () => {
      const list = await axios.get(
        `http://localhost:9000/history/${pageNum}/6`
      );
      setLoading(false);
      setData(list.data);
    };
    fetchData();
  }, [user, pageNum]);
  return (
    <div>
      {loading ? (
        <div
          style={{
            display: "flex",
            minHeight: "80vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress color="success" />
        </div>
      ) : (
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
            <div
              style={{
                width: "100%",
                height: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Pagination
                count={dataCount}
                color="success"
                onChange={(e, value) => {
                  setPageNum(value);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
