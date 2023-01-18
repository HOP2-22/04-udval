import { Divider } from "@mui/material";
import React from "react";

export const HistoryShort = ({ originalURL, shortenedURL }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(`http://localhost:3000/${shortenedURL}`);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ width: "35vw", wordWrap: "break-word" }}>
          <p>Өгөгдсөн холбоос:</p>
          <p>{originalURL}</p>
        </div>
        <div style={{ width: "30vw", wordWrap: "break-word" }}>
          <p>Богино холбоос:</p>
          <p>
            {" "}
            <a href={`http://localhost:3000/${shortenedURL}`}>
              http://localhost:3000/{shortenedURL}
            </a>
          </p>
        </div>
        <p
          style={{
            fontSize: "18px",
            color: "#02B589",
            width: "12vw",
            textAlign: "start",
          }}
          onClick={() => {
            copyToClipboard(`http://localhost:3000/${shortenedURL}`);
          }}
        >
          Хуулж авах
        </p>
      </div>
      <Divider />
    </div>
  );
};
