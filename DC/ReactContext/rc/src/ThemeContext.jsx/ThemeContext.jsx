import React from "react";
import { useState, createContext } from "react";

export const ColorModeContext = createContext();

function ThemeContext({ children }) {
  const [theme, setTheme] = useState("white");
  const ColorModeHandler = () => {
    setTheme((prev) => (prev === "dark" ? "white" : "dark"));
  };
  return (
    <ColorModeContext.Provider
      value={{ theme: theme, changeTheme: ColorModeHandler }}
    >
      {children}
    </ColorModeContext.Provider>
  );
}
export default ThemeContext;
