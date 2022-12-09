import React from "react";
import CardBack from "../assets/CardBack.png";
export const Card = ({ card, flip, isFlipped }) => {
  if (!card) {
    return (
      <div
        style={{
          width: "200px",
          height: "200px",
        }}
      />
    );
  }
  return (
    <div
      onClick={() => flip()}
      style={{
        width: "200px",
        height: "200px",
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
            borderRadius: "20px",
          }}
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
          src={`${card}.png`}
          alt="back"
          style={{
            width: "100%",
            borderRadius: "20px",
          }}
        />
      </div>
    </div>
  );
};
