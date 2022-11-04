import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ImgOne from "../images/img1.png";
import { Box } from "@mui/system";

export default function NewsCard() {
  return (
    <Card sx={{ maxWidth: 363, height: 440 }}>
      <CardMedia component="img" alt="img1" height="140" image={ImgOne} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          The Emotional Toll of Being in UX
        </Typography>
        <Typography variant="body2" color="text.secondary">
          There are times when our work impacts us deeply — sometimes in ways we
          neither acknowledge nor understand
        </Typography>
        <Box sx={{}}>
          <img
            alt="pfp"
            width={"50px"}
            height={"50px"}
            src="https://m.media-amazon.com/images/M/MV5BNjA3NGExZDktNDlhZC00NjYyLTgwNmUtZWUzMDYwMTZjZWUyXkEyXkFqcGdeQXVyMTU1MDM3NDk0._V1_FMjpg_UX1000_.jpg"
          />
          <Typography>Wade Warren</Typography>
          <Typography>19th August, 2022</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
