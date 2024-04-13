import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Game } from "@/types/types";

interface GameProps {
  game: Game;
}

const GameCard = ({ game }: GameProps) => {
  const { title, discription, content, url } = game;

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{discription}</CardDescription>
        </CardHeader>
        <CardContent>{content}</CardContent>
        <CardFooter className="flex justify-between">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            Play Game
          </a>
        </CardFooter>
      </Card>
    </div>
  );
};

export default GameCard;
