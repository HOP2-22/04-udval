import React from "react";
import { useParams } from "react-router-dom";
import users from "../users.json";
const FindOne = () => {
  const { username } = useParams();
  const user = users.find((user) => user.username === username);
  return (
    <div>
      <div>user one : {username}</div>
      <div>addresss : {user.username}</div>
    </div>
  );
};

export default FindOne;
