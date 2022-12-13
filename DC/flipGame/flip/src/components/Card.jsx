import React from "react";
import CardBack from "../assets/CardBack.png";
export const Card = ({ card, flip, isFlipped, clicked, index }) => {
  if (!card) {
    return <div className="preventSelection" />;
  }
  return (
    <div
      id={index}
      onClick={() => {
        console.log(index);
        if (clicked === index) {
          return;
        } else {
          flip();
        }
      }}
      style={{
        position: "relative",
        transform: `rotateY(${isFlipped ? "180deg" : "0deg"})`,
        transformStyle: "preserve-3d",
        transition: "transform 0.6s",
      }}
      className="preventSelection"
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backfaceVisibility: "hidden",
        }}
      >
        <img
          src={CardBack}
          alt="front"
          style={{
            width: "100%",
          }}
          draggable="false"
        />
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          backfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
        }}
      >
        <img
          index={index}
          src={`${card}.png`}
          alt="back"
          style={{
            width: "100%",
          }}
          draggable="false"
        />
      </div>
    </div>
  );
};
