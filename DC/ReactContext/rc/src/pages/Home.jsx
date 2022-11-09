import React, { useContext } from "react";
import { ColorModeContext } from "../ThemeContext.jsx/ThemeContext";

export const Home = () => {
  const { theme, changeTheme } = useContext(ColorModeContext);
  return (
    <div>
      <div>home theme: {theme}</div>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  );
};
export default Home;
