import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
export const Layout = ({ children }) => {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
};
