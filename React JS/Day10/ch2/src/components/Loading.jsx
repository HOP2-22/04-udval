import * as React from "react";
import { Box } from "@mui/system";
import { CircularProgress } from "@mui/material";

export default function Loading() {
  return (
    <Box
      sx={{
        height: "70vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress disableShrink />
    </Box>
  );
}
