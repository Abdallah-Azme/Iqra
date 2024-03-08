"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import PlaySoura from "../souar/play-soura";
import ButtonAudioGroup from "./button-audio-group";
import { nameOfSheikhs } from "@/data";

type HeroAudioCardProps = {
  souraName: string;
  souraId: number;
  id: string;
};

export default function HeroAudioCard({
  souraId,
  souraName,
  id,
}: HeroAudioCardProps) {
  const [currentShakih, setCurrentShakih] = useState("ar.alafasy");

  return (
    <div>
      <div
        id={id}
        className="grid grid-cols-6 lg:grid-cols-12 mt-14 p-10 justify-center items-center bg-white/10 rounded-3xl"
      >
        <div className="col-span-6">
          <div className="relative text-center flex flex-col items-center ">
            <div className="relative ">
              <Image
                className="relative rounded-[28px]"
                alt="quran-photo"
                src="/quran-photo-2.jpg"
                width={550}
                height={550}
              />
              <div className="absolute bg-black rounded-[28px] inset-0 opacity-60 "></div>
            </div>
            <h2 className="text-5xl absolute -translate-y-1/2 top-1/3 p-4 bg-white/10 drop-shadow-2xl rounded-full z-10 text-zinc-900/85">
              {souraName}
            </h2>
            <h4 className="text-sm sm:text-lg md:text-2xl text-white absolute bottom-0 mb-16">{` تلاوة عطرة بصوت فضيلة الشيخ : ${
              nameOfSheikhs.find(
                (sheikh) => sheikh.identifier === currentShakih
              )?.arabicName
            }`}</h4>
            <div className="absolute bottom-[1px] text-white  right-1/2 translate-x-1/2 ">
              <PlaySoura currentShakih={currentShakih} souraId={souraId} />
            </div>
          </div>
        </div>
        <div className="col-span-6">
          <div className="flex flex-col w-auto justify-center">
            <div className="">
              <h4 className="text-xl mt-5 text-white">{`${souraName} متوفرة بأصوات الشيوخ :`}</h4>
              <ButtonAudioGroup setCurrentShakih={setCurrentShakih} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
