import React from "react";
import _ from "lodash";
export const ExTwelve = () => {
  let a = { a: 1 };
  let b = { b: 2 };
  let print = _.merge(a, b);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <p>Ex12: </p>
      <div>{JSON.stringify(print)}</div>
    </div>
  );
};
