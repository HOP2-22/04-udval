import React from "react";
import _ from "lodash";
export const ExThirteen = () => {
  let products = {
    banana: { hasGMO: true },
    apple: { hasGMO: false },
    orange: { hasGMO: false },
  };
  let print = _.findKey(products, ["hasGMO", true]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <p>Ex13: </p>
      <div>{JSON.stringify(print)}</div>
    </div>
  );
};
