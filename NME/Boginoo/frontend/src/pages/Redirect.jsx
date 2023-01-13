import { CircularProgress } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Redirect = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const list = await axios.get("http://localhost:9000/");
      list.data.map((e) => {
        if (e.shortenedURL === id) {
          setData(e);
        }
      });
    };
    fetchData();
  }, []);
  console.log(data);
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
  // window.location.replace(data.originalURL);
};
