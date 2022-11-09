import React from "react";
import { Grid, Typography } from "@mui/material";
import NewsCard from "../components/NewsCard";
import media from "../cardMedia.json";
import { Container } from "@mui/system";
export const PageOne = () => {
  return (
    <div>
      <Container>
        <Typography
          sx={{
            fontSize: "48px",
            fontWeight: 800,
            margin: "20px 0px 20px 0px",
          }}
        >
          Blog posts
        </Typography>
        <Typography sx={{ color: "GrayText", margin: "0px 0px 30px 0px" }}>
          Our latest updates and blogs about managing your team
        </Typography>
        <Grid container columns={{ xs: 4, sm: 8, md: 12 }} spacing={4}>
          {media.map(
            ({
              CardContentHeader,
              CardContentBody,
              CardContentName,
              Image,
            }) => {
              console.log(CardContentHeader);
              return (
                <Grid item xs={4}>
                  <NewsCard
                    CardContentBody={CardContentBody}
                    CardContentHeader={CardContentHeader}
                    CardContentName={CardContentName}
                    Image={Image}
                  />
                </Grid>
              );
            }
          )}
        </Grid>
      </Container>
    </div>
  );
};
