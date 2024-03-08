import React from "react";
import HeadingParagraph from "../commen/heading-paragh";
import { TafserAyah } from "@/types";
import { getTafserSurah } from "@/actions";
import { references } from "@/data";
import { fetchDataWithRetry } from "@/utils";

type TafserTextProps = {
  souraId: number;
  souraName: string;
  id: string;
};

export default async function TafserText({
  souraId,
  souraName,
  id,
}: TafserTextProps) {
  let arrayOfPromises = [];

  for (
    let i = 1;
    i <= references.find((ref) => ref.number === souraId)?.numberOfAyahs!;
    i++
  ) {
    console.log(souraId);
    arrayOfPromises.push(getTafserSurah(souraId, i));
  }

  // get tafser surah
  const tafsers: TafserAyah[] = await fetchDataWithRetry(arrayOfPromises, 500);
  console.log(tafsers);
  const tafsersText = tafsers.reduce(
    (acc, tafserAyah) =>
      `${acc} - ${tafserAyah?.ayah_number?.toLocaleString("ar")} - ${
        tafserAyah?.text
      } `,
    " "
  );

  console.log(tafsersText);
  return (
    <HeadingParagraph
      id={id}
      headingText={`تفسير  ${souraName}`}
      pargraphText={tafsersText}
    />
  );
}
