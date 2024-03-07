import { nameOfSheikhs } from "@/app/data";
import React from "react";
import { Button, ButtonGroup } from "@nextui-org/react";

export default function ButtonAudioGroup() {
  const audioGroup = nameOfSheikhs.map((nameOfSheikh) => (
    <Button
      className="mx-1 my-2 text-md  text-white"
      size="sm"
      color="success"
      key={nameOfSheikh.name}
    >
      {nameOfSheikh.name}
    </Button>
  ));
  return <div>{audioGroup}</div>;
}
