import { Button, ButtonGroup } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
type NavLinksProps = {
  souraName: string;
};

export default function NavLinks({ souraName }: NavLinksProps) {
  return (
    <div className="flex justify-center text-white mt-5">
      <ButtonGroup size="lg" radius="none">
        <Link href="#audio-player" scroll={false}>
          <Button>المشغل الصوتى للقراءن الكريم</Button>
        </Link>
        <Link href="#soura-text" scroll={false}>
          <Button>{`نص سورة ${souraName}`}</Button>
        </Link>
        <Link href="#tafser-text" scroll={false}>
          <Button>{`التفسير الميسر ل${souraName}`}</Button>
        </Link>
      </ButtonGroup>
    </div>
  );
}
