import React, { useEffect, useState } from "react";
import { fetchRandomCharacters } from "./fetchCharachters";
import "./App.css";
import { nanoid } from "nanoid";

interface Character {
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
    <pre style={{ width: "400px" }}>
      {charData?.map((character) => (
        <img
          style={{ height: "200px", width: "200px" }}
          key={nanoid()}
          src={character.image}
          alt=""
        />
      ))}

      <button onClick={() => getNewCharacters(4)}>Get new character</button>
    </pre>
  );
}

export default App;
