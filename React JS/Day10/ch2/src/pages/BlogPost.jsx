import { Avatar, Box, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import MiniiAvatar from "../assets/images/avatarMine.jpg";
import { useContext } from "react";
import { ColorModeContext } from "../ThemeContext/ThemeContext";
import { BlogComment } from "../components/BlogComment";
import { CommentBoxMine } from "../components/CommentBoxMine";
export const BlogPost = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [comments, setComments] = useState([]);
  console.log(comments);
  const { id } = useParams();
  const { theme } = useContext(ColorModeContext);
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const instance = axios.create({
      baseURL: `https://dummyapi.io/data/v1/post/${id}`,
      headers: { "app-id": "636e0d6642c1f665f684f489" },
    });
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const res = await instance.get("/");
        setPost(res.data);
      } catch (error) {
        console.log(error.message);
      }
      setLoading(false);
    };
    fetchPosts();
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  return (
    <Container>
      <Typography
        sx={{
          fontSize: "48px",
          fontWeight: "800",
          color: theme === "dark" ? "black" : "white",
          marginTop: "20px",
        }}
      >
        {post.text}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          color: theme === "dark" ? "black" : "white",
          marginTop: "20px",
        }}
      >
        <Avatar src={post?.owner?.picture} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginLeft: "10px",
            color: "GrayText",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "5px",
            }}
          >
            <Typography>{post?.owner?.firstName}</Typography>
            <Typography>{post?.owner?.lastName}</Typography>
          </Box>
          <Typography
            sx={{
              margin: "0 5px 0 5px",
            }}
          >
            |
          </Typography>
          <Typography>{post?.publishDate?.split("T")[0]}</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "450px",
          position: "relative",
          overflow: "hidden",
          marginTop: "20px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "450px",
            backgroundImage: `url(${post.image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundColor: "rgba(0,0,0,0.2)",
            filter: "blur(8px)",
          }}
        ></Box>
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "450px",
            backgroundImage: `url(${post.image})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundColor: "rgba(0,0,0,0.2)",
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <Typography
          sx={{
            color: theme === "dark" ? "black" : "white",
            textAlign: "justify",
          }}
        >
          If you’re thinking of starting a blog of your own, but just don’t have
          a clue on what to blog about, then fear not!
          <br />
          In this article, I have included a whole load of blog examples from a
          wide variety of different niches, all run on different blogging
          platforms like WordPress, Joomla! and Drupal.
          <br />
          Since the beginning of the internet, millions and millions and
          millions of blogs have been created. Many have died due to lost
          interest or their owners giving up on the idea, while others have
          thrived and continue to grow, making money and earning their owners a
          steady income. It’s a constant evolution of content that keeps people
          coming back for more, especially if these blogs contact highly
          resourceful material that people find useful and interesting.
          <br />
          Each example listed in this blog post are all different in some way
          and all bring something unique to their readers & subscribers. I want
          to show you what is possible and how you can take inspiration from
          them and create an awesome blog of your own.
          <br />
          Some of these blogs make over $100k a month, others are just a hobby
          for their owners, but all have the same purpose at their core… the
          love of writing and sharing information.
          <br />
          Some of these blogs make over $100k a month, others are just a hobby
          for their owners, but all have the same purpose at their core… the
          love of writing and <br />
          Some of these blogs make over $100k a month, others are just a hobby
          for their owners, but all have the same purpose at their core… the
          love of writing and sharing information.
          <br />
          Some of these blogs make over $100k a month, others are just a hobby
          for their owners, but all have the same purpose at their core… the
          love of writing and sharing information.
          <br />
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            color: theme === "dark" ? "black" : "white",
            textAlign: "justify",
            display: "flex",
            flexDirection: "row",

            marginTop: "20px",
            alignItems: "center",
          }}
        >
          <Avatar src={post?.owner?.picture} />
          <Box
            sx={{
              marginLeft: "10px",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
              }}
            >
              Written by:
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                fontSize: "19px",
                gap: "5px",
              }}
            >
              <Typography>{post?.owner?.firstName}</Typography>
              <Typography>{post?.owner?.lastName}</Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            color: theme === "dark" ? "black" : "white",
            textAlign: "justify",

            margin: "20px 0 20px 0",
          }}
        >
          <Typography
            sx={{
              fontSize: "24px",
              color: "GrayText",
            }}
          >
            Comments
          </Typography>
          <BlogComment />
          {comments.map((el, index) => {
            return (
              <CommentBoxMine
                commentText={el}
                pfp={MiniiAvatar}
                fName="Uda"
                lName="huurhun"
                date="just now"
                key={index}
                index={index}
                comments={comments}
                setComments={setComments}
              />
            );
          })}
        </Box>
        <Box
          sx={{
            color: theme === "dark" ? "black" : "white",
            textAlign: "justify",

            height: "200px",
          }}
        >
          <Typography
            sx={{
              fontSize: "24px",
              color: "GrayText",
            }}
          >
            Join the conversation
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginTop: "20px",
            }}
          >
            <Avatar src={MiniiAvatar} />
            <TextField
              id="outlined-basic"
              label="Comment"
              value={inputValue}
              // color="secondary"
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              onKeyPress={(e) => {
                if (e.code === "Enter") {
                  setComments([...comments, inputValue]);
                  setInputValue("");
                }
              }}
              sx={{
                marginLeft: "20px",
                width: "calc(100% - 60px)",
              }}
              focused
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
