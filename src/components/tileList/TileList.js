import React from "react";
import { Tile } from '../tile/Tile';

export const TileList = ({ tiles }) => {
  return (
    <div>
      {tiles.map((obj, index) => {
        return <Tile key={index} tile={obj} />
      })}
    </div>
  );
};
