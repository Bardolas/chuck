import React from "react";
import TinderCard from "react-tinder-card";

interface TarjetaProps {
  joke: string;
  image: string;
}

const Tarjeta: React.FC<TarjetaProps> = ({ joke, image }) => {
  const onSwipe = (direction: unknown) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier: unknown) => {
    console.log(myIdentifier + " left the screen");
  };

  return (
    <div>
      <TinderCard
        onSwipe={onSwipe}
        onCardLeftScreen={() => onCardLeftScreen("fooBar")}
        className="border-solid border-4 border-black min-h-72 min-w-60 rounded-lg shadow-2xl shadow-black"
      >
        <div
          className="h-72 w-60 flex justify-center items-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${image})`,
            overflow: "hidden",
            borderRadius: "4px",
          }}
        >
          <p>{joke}</p>
        </div>
      </TinderCard>
    </div>
  );
};

export default Tarjeta;
