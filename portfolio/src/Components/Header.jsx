import React, { useContext } from "react";
import { ColorModeContext } from "../Context/ThemeContext";

export const Header = () => {
  const { isDark, changeTheme } = useContext(ColorModeContext);
  return (
    <div
      style={{
        zIndex: "2",
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        justifyContent: "space-between",
        padding: "8px",
        alignItems: "center",
      }}
    >
      <div>
        <p>UDVAL ALTANGEREL</p>
        <p>Student @ Pinecone Academy</p>
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
          Make it pop //
        </p>
        <a>
          <p>Introduction //</p>
        </a>
        <a>
          <p>Works //</p>
        </a>
      </div>
    </div>
  );
};
