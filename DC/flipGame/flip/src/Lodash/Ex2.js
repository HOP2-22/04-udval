import React from "react";
import _ from "lodash";
export const ExTwo = () => {
  let products = [
    { product: "banana", hasGMO: true },
    { product: "apple", hasGMO: false },
    { product: "orange", hasGMO: false },
  ];
  let print = _.differenceWith(
    products,
    [{ product: "banana", hasGMO: true }],
    _.isEqual
  );
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <p>Ex2:</p>
      <div>{JSON.stringify(print)}</div>
    </div>
  );
};
