import { Box } from "@mui/system";
import "./App.css";
import { Background } from "./Components/Background";
import { CursorFollower } from "./Components/CursorFollower";
import { Header } from "./Components/Header";
import { Three } from "./Components/Three";
import { Contact } from "./Sections/ContactMe";
import { Introduction } from "./Sections/Introduction";
import { Work } from "./Sections/Work";

function App() {
  return (
    <div>
      <Header />
      <Background />
      {/* <CursorFollower /> */}

      <Box
        sx={{
          width: "100vw",
          display: "flex",
          flexDirection: "column ",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <Three />
        <Introduction />
        <Work />
        <Contact />
      </Box>
    </div>
  );
}

export default App;
