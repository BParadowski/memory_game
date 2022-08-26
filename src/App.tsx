import React, { useEffect, useState } from "react";
import { fetchRandomCharacters } from "./fetchCharachters";
import "./App.scss";
import { nanoid } from "nanoid";
import Card from "./components/Card";

export interface Character {
  name: string;
  image: string;
  id?: number;
}

function App() {
  const [charData, setCharData] = useState<Character[]>();
  useEffect(() => getNewCharacters(4), []);

  function getNewCharacters(number = 1) {
    fetchRandomCharacters(number).then((data) => setCharData(data));
  }

  return (
    <div className="layout">
      {charData?.map((character) => (
        <Card
          key={nanoid()}
          name={character.name}
          image={character.image}
        ></Card>
      ))}

      <button onClick={() => getNewCharacters(4)}>Get new character</button>
    </div>
  );
}

export default App;
