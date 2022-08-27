import React from "react";

interface CharInfoAndFunc {
  name: string;
  image: string;
  shuffle: () => void;
  clickHandle: () => boolean;
}

export default function Card({
  name,
  image,
  shuffle,
  clickHandle,
}: CharInfoAndFunc) {
  return (
    <li
      className="card"
      onClick={() => {
        if (!clickHandle()) {
          shuffle();
        }
      }}
    >
      <img src={image} alt="A picture of a Rick and Morty character" />
      <p>{name}</p>
    </li>
  );
}
