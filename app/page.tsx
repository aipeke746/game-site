import GameCardList from "@/components/GameCardList";
import { Game } from "@/types/types";

async function getAllGame() {
  const response = await fetch("http://localhost:3000/api/games", {
    cache: "no-store",
  });

  const allGame: Game[] = await response.json();
  return allGame;
}

export default async function Home() {
  const allGame = await getAllGame();

  return (
    <main>
      <GameCardList allGame={allGame} />
    </main>
  );
}
