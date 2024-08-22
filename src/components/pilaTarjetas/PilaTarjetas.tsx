import React, { useState } from "react";
import Tarjeta from "../tarjeta/Tarjeta";

interface CardData {
  joke: string;
  image: string;
}

const PilaTarjeta: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([
    { joke: "Person One", image: "https://via.placeholder.com/300" },
    { joke: "Person Two", image: "https://via.placeholder.com/300" },
  ]);

  const handleSwipe = (direction: unknown) => {
    console.log("You swiped " + direction);
    setCards((prev) => prev.slice(0));
  };

  return (
    <div style={{ position: "relative", width: "300px", height: "400px" }}>
      {cards.map((card, index) => (
        <Tarjeta
          key={index}
          joke={card.joke}
          image={card.image}
          handleSwipe={handleSwipe}
        />
      ))}
    </div>
  );
};

export default PilaTarjeta;
