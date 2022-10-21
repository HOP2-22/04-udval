import React from "react";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div>
      <div>HI, this is home</div>
      <Link to="/Signup">Signup</Link>
    </div>
  );
};
