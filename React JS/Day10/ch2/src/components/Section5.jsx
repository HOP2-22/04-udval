import React from "react";
import { UserFeedback } from "./UserFeedback";

export const Section5 = () => {
  const cardData = [
    {
      star: 5,
      comment:
        "Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place.",
      avatar:
        "https://img.freepik.com/premium-vector/smiling-girl-avatar_102172-32.jpg?w=826",
      name: "Amy Klassen",
    },
    {
      star: 4,
      comment:
        "Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place.",
      avatar:
        "https://img.freepik.com/premium-vector/smiling-girl-avatar_102172-32.jpg?w=826",
      name: "Amy Klassen",
    },
    {
      star: 3,
      comment:
        "Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place.",
      avatar:
        "https://img.freepik.com/premium-vector/smiling-girl-avatar_102172-32.jpg?w=826",
      name: "Amy Klassen",
    },
    {
      star: 5,
      comment:
        "Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place.",
      avatar:
        "https://img.freepik.com/premium-vector/smiling-girl-avatar_102172-32.jpg?w=826",
      name: "Amy Klassen",
    },
  ];
  return (
    <div className="secFiveContaianer">
      <div className="sec5Header">What people say about us</div>
      <div>
        <div className="feedbackContainer">
          {" "}
          {cardData.map((data) => {
            return (
              <UserFeedback
                name={data.name}
                starNumber={data.star}
                comment={data.comment}
                avatar={data.avatar}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
