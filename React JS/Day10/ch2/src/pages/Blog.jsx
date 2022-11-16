import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import NewsCard from "../components/NewsCard";
import { Container } from "@mui/system";
import { ColorModeContext } from "../ThemeContext/ThemeContext";
import { useContext } from "react";
import axios from "axios";
import { useEffect } from "react";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

const instance = axios.create({
  baseURL: "https://dummyapi.io/data/v1/post",
  headers: { "app-id": "636e0d6642c1f665f684f489" },
});
export const Blog = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const res = await instance.get("/");
        setPost(res.data.data);
      } catch (error) {
        console.log(error.message);
      }
      setLoading(false);
    };
    fetchPosts();
  }, []);
  console.log(post);
  const { theme } = useContext(ColorModeContext);
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <Container sx={{ backgroundColor: theme === "dark" ? "#" : "" }}>
        <Typography
          sx={{
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
          {post.map(({ image, text, owner, publishDate, id }, index) => {
            return (
              <Grid item xs={4} key={index}>
                <Link to={`/Blogs/${id}`}>
                  <NewsCard
                    CardContentBody={text}
                    CardContentHeader={text}
                    CardContentFirstName={owner.firstName}
                    CardContentLastName={owner.lastName}
                    Image={image}
                    ownerPicture={owner.picture}
                    date={publishDate.split("T")[0]}
                    key={index}
                  />
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};
