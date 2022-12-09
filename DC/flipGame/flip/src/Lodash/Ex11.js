import React from "react";
import _ from "lodash";
export const ExEleven = () => {
  let print = _.random(1, 10);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <p>Ex11: </p>
      <div>{JSON.stringify(print)}</div>
    </div>
  );
};
