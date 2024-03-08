"use client";

import { useEffect, useRef } from "react";

type PlaySouraProps = {
  souraId?: number;
  currentShakih: string;
};

export default function PlaySoura(props: PlaySouraProps) {
  const ref = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (ref.current !== null) {
      ref.current.src = `https://cdn.islamic.network/quran/audio-surah/128/${props.currentShakih}/${props.souraId}.mp3`;
    }
  }, [props.currentShakih, props.souraId]);

  return (
    <div className="">
      <audio
        ref={ref}
        autoPlay
        className="w-[250px] md:w-[350px] rounded-none"
        controls
      ></audio>
    </div>
  );
}
