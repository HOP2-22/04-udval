import { Grid, Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import "./App.css";
import { Mole } from "./components/Mole";

import { TimerBox } from "./components/TimerBox";
function App() {
  const [score, setScore] = useState(0);
  const [started, setStarted] = useState(false);
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
      if (started) generate();
    }, 1000);
    return () => clearInterval(interval);
  }, [started, score]);
  console.log(rats);
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
      <Box>
        <Typography>{score}</Typography>
        <TimerBox started={started} setStarted={setStarted} />
      </Box>
      <Box
        sx={{
          width: "644px",
        }}
      >
        <Grid container rowSpacing={1}>
          {rats.map((row, index) => (
            <Grid key={index} item xs={4}>
              {row.map((rat, ind) => (
                <Mole
                  active={rat}
                  key={ind}
                  setScore={setScore}
                  generate={generate}
                  started={started}
                />
              ))}
            </Grid>
          ))}
        </Grid>
      </Box>
      <Button
        color="success"
        variant="contained"
        onClick={() => {
          setStarted(!started);
        }}
      >
        {started === true ? "End Game" : "Start Game"}
      </Button>
    </Box>
  );
}

export default App;
