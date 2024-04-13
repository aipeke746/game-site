import GameCardList from "@/components/GameCardList";
import { Game } from "@/types/types";

async function getAllGame() {
  // const response = await fetch("http://localhost:3000/api/games", {
  // const response = await fetch(
  //   "https://aipeke746.github.io/game_site/api/games",
  //   {
  //     cache: "no-store",
  //   },
  // );

  // const allGame: Game[] = await response.json();
  // return allGame;
  const games = [
    {
      id: 1,
      title: "オセロ",
      discription: "オセロゲームで遊ぶことができます。",
      content: "スマホ・PCで遊べるオセロゲームです。",
      url: "https://aipeke746.github.io/othello/",
    },
    {
      id: 2,
      title: "エンドレス迷路",
      discription: "ひたすら迷路を解くゲームです。",
      content: "スマホ・PCで遊べる迷路ゲームです。",
      url: "https://aipeke746.github.io/endless_maze/",
    },
    {
      id: 3,
      title: "ブロック崩し",
      discription: "ブロック崩しゲームです。",
      content: "スマホ・PCで遊べるブロック崩しゲームです。",
      url: "https://aipeke746.github.io/breaking_blocks/",
    },
  ];
  return games;
}

export default async function Home() {
  const allGame = await getAllGame();

  return (
    <main>
      <GameCardList allGame={allGame} />
    </main>
  );
}
