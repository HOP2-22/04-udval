import { createTheme } from "@mui/material";
import React from "react";
import { useState, createContext } from "react";

export const ColorModeContext = createContext();

function ThemeContext({ children }) {
  const [isDark, setIsDark] = useState(true);
  const ColorModeHandler = () => {
    setIsDark(!isDark);
  };
  return (
    <ColorModeContext.Provider
      value={{ isDark: isDark, changeTheme: ColorModeHandler }}
    >
      {children}
    </ColorModeContext.Provider>
  );
}
export default ThemeContext;

export const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: "#f4e7d4",
      dark: "#191919",
    },
  },
});
