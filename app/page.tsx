import GameCardList from "@/components/GameCardList";
import { Game } from "@/types/types";

async function getAllGame() {
  // const response = await fetch("http://localhost:3000/api/games", {
  // const response = await fetch(
  //   "https://aipeke746.github.io/game-site/api/games",
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
      content: "スマホ・PCで遊べるボードゲームです。",
      url: "https://othello-five.vercel.app/",
    },
    {
      id: 2,
      title: "⚪︎×ゲーム",
      discription: "⚪︎×ゲームで遊ぶことができます。",
      content: "スマホ・PCで遊べるボードゲームです。",
      url: "https://tic-tac-toe-gamma-flame.vercel.app/",
    },
    {
      id: 3,
      title: "コネクトフォー",
      discription: "コネクトフォーで遊ぶことができます。",
      content: "スマホ・PCで遊べるボードゲームです。",
      url: "https://connect-four-tan.vercel.app/",
    },
    {
      id: 4,
      title: "チェッカー",
      discription: "チェッカーで遊ぶことができます。",
      content: "スマホ・PCで遊べるボードーゲームです。",
      url: "https://checker-blond-seven.vercel.app/",
    },
    {
      id: 5,
      title: "チェス（制作途中）",
      discription: "チェスで遊ぶことができます。",
      content: "スマホ・PCで遊べるボードーゲームです。",
      url: "https://chess-lyart-seven.vercel.app/",
    },
    {
      id: 6,
      title: "エンドレス迷路",
      discription: "ひたすら迷路を解くゲームです。",
      content: "スマホ・PCで遊べる迷路ゲームです。",
      url: "https://endless-maze-flax.vercel.app/",
    },
    {
      id: 7,
      title: "ブロック崩し（制作途中）",
      discription: "ブロック崩しゲームです。",
      content: "スマホ・PCで遊べるブロック崩しゲームです。",
      url: "https://breaking-blocks-phi.vercel.app/",
    },
    {
      id: 8,
      title: "タワーディフェンス（制作途中）",
      discription: "タワーディフェンスゲームです。",
      content: "スマホ・PCで遊べるタワーディフェンスゲームです。",
      url: "https://tower-defense-chi.vercel.app/",
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
