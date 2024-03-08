import React from "react";
import HeadingParagraph from "../commen/heading-paragh";
import { getSurahText } from "@/actions";
import { AyahText } from "@/types";

type SouraTextProps = {
  headingText: string;
  souraId: number;
  id: string;
};

export default async function SouraText({
  headingText,
  souraId,
  id,
}: SouraTextProps) {
  const res = await getSurahText(souraId);
  const surahArray: AyahText[] = res.data.ayahs;
  const souraText = surahArray.reduce(
    (acc, ayah, i) =>
      `${acc} ${ayah.text} - ${ayah.numberInSurah.toLocaleString("ar")} - `,
    " "
  );
  return (
    <HeadingParagraph
      id={id}
      headingText={`${headingText}`}
      pargraphText={souraText}
    />
  );
}
