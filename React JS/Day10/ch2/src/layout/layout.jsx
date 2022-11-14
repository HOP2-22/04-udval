import React from "react";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import { useContext } from "react";
import { ColorModeContext } from "../ThemeContext/ThemeContext";
export const Layout = ({ children }) => {
  const { theme } = useContext(ColorModeContext);
  return (
    <div
      style={{ backgroundColor: theme === "dark" ? "transparent" : "#252525" }}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
};
