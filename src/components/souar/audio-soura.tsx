// "use client";
// import ReactPlayer from "react-player";

// import { AyahAudio } from "@/types";
// import React, { useEffect, useRef, useState } from "react";

// type SoraAudioProps = {
//   souraSoundSrc: AyahAudio[];
// };

// export default function AudioSoura({ souraSoundSrc }: SoraAudioProps) {
//   console.log({ souraSoundSrc });
//   const audioRef = useRef<React.AudioHTMLAttributes<HTMLAudioElement>>(null);
//   const [currentSrcIndex, setCurrentSrcIndex] = useState(0);

//   const handleEnded = () => {
//     // Move to the next audio source when one ends
//     setCurrentSrcIndex((prevIndex) =>
//       currentSrcIndex < souraSoundSrc.length - 1 ? prevIndex + 1 : 0
//     );
//   };

//   // useEffect(() => {
//   //   if (audioRef.current && souraSoundSrc) {
//   //     audioRef.current.src = souraSoundSrc[currentSrcIndex];
//   //     audioRef.current.play();
//   //   }
//   // }, [currentSrcIndex, souraSoundSrc]);

//   return (
//     <div className="w-auto h-auto">
//       <audio
//         // ref={audioRef}
//         src={souraSoundSrc}
//         controls
//         // onEnded={handleEnded}
//       />
//     </div>
//   );
// }
