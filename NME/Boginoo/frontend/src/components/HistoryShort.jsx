import { Button, Divider } from "@mui/material";
import React from "react";

export const HistoryShort = ({ originalURL, shortenedURL }) => {
  const copyToClipboard = (link) => {
    navigator.clipboard.writeText(link);
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
            <a href={`http://uda-boginoo.web.app/${shortenedURL}`}>
              http://uda-boginoo.web.app/{shortenedURL}
            </a>
          </p>
        </div>
        <Button
          style={{
            fontSize: "18px",
            color: "#02B589",
            width: "12vw",
            textAlign: "start",
          }}
          onClick={() => {
            copyToClipboard(`http://uda-boginoo.web.app/${shortenedURL}`);
          }}
        >
          Хуулж авах
        </Button>
      </div>
      <Divider />
    </div>
  );
};
