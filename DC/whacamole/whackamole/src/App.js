import { Grid, Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import "./App.css";
import { Mole } from "./components/Mole";
function App() {
  const [rats, setRats] = useState(
    new Array(3).fill(null).map(() => new Array(3).fill(false))
  );
  const generate = () => {
    let newRats = new Array(3).fill(null).map(() => new Array(3).fill(false));
    let rand = Math.round(Math.random() * 9);
    newRats[Math.floor(rand / 3)][rand % 3] = true;
    setRats(newRats);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      generate();
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid container rowSpacing={1}>
        {rats.map((row, index) => (
          <Grid key={index} item xs={4}>
            {row.map((rat, ind) => (
              <Mole active={rat} key={ind} />
            ))}
          </Grid>
        ))}
      </Grid>
      <Button color="success" variant="contained">
        Start
      </Button>
    </Box>
  );
}

export default App;
