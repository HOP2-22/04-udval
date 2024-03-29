import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Avatar from "@mui/material/Avatar";

import { useContext } from "react";
import { ColorModeContext } from "../ThemeContext/ThemeContext";

export default function NewsCard({
  CardContentHeader,
  CardContentBody,
  CardContentFirstName,
  CardContentLastName,
  Image,
  ownerPicture,
  date,
}) {
  const { theme } = useContext(ColorModeContext);
  return (
    <Card
      sx={{
        maxWidth: 363,
        borderRadius: "30px",
        minWidth: 300,
        minHeight: 400,
        position: "relative",
        backgroundColor: theme === "dark" ? "" : "#212121",
      }}
    >
      <CardMedia component="img" alt="img1" height="140" image={Image} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            color: theme === "dark" ? "#black" : "white",
          }}
        >
          {CardContentHeader}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            color: theme === "dark" ? "#black" : "white",
          }}
        >
          {CardContentBody}
        </Typography>
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            position: "absolute",
            bottom: "18px",
          }}
        >
          <Avatar alt="Remy Sharp" src={ownerPicture} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: "10px",
              gap: "5px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "5px",
              }}
            >
              <Typography
                sx={{
                  color: "GrayText",
                  fontSize: "12px",
                }}
              >
                {CardContentFirstName}
              </Typography>
              <Typography sx={{ color: "GrayText", fontSize: "12px" }}>
                {CardContentLastName}
              </Typography>
            </Box>
            <Typography sx={{ color: "GrayText", fontSize: "12px" }}>
              |
            </Typography>
            <Typography sx={{ color: "GrayText", fontSize: "12px" }}>
              {date}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
