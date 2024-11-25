import { Grid } from "@mui/material";
import React from "react";
import { Chrono } from "react-chrono";

export const Bio = () => {
  const items = [
    {
      title: "July 2004",
      cardTitle: "Born in Ulaanbaatar, Mongolia",
    },
    {
      title: "June 2022",
      cardTitle: "Graduated highschool",
    },
    {
      title: "June 2022",
      cardTitle: "Enrolled @ Pinecone Academy",
    },
    {
      title: "June 2022",
      cardTitle:
        "Enrolled @ Bacheleor's program at National University of Mongolia",
    },
    {
      title: "2023 1st term",
      cardTitle: "Junior Front-end @ some start-up",
    },
    {
      title: "September 2023",
      cardTitle: "Graduated Pinecone Academy",
    },
    {
      title: "2023 4th term to present",
      cardTitle: "Front-end and Mobile developer @ netcapital",
    },
  ];

  return (
    <Grid container sx={{ minHeight: "100vh" }}>
      <Grid item sm={12} lg={6}>
        <p style={{ fontSize: "3em" }}>Hi, There!</p>
        <p style={{ fontSize: "2em" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Grid>
      <Grid
        item
        sm={12}
        lg={6}
        sx={{
          alignItems: {
            lg: "center",
            xs: "start",
          },
        }}
      >
        <Chrono
          items={items}
          mode="VERTICAL_ALTERNATING"
          activeItemIndex={7}
          focusActiveItemOnLoad={false}
          textDensity="LOW"
          cardHeight={150}
          disableToolbar={true}
          useReadMore
          borderLessCards={true}
          classNames={{
            card: "tlCard",
            cardMedia: "tlCardMedia",
            cardSubTitle: "tlCardSubtitle",
            cardText: "tlCardText",
            cardTitle: "tlCardTitle",
            title: "title",
          }}
          theme={{
            primary: "#e45a84",
            secondary: "#f4e7d4",
            cardBgColor: "#f4e7d4",
            titleColor: "#f4e7d4",
            titleColorActive: "#191919",
          }}
          cardText
        />
      </Grid>
    </Grid>
  );
};
