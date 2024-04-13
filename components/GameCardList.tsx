import React from "react";
import GameCard from "./GameCard";
import { Game } from "@/types/types";

interface AllGameProps {
  allGame: Game[];
}

const GameCardList = ({ allGame }: AllGameProps) => {
  return (
    <div className="grid lg:grid-cols-3 px-4 py-4 gap-4">
      {allGame.map((game: Game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

export default GameCardList;
