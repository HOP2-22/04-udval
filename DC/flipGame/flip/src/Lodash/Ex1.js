import React from "react";
import _ from "lodash";
export const ExOne = () => {
  let print = _.difference([1, 2, 3], [1, 2, 4]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <p>Ex1: </p>
      <div>{JSON.stringify(print)}</div>
    </div>
  );
};
