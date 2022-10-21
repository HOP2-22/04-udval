import React from "react";
import { useParams } from "react-router-dom";

export const UserId = () => {
  const { id } = useParams();
  return <div>ID : {id} </div>;
};
