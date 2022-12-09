import React from "react";
import _ from "lodash";
export const ExThree = () => {
  let products = [
    { product: "banana", hasGMO: true },
    { product: "apple", hasGMO: false },
    { product: "orange", hasGMO: false },
  ];
  let print = _.takeWhile(products, ["hasGMO", true]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <p>Ex3: </p>
      <div>{JSON.stringify(print)}</div>
    </div>
  );
};
