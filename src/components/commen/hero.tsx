import Image from "next/image";
import React from "react";
import Container from "./Container";
import { Ayah } from "@/types";

interface HeroProps {
  ayat: Ayah[];
}

export default function Hero(props: HeroProps) {
  const ayatText = props.ayat.map((ayah: Ayah) => ayah.text_indopak).join(" ");
  return (
    <div className="relative ">
      <div className="relative h-screen w-screen -mt-[114px] ">
        <Image fill className="" src="/river-image.jpg" alt="River image" />
        <div className="absolute  z-10 inset-0 bg-black/70"></div>
      </div>
      <Container>
        <h2 className="text-6xl absolute top-1/2 z-20 line-clamp-5 leading-[100px] -translate-y-1/2 w-auto max-w-7xl tracking-wider text-white">
          {ayatText}
        </h2>
      </Container>
    </div>
  );
}
