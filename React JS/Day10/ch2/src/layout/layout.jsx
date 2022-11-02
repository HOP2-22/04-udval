import React from "react";
import Header from "../components/Header";
import { Footer } from "../pages/footer";
export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
