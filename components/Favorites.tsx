import React from "react";
import { favorites } from "../data/data";

type Props = {};

export default function Favorites({}: Props) {
  return (
    <div className="flex gap-4">
      {favorites.map((favorite, i) => (
        <div
          key={i}
          className="w-20 p-4 shadow-[0_4px_22px_-6px_rgba(0,0,0,0.15)] rounded-xl "
        >
          {favorite}
        </div>
      ))}
    </div>
  );
}
