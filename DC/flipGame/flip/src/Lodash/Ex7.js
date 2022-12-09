import React from "react";
import _ from "lodash";
export const ExSeven = () => {
  let array1 = [1, 2, 3];
  let array2 = [1, 2, 4];
  let print = _.xor(array1, array2);
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
