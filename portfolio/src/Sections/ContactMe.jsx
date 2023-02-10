import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

export const Contact = () => {
  const data = [
    {
      socialPlatform: "instagram",
      icon: <InstagramIcon />,
      username: "@huurhunuda",
      link: "https://instagram.com/huuthunuda",
    },
    {
      socialPlatform: "twitter",
      icon: <TwitterIcon />,
      username: "@eneminidiary",
      link: "https://twitter.com/eneminidiary",
    },
    {
      socialPlatform: "github",
      icon: <GitHubIcon />,
      username: "@huurhunuda",
      link: "https://github.com/huurhunuda",
    },
    {
      socialPlatform: "youtube",
      icon: <YouTubeIcon />,
      username: "@huurhunuda",
      link: "https://youtube.com/@huurhunuda",
    },
  ];
  return (
    <div>
      {data.map((item, index) => {
        return (
          <a href={item.link} key={index}>
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
                  alignItems: "center",
                }}
              >
                {item.icon}
              </div>
              <div>{item.username}</div>
            </div>
          </a>
        );
      })}
      <div></div>
    </div>
  );
};
