import { useEffect, useState } from "react";
import "./App.css";
import { Card } from "./components/Card";

function App() {
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
    if (cards[first] === cards[index]) {
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
        <div>
          <p>congrats biatch</p>
          <button onClick={() => generate()}>Restart</button>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: "10px",
          }}
        >
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
}

export default App;
