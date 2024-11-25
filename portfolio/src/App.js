import React, { useEffect } from "react";
import { Box } from "@mui/system";
import "./App.css";
import { Background } from "./Components/Background";
import { CursorFollower } from "./Components/CursorFollower";
import { Header } from "./Components/Header";
import { Three } from "./Components/Three";
import { Work } from "./Sections/Work";
import { ThemeProvider } from "@mui/material";
import theme from "./Context/themeContext";
import { Footer } from "./Sections/Footer";
import { Bio } from "./Sections/Bio";
import { Router, Route } from "react-router-dom";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Background />
        <CursorFollower />

        <Box
          sx={{
            width: "100vw - 60px",
            display: "flex",
            flexDirection: "column ",
            alignItems: "center",
            justifyContent: "center",
            padding: "30px",
            boxSizing: "border-box",
          }}
        >
          <Three />
          <Bio />
          <Work />
          <Footer />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
