import React from "react";
import { useState } from "react";
import produce from "immer";

function Game() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Marcin",
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "New Name" } });
  };
  return (
    <div>
      <div>{game.player.name}</div>
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
}

export default Game;
