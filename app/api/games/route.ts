import { NextResponse } from "next/server";

export async function GET(req: Request) {
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

  return NextResponse.json(games);
}
