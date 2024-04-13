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

const GameCard = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga beatae
          ea vero. Molestias non incidunt vitae ratione cupiditate ipsa
          asperiores doloribus! Nisi nihil nam magnam consectetur quo deleniti
          totam excepturi.
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href={"/"} className="text-blue-500">
            Read More
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default GameCard;
