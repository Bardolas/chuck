/*import React, { useState } from 'react';
import Tarjeta from '../tarjeta/Tarjeta';

interface CardData {
  name: string;
  url: string;
}

const PilaTarjeta: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([
    { name: 'Person One', url: 'https://via.placeholder.com/300' },
    { name: 'Person Two', url: 'https://via.placeholder.com/300' },
    // Add more cards as needed
  ]);

  const handleSwipe = (direction: 'left' | 'right') => {
    console.log('You swiped ' + direction);
    setCards((prev) => prev.slice(1));
  };

  return (
    <div style={{ position: 'relative', width: '300px', height: '400px' }}>
      {cards.map((card, index) => (
        <Tarjeta key={index} data={card} onSwipe={handleSwipe} />
      ))}
    </div>
  );
};

export default PilaTarjeta;*/