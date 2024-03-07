import { getSurahAudio, getSurahText } from "@/actions";
import Container from "@/components/commen/Container";
import ButtonAudioGroup from "@/components/commen/button-audio-group";
import PlaySoura from "@/components/souar/play-soura";
import { AyahText, AyahAudio } from "@/types";
import Image from "next/image";
import React from "react";

type SouraPageProps = {
  params: {
    souraId: string;
  };
  searchParams: { soura: string };
};

export default async function SouraPage({
  params,
  searchParams,
}: SouraPageProps) {
  const souraId = parseInt(params.souraId);
  const souraName = searchParams.soura;

  //get surah text
  const res = await getSurahText(souraId);
  console.log(res);
  const surahArray: AyahText[] = res.data.ayahs;

  const souraText = surahArray.reduce(
    (acc, ayah) =>
      `${acc} ${ayah.text} - ${ayah.numberInSurah.toLocaleString("ar")} - `,
    " "
  );
  console.log(souraText);

  //get surah audio links
  const audio: AyahAudio[] = await getSurahAudio(souraId);
  const allSurahLinks = audio.map(
    (ayah) => ayah.audio || ayah.audioSecondary[0]
  );
  return (
    <div className="bg-gradient-radial from-[#2C5364] via-[#203A43] to-[#12262c]">
      <Container className="pt-10">
        <div className="grid grid-cols-12 bg-white/10 rounded-3xl">
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
              <div className="absolute bottom-[1px] text-white  right-1/2 translate-x-1/2 ">
                <PlaySoura allSurahLinks={allSurahLinks} />
              </div>
            </div>
          </div>
          <div className="col-span-6">
            <div className="flex flex-col w-auto justify-center">
              <div className="">
                <h2 className="text-xl text-center mt-5 text-white">
                  {souraName}
                </h2>
                <p></p>
              </div>
              <ButtonAudioGroup />
            </div>
          </div>
        </div>
        <div className="text-white text-center text-lg mt-10">
          <p className="">{souraText}</p>
        </div>
      </Container>
    </div>
  );
}
