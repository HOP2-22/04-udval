import React from "react";
import _ from "lodash";
export const ExSix = () => {
  let objects = [
    { x: 1, y: 2 },
    { x: 2, y: 1 },
  ];
  let others = [
    { x: 1, y: 1 },
    { x: 1, y: 2 },
  ];
  let print = _.unionWith(objects, others, _.isEqual);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <p>Ex6: </p>
      <div>{JSON.stringify(print)}</div>
    </div>
  );
};
