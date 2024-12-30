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
      discription: "ボードゲーム・PC/スマホ対応",
      content: "AIと対戦が可能。盤面の種類も選べます。",
      url: "https://othello-five.vercel.app/",
    },
    {
      id: 2,
      title: "⚪︎×ゲーム",
      discription: "ボードゲーム・PC/スマホ対応",
      content: "AIと対戦が可能。3x3, 4x4, 5x5の盤面が選べます。",
      url: "https://tic-tac-toe-gamma-flame.vercel.app/",
    },
    {
      id: 3,
      title: "コネクトフォー",
      discription: "ボードゲーム・PC/スマホ対応",
      content: "AIと対戦が可能。",
      url: "https://connect-four-tan.vercel.app/",
    },
    {
      id: 4,
      title: "チェッカー",
      discription: "ボードゲーム・PC/スマホ対応",
      content: "AIと対戦が可能。盤面の種類も選べます。",
      url: "https://checker-blond-seven.vercel.app/",
    },
    {
      id: 5,
      title: "エンドレス迷路",
      discription: "迷路ゲーム・PC/スマホ対応",
      content: "ただひたすら迷路を解くゲームです。",
      url: "https://endless-maze-flax.vercel.app/",
    },
    {
      id: 6,
      title: "タワーディフェンス（New!!）",
      discription: "タワーディフェンスゲーム・PC/スマホ対応",
      content: "自分の城を敵から守るゲームです。",
      url: "https://tower-defense-flame.vercel.app/",
    },
    // {
    //   id: 5,
    //   title: "チェス（制作途中）",
    //   discription: "チェスで遊ぶことができます。",
    //   content: "スマホ・PCで遊べるボードーゲームです。",
    //   url: "https://chess-lyart-seven.vercel.app/",
    // },
    // {
    //   id: 7,
    //   title: "ブロック崩し（制作途中）",
    //   discription: "ブロック崩しゲームです。",
    //   content: "スマホ・PCで遊べるブロック崩しゲームです。",
    //   url: "https://breaking-blocks-phi.vercel.app/",
    // },
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
