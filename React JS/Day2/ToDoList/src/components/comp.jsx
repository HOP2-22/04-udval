import React from "react";
import "../styles/comment.css";

export const List = ({ props, list, setList, index, checked, setChecked }) => {
  const taskName = props;
  const Delete = () => {
    const changed = list.filter((_, ind) => ind !== index);
    setChecked(checked.filter((_, ind) => ind !== index));
    setList(changed);
  };
  const handleClick = () => {
    setChecked(
      checked.map((checkItem, ind) => {
        return ind === index ? !checkItem : checkItem;
      })
    );
  };
  return (
    <div className="listContainer">
      <input className="chekku" type="checkbox" onClick={handleClick}></input>
      <div
        className="taskName"
        style={{ textDecoration: checked[index] ? "line-through" : "none" }}
      >
        {taskName}
      </div>
      <button className="deleteButton" onClick={Delete}>
        Delete
      </button>
    </div>
  );
};
