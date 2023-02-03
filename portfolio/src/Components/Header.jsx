import React, { useContext } from "react";
import { ColorModeContext } from "../Context/ThemeContext";

export const Header = () => {
  const { isDark, changeTheme } = useContext(ColorModeContext);
  return (
    <div style={{ zIndex: "2" }}>
      <div>
        <p>UDVAL ALTANGEREL</p>
        <p>Student @ Pinecone Academy</p>
      </div>
      <div>
        <a>
          <p>// Introduction</p>
        </a>
        <a>
          <p>// Works</p>
        </a>
        <p
          onClick={() => {
            changeTheme();
            console.log(isDark);
          }}
          style={{ color: isDark === true ? "white" : "black" }}
        >
          // Make it pop
        </p>
      </div>
    </div>
  );
};
