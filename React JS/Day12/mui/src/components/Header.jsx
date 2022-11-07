import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        <Container>
          <Toolbar
            sx={{
              padding: "0 !important",
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "black", fontSize: "30px" }}
            >
              team.
            </Typography>
            <Box>
              <Button sx={{ textDecoration: "underline", color: "GrayText" }}>
                Products
              </Button>
              <Button
                color="inherit"
                sx={{ textDecoration: "underline", color: "GrayText" }}
              >
                Services
              </Button>
              <Button
                color="inherit"
                sx={{ color: "GrayText", textDecoration: "underline" }}
              >
                Contact
              </Button>
              <Button
                color="inherit"
                sx={{ textDecoration: "underline", color: "GrayText" }}
              >
                Log in
              </Button>
              <Button variant="outlined">Get Access</Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
