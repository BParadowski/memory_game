import React from "react";
import { Character } from "../App";

export default function Card({ name, image }: Character) {
  return (
    <div className="card">
      <img src={image} alt="A picture of a Rick and Morty character" />
      <p>{name}</p>
    </div>
  );
}
