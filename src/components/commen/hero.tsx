import Image from "next/image";
import React from "react";
import Container from "./Container";
import { Ayah } from "@/types";
import { twMerge } from "tailwind-merge";

interface HeroProps {
  ayat: Ayah[];
  randomPage: number;
}

export default function Hero(props: HeroProps) {
  const ayatText = props.ayat.reduce((acc: string, ayah: Ayah, i: number) => {
    return (
      acc +
      ayah.text_indopak +
      ` -${parseInt(ayah.verse_key.split(":")[1]).toLocaleString("ar")}- `
    );
  }, "");

  return (
    <div className=" ">
      <div className="relative h-screen w-screen -z-10 -mt-[78PX]">
        <Image fill className="" src="/cyan.jpg" alt="River image" />
        <div className="absolute  z-10 inset-0 bg-black/70"></div>
      </div>
      <div
        className={twMerge(
          "text-sm md:text-xl lg:text-2xl font-bold absolute top-1/2 z-20  -translate-y-1/2 tracking-wider px-4 md:px-20 text-center py-2 text-white",
          "leading-6 sm:leading-9 md:leading-[40px] lg:leading-[60px] "
        )}
      >
        <h2 className="mb-5 md:mb-10"> ﴿ أعوذ بالله من الشيطان الرجيم ﴾</h2>
        <h2>{ayatText}</h2>
        <h5 className="text-sm text-left md:ml-40">
          (ص {props.randomPage.toLocaleString("ar")} )
        </h5>
      </div>
    </div>
  );
}
