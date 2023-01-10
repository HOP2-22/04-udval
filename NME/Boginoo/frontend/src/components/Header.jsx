import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <button className="button">ХЭРХЭН АЖИЛЛАДАГ ВЭ?</button>
      <Link to={"/login"}>
        <button className="containedbutton">НЭВТРЭХ</button>
      </Link>
    </div>
  );
};
