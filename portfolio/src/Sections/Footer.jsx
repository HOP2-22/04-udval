import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import FaceBookIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Phone from "@mui/icons-material/PhoneOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { ThemeContext } from "@emotion/react";
import { theme } from "../Context/themeContext";
import { Box, Container, Grid } from "@mui/material";

export const Footer = () => {
  const data = [
    {
      socialPlatform: "github",
      icon: <GitHubIcon sx={{ fontSize: "50px" }} />,
      username: "@huurhunuda",
      link: "https://github.com/huurhunuda",
    },

    {
      socialPlatform: "instagram",
      icon: <InstagramIcon sx={{ fontSize: "50px" }} />,
      username: "@huurhunuda",
      link: "https://instagram.com/huurhunuda",
    },

    {
      socialPlatform: "youtube",
      icon: <YouTubeIcon sx={{ fontSize: "50px" }} />,
      username: "@huurhunuda",
      link: "https://youtube.com/@huurhunuda",
    },
    {
      socialPlatform: "facebook",
      icon: <FaceBookIcon sx={{ fontSize: "50px" }} />,
      username: "huurhunuda",
      link: "https://www.facebook.com/huurhunuda/",
    },
  ];
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "end",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "baseline",
          justifyContent: "start",
        }}
      >
        <div>
          <p style={{ fontSize: "3em" }}>--- Contact</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            alignItems: "center",
            color: theme.palette.primary.main,
          }}
        >
          <Phone />
          <p>+976 8989-3264</p>
        </div>
        <a href="mailto:udvllaa@gmail.com?body=Hi there!">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
              }}
            >
              <MailOutlineIcon />
            </div>
            <p>udvllaa@gmail.com</p>
          </div>
        </a>

        <Grid container sx={{ alignItems: "center", marginTop: "10px" }}>
          <Grid item xs={12} md={6} lg={6}>
            <p style={{ fontSize: "25px" }}>-- Socials</p>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <p style={{ fontSize: "12px" }}>// @huurhunuda //</p>
          </Grid>
        </Grid>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            marginTop: "5px",
          }}
        >
          {data.map((item, index) => {
            return (
              <a href={item.link} key={index} target="_blank">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "10px",
                    alignItems: "center",
                  }}
                >
                  {item.icon}
                </div>
              </a>
            );
          })}
        </div>
        <p></p>
      </div>
      <div></div>
    </div>
  );
};
