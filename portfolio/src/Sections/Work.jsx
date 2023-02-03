import React from "react";
import Grid from "@mui/material/Grid";
const CardItem = [
  {
    Header: "Weather",
    Description: "blah blah blah blah blah",
    Picture: "../Assets/WeatherPic.png",
  },
  {
    Header: "Flip Game",
    Description: "blah blah blah blah blah",
    Picture: "../Assets/FlipgamePic.png",
  },
  {
    Header: "Boginoo",
    Description: "blah blah blah blah blah",
    Picture: "../Assets/BoginooPic.png",
  },
];
export const Work = () => {
  return (
    <div style={{ zIndex: "2" }}>
      <Grid container>
        {CardItem.map((el) => {
          return (
            <Grid item xs={12} md={6} lg={4}>
              <div>
                <img src={el.Picture} />
                <p>{el.Header}</p>
                <p>{el.Description}</p>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
