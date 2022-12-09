import React from "react";
import _ from "lodash";
export const ExTen = () => {
  let print = _.sum([4, 2, 8, 6]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <p>Ex10: </p>
      <div>{JSON.stringify(print)}</div>
    </div>
  );
};
