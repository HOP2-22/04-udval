import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

export const Contact = () => {
  const data = [
    {
      socialPlatform: "instagram",
      icon: InstagramIcon,
      username: "@eneminireclamnioronzai",
      link: "https://instagram.com/eneminireclamnioronzai",
    },
    {
      socialPlatform: "twitter",
      icon: TwitterIcon,
      username: "@eneminidiary",
      link: "https://twitter.com/eneminidiary",
    },
    {
      socialPlatform: "github",
      icon: GitHubIcon,
      username: "@huurhunuda",
      link: "https://github.com/huurhunuda",
    },
    {
      socialPlatform: "youtube",
      icon: YouTubeIconu,
      username: "@huurhunuda",
      link: "https://youtube.com/@huurhunuda",
    },
  ];
  return (
    <div>
      {data.map((item) => {
        return;
        <a href={item.link}>
          <div>{item.icon}</div>
          <div>{item.username}</div>
        </a>;
      })}
      <div></div>
    </div>
  );
};
