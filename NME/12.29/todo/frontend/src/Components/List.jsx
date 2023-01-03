import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
export const List = ({ title, detail, isDone, DeleteList, updateIsDone }) => {
  return (
    <div className="list">
      <p style={{ width: "170px" }}>{title}</p>
      <p>{detail}</p>
      <input
        type="checkbox"
        checked={isDone}
        onChange={updateIsDone}
        style={{ position: "absolute", right: "50px" }}
      />
      <DeleteIcon
        onClick={DeleteList}
        id="delete"
        sx={{ position: "absolute", right: "10px" }}
      />
    </div>
  );
};
