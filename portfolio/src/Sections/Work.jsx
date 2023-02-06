import React from "react";
import Grid from "@mui/material/Grid";
import Boginoo from "../Assets/BoginooPic.png";
import Weather from "../Assets/WeatherPic.png";
import Flipgame from "../Assets/FlipgamePic.png";
import { Box } from "@mui/system";
const styles = {
  cardPicContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: {
      xs: "90vw",
      md: "45vw",
      lg: "30vw",
    },
    borderRadius: "20px",
  },
  cardHeader: {
    fontSize: "2.25em",
  },
};
export const Work = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={6} lg={4}>
          <a target="_blank" href="https://weather-uda.web.app/">
            <div>
              <Box sx={styles.cardPicContainer}>
                <img src={Weather} className="cardPicture" />
              </Box>
              <p style={styles.cardHeader}>Weather</p>
              <p>blahblahblahlblahblahblah</p>
            </div>
          </a>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <a target="_blank" href="https://flipgame-uda.web.app/">
            <div>
              <Box sx={styles.cardPicContainer}>
                <img src={Flipgame} className="cardPicture" />
              </Box>
              <p style={styles.cardHeader}>Flip Game</p>
              <p>blahblahblahlblahblahblah</p>
            </div>
          </a>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <a target="_blank" href="https://uda-boginoo.web.app/">
            <div>
              <Box sx={styles.cardPicContainer}>
                <img src={Boginoo} className="cardPicture" />
              </Box>
              <p style={styles.cardHeader}>Boginoo</p>
              <p>blahblahblahlblahblahblah</p>
            </div>
          </a>
        </Grid>
      </Grid>
    </div>
  );
};
