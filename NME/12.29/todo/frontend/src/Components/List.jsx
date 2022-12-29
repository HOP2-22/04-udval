import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
export const List = ({ title, detail, isDone }) => {
  return (
    <div className="list">
      <p>{title}</p>
      <p>{detail}</p>
      <input type="checkbox" value={isDone} />
      <DeleteIcon id="delete" />
    </div>
  );
};
