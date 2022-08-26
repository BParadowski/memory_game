import React, { useEffect, useState } from "react";
import { fetchRandomCharacters } from "./fetchCharachters";
import "./App.scss";
import Card from "./components/Card";

export interface Character {
  name: string;
  image: string;
  id: number;
}

function App() {
  const [charData, setCharData] = useState<Character[]>();
  useEffect(() => getNewCharacters(4), []);

  function getNewCharacters(number = 1) {
    fetchRandomCharacters(number).then((data) => setCharData(data));
  }

  function shufflePictures() {
    if (charData) {
      const arrayShuffled = [...charData];
      for (let i = arrayShuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrayShuffled[i], arrayShuffled[j]] = [
          arrayShuffled[j],
          arrayShuffled[i],
        ];
      }
      setCharData(arrayShuffled);
    }
  }

  return (
    <div className="layout">
      {charData?.map((character) => (
        <Card
          name={character.name}
          image={character.image}
          key={character.id}
        ></Card>
      ))}

      <button onClick={() => getNewCharacters(4)}>Get new character</button>
      <button onClick={() => shufflePictures()}>Shufflem em</button>
    </div>
  );
}

export default App;
