import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./FlipGame.css";
import { Card } from "./Card";
export const FlipGame = () => {
  const shapes = ["Heart", "Cloud", "Moon", "Snowflake", "Sun", "SomeGuy"];
  const [cards, setCards] = useState([]);
  const generate = () => {
    let newCards = [...shapes, ...shapes].sort(() => 0.5 - Math.random());
    setCards(newCards);
  };
  useEffect(() => {
    generate();
  }, []);
  const [flipped, setFlipped] = useState(new Array(12).fill(false));
  const [first, setFirst] = useState(null);
  const flip = (index) => {
    setFlipped(flipped.map((f, i) => (i === index ? !f : f)));
    if (first === null) {
      setFirst(index);
      return;
    }
    if (cards[first] === cards[index] && first !== index) {
      setTimeout(() => {
        setFirst(null);
        setCards(cards.map((card, i) => (card === cards[first] ? null : card)));
      }, 600);
    } else {
      setTimeout(() => {
        setFlipped(new Array(12).fill(false));
        setFirst(null);
      }, 600);
    }
  };
  // const [isEnd, setIsEnd] = useState(false);
  // useEffect(() => {
  //   if (cards.filter((card) => card == null).length === 0) {
  //     setIsEnd(true);
  //   }
  // });
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      {cards.filter((card) => card !== null).length === 0 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontSize: "30px",
              fontWeight: "800px",
            }}
          >
            Congrats🥳
          </p>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              generate();
              setFlipped(new Array(12).fill(false));
            }}
          >
            Restart
          </Button>
        </div>
      ) : (
        <div className="resGrid">
          {cards.map((card, index) => {
            return (
              <Card
                card={card}
                flip={() => flip(index)}
                isFlipped={flipped[index]}
                key={index}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
