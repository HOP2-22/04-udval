import { Avatar, Button, Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useContext } from "react";
import { ColorModeContext } from "../ThemeContext/ThemeContext";
// import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
export const CommentBoxMine = ({
  commentText,
  setComments,
  pfp,
  date,
  comments,
  fName,
  lName,
  index,
}) => {
  const { theme } = useContext(ColorModeContext);
  const Delete = () => {
    const changed = comments.filter((_, ind) => ind !== index);
    setComments(changed);
  };
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
            <p style={{ textAlign: "left" }}>{commentText}</p>
            <p style={{ textAlign: "left", color: "gray" }}>posted {date}</p>
          </Grid>
          <Box>
            {/* <DeleteOutlineIcon /> */}
            <Button onClick={Delete}>Delete</Button>
          </Box>
        </Grid>
      </Box>
    </Paper>
  );
};
