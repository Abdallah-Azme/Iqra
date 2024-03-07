"use client";

import Crunker from "crunker";
import { useEffect, useRef, useState } from "react";

type PlaySouraProps = {
  allSurahLinks: string[];
};

export default function PlaySoura(props: PlaySouraProps) {
  const [currentAyahIndex, setCurrentAyahIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const playNextAyah = () => {
    if (currentAyahIndex < props.allSurahLinks.length - 1) {
      setCurrentAyahIndex(currentAyahIndex + 1);
    } else {
      setCurrentAyahIndex(0);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, [currentAyahIndex]);

  return (
    <div className="">
      <audio
        className="w-[350px] rounded-none"
        ref={audioRef}
        controls
        src={props.allSurahLinks[currentAyahIndex]}
        onEnded={playNextAyah}
      ></audio>
    </div>
  );
}
