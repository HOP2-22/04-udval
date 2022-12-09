import React from "react";
import _ from "lodash";
export const ExFive = () => {
  let objects = [
    { x: 1, y: 2 },
    { x: 2, y: 1 },
  ];
  let others = [
    { x: 1, y: 1 },
    { x: 1, y: 2 },
  ];
  let print = _.intersectionWith(objects, others, _.isEqual);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <p>Ex5: </p>
      <div>{JSON.stringify(print)}</div>
    </div>
  );
};
