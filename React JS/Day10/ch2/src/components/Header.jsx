import React from "react";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div>
      <div className="upperPartContainer">
        <Link to={"/"} className="secOneTeamContainer">
          <span className="secOneUppersTeam">team</span>
          <span className="secOneUppersTeamdot">.</span>
        </Link>
        <div className="secOneUppersContainer">
          <Link to={"/Products"} className="secOneUppers">
            Products
          </Link>
          <Link to={"/Services"} className="secOneUppers">
            Services
          </Link>
          <Link to={"/Contact"} className="secOneUppers">
            Contact
          </Link>
          <Link to={"/Login"} className="secOneUppers">
            Log in
          </Link>
          <Link to={"/GetAccess"} className="secOneGetAccess">
            Get Access
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
