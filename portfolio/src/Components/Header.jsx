import { color } from "@mui/system";
import React, { useContext } from "react";
import { ColorModeContext } from "../Context/themeContext";

export const Header = () => {
  const { isDark, changeTheme } = useContext(ColorModeContext);
  return (
    <div
      style={{
        zIndex: "2",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "20px",
        alignItems: "center",
        backdropFilter: "blur(10px)",
        position: "sticky",
        top: "0px",
      }}
    >
      <div>
        <p>UDVAL ALTANGEREL</p>
        <p>Student @ National University of Mongolia</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <p
          onClick={() => {
            changeTheme();
            console.log(isDark);
          }}
          style={{ color: isDark === true ? "white" : "black" }}
        >
          Pop //
        </p>
        <a>
          <p>Bio //</p>
        </a>
        <a>
          <p>Works //</p>
        </a>
        <a>
          <p>Resume //</p>
        </a>
      </div>
    </div>
  );
};
