import { Divider } from "@mui/material";
import React from "react";

export const HistoryShort = ({ originalURL, shortenedURL }) => {
  return (
    <div>
      <div>
        <p>Өгөгдсөн холбоос:</p>
        <p>{originalURL}</p>
      </div>
      <div>
        <p>Богино холбоос:</p>
        <p>
          {" "}
          <a href={`http://localhost:3000/${shortenedURL}`}>
            http://localhost:3000/{shortenedURL}
          </a>
        </p>
      </div>
      <Divider />
    </div>
  );
};
