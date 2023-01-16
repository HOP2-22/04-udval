import { CircularProgress } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const Redirect = () => {
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const list = await axios.get("http://localhost:9000/");
      list.data.map((e) => {
        if (e.shortenedURL === id) {
          window.location.replace(e.originalURL);
        }
      });
    };
    fetchData();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "80vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress color="success" />
    </div>
  );
};
