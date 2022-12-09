import React from "react";
import _ from "lodash";
export const ExEight = () => {
  let print = _.isEqual("2", 2);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <p>Ex8: </p>
      <div>{JSON.stringify(print)}</div>
    </div>
  );
};
