import React from "react";

// export const Tile = ({ tile }) => {
//   return (
//     <div className="tile-container">
//       {Object.values(tile).map((data, i) => (
//         <p key={i} className={`${i === 0 ? "tile-title" : ""} tile`}>
//         {data}
//         </p>
//       ))}
//     </div>
//   );
// };

export const Tile = ({ tile }) => {
  return (
    <div className="tile-container">
      {Object.values(tile).map((value, index) => (
        <p key={index} className={`${index === 0 ? "tile-title" : ""} tile`}>
          {value}
        </p>
      ))}
    </div>
  );
};

