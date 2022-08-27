import React, { useEffect, useRef, useState } from "react";
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
  const [points, setPoints] = useState(0);
  const [highscore, setHighscore] = useState(0);

  const usedCards = useRef<number[]>([]);
  const numberOfCards = useRef(4);

  useEffect(() => getNewCharacters(numberOfCards.current), []);
  useEffect(() => setHighscore(points > highscore ? points : highscore)),
    [points];

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

  function handleGameMechanic(id: number): boolean {
    if (usedCards.current.includes(id)) {
      setHighscore(points);
      setPoints(0);
      numberOfCards.current = 4;
      getNewCharacters(numberOfCards.current);
      usedCards.current = [];
      return true;
    } else {
      setPoints(points + 1);
      usedCards.current.push(id);
      if (usedCards.current.length === charData?.length) {
        numberOfCards.current = numberOfCards.current + 2;
        usedCards.current = [];
        getNewCharacters(numberOfCards.current);
      }
    }
    return false;
  }

  const cardList = charData?.map((character) => (
    <Card
      name={character.name}
      image={character.image}
      shuffle={() => shufflePictures()}
      clickHandle={() => handleGameMechanic(character.id)}
      key={character.id}
    ></Card>
  ));

  return (
    <div className="layout">
      <h1 className="header">Memory battle feat. Rick and Morty</h1>
      <h2>
        Your score: {points} Highscore: {highscore}
      </h2>
      <div className="card-list">
        {cardList || "Failed to load resources from Rick and Morty API :("}
      </div>
    </div>
  );
}

export default App;
