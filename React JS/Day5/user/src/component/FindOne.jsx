import React from "react";
import { useParams } from "react-router-dom";

const FindOne = () => {
  const { username } = useParams();
  return (
    <div>
      <div>user one : {username}</div>
    </div>
  );
};

export default FindOne;
