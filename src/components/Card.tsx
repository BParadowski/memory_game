import React from "react";

interface CharInfo {
  name: string;
  image: string;
}

export default function Card({ name, image }: CharInfo) {
  return (
    <li className="card">
      <img src={image} alt="A picture of a Rick and Morty character" />
      <p>{name}</p>
    </li>
  );
}
