import { CircularProgress } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const Redirect = () => {
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://uda-boginoo-back.onrender.com/${id}`
      );
      window.location.replace(data.originalURL);
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
