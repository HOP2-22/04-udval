import React from "react";
import _ from "lodash";
export const ExNine = () => {
  let print = _.max([4, 2, 8, 6]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <p>Ex9: </p>
      <div>{JSON.stringify(print)}</div>
    </div>
  );
};
