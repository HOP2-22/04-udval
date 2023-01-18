import React, { useState, useEffect } from "react";
import { LogoBoginoo } from "../components/Logo";
import { useParams } from "react-router-dom";
import axios from "axios";
import { InputUrl } from "../components/InputUrl";
export const Shortened = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const list = await axios.get(`http://localhost:9000/shortened/${id}`);
      setData(list.data);
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <div className="homePageContainer">
      <LogoBoginoo />
      <InputUrl />
      <div>
        <div>
          <p>Өгөгдсөн холбоос:</p>
          <p>{data.originalURL}</p>
        </div>

        <div>
          <p>Богино холбоос:</p>
          <div>
            <p>
              <a href={`http://localhost:3000/${data.shortenedURL}`}>
                http://localhost:3000/{data.shortenedURL}
              </a>
            </p>
            <p>Хуулж авах</p>
          </div>
        </div>
      </div>
    </div>
  );
};
