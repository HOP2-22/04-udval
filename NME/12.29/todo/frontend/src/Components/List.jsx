import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
export const List = ({ title, detail, isDone, DeleteList }) => {
  return (
    <div className="list">
      <p>{title}</p>
      <p>{detail}</p>
      <input type="checkbox" value={isDone} />
      <DeleteIcon onClick={DeleteList} id="delete" />
    </div>
  );
};
