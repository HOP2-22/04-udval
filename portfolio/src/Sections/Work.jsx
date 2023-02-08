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
  const data = [
    {
      title: "Weather",
      img: Weather,
      description: "blahblahblahlblahblahblah",
      link: "https://weather-uda.web.app/",
    },
    {
      title: "Flip Game",
      img: Flipgame,
      description: "blahblahblahlblahblahblah",
      link: "https://flipgame-uda.web.app/",
    },
    {
      title: "Boginoo",
      img: Boginoo,
      description: "blahblahblahlblahblahblah",
      link: "https://uda-boginoo.web.app/",
    },
  ];
  return (
    <div>
      <Grid container>
        {data.map((item, index) => {
          return (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <a target="_blank" href={item.link}>
                <div>
                  <Box sx={styles.cardPicContainer}>
                    <img src={item.img} className="cardPicture" />
                  </Box>
                  <p style={styles.cardHeader}>{item.title}</p>
                  <p>{item.description}</p>
                </div>
              </a>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
