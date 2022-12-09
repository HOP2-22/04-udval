import React from "react";
import _ from "lodash";
export const ExFourteen = () => {
  let products = {
    banana: { hasGMO: true },
    apple: { hasGMO: false },
    orange: { hasGMO: false },
  };
  let print = _.keys(products, ["hasGMO", true]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <p>Ex14: </p>
      <div>{JSON.stringify(print)}</div>
    </div>
  );
};
