import { Avatar, Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useContext } from "react";
import { ColorModeContext } from "../ThemeContext/ThemeContext";
export const CommentBox = ({ pfp, date, comment, fName, lName }) => {
  const { theme } = useContext(ColorModeContext);
  return (
    <Paper
      style={{
        padding: "40px 20px",
        marginTop: "10px",
        backgroundColor: theme === "dark" ? "white" : "#212121",
      }}
    >
      <Box
        sx={{
          width: "55vw",
          height: "148px",
          color: theme === "dark" ? "black" : "white",
        }}
      >
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar src={pfp} />
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "5px",
              }}
            >
              <h4 style={{ margin: 0, textAlign: "left" }}>{fName}</h4>
              <h4 style={{ margin: 0, textAlign: "left" }}>{lName}</h4>
            </Box>
            <p style={{ textAlign: "left" }}>{comment}</p>
            <p style={{ textAlign: "left", color: "gray" }}>posted on {date}</p>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};
