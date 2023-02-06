import { Box } from "@mui/system";
import "./App.css";
import { Background } from "./Components/Background";
import { CursorFollower } from "./Components/CursorFollower";
import { Header } from "./Components/Header";
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
          width: "100%",
          display: "flex",
          flexDirection: "column ",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Introduction />
        <Work />
      </Box>
    </div>
  );
}

export default App;
