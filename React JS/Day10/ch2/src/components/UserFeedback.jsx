import { Rating } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../ThemeContext/ThemeContext";
export const UserFeedback = (props) => {
  const { theme } = useContext(ColorModeContext);
  const { starNumber, comment, avatar, name } = props;
  return (
    <div className="fbContainer">
      <div className="starContainer">
        <Rating name="read-only" value={starNumber} readOnly />
      </div>
      <div
        className="commentContainer"
        style={{
          color: theme === "dark" ? "black" : "white",
        }}
      >
        {comment}
      </div>
      <div className="userprofileContainer">
        <img alt="profileImage" className="profileImage" src={avatar} />
        <div
          className="userFullName"
          style={{
            color: theme === "dark" ? "black" : "white",
          }}
        >
          {name}
        </div>
      </div>
    </div>
  );
};
