import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User } from "../UserContext/UserContext";
import Menu from "@mui/material/Menu";
import { Button, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState(false);

  const open = Boolean(anchorEl);

  const navigate = useNavigate();

  const { user, setUser } = useContext(User);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogOut = () => {
    setUser(null);
    localStorage.removeItem("email");
    localStorage.removeItem("jwt-token");
  };

  const handleHistory = () => {
    navigate(`/history/${user.email}`);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
      className="headercontainer"
    >
      <button className="button">ХЭРХЭН АЖИЛЛАДАГ ВЭ?</button>
      {user ? (
        <div>
          <Button
            onClick={handleClick}
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            style={{
              color: "black",
              fontSize: "20px",
              fontFamily: "Ubuntu",
              fontWeight: "700",
            }}
            className="medkuenegbutton"
            endIcon={<KeyboardArrowDownIcon color="success" />}
          >
            {user.email}
          </Button>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem onClick={handleHistory}>History</MenuItem>
            <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
          </Menu>
        </div>
      ) : (
        <Link to={"/login"}>
          <button className="containedbutton">НЭВТРЭХ</button>
        </Link>
      )}
    </div>
  );
};
