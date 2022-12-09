import React from "react";
import _ from "lodash";
export const ExFour = () => {
  let array = [1, 2, 3];
  let print = _.fill(array, 0);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <p>Ex4: </p>
      <div>{JSON.stringify(print)}</div>
    </div>
  );
};
