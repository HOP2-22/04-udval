import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { CommentBox } from "./CommentBox";
const instance = axios.create({
  baseURL: "https://dummyapi.io/data/v1/post/60d21af267d0d8992e610b8d/comment",
  headers: { "app-id": "637500cabc07441c94399cc1" },
});
export const BlogComment = () => {
  const [comment, setComment] = useState([]);
  useEffect(() => {
    const fetchComment = async () => {
      try {
        const res = await instance.get("/");
        setComment(res.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchComment();
  }, []);
  console.log(comment);
  return (
    <div>
      {comment.map(({ message, publishDate, owner }, index) => {
        return (
          <CommentBox
            pfp={owner.picture}
            date={publishDate.split("T")[0]}
            comment={message}
            fName={owner.firstName}
            lName={owner.lastName}
            key={index}
          />
        );
      })}
    </div>
  );
};
