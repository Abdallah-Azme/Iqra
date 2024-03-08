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
  const tafsers: TafserAyah[] = await fetchDataWithRetry(arrayOfPromises, 5);
  console.log(tafsers);
  const tafsersText = tafsers.reduce(
    (acc, tafserAyah, i) =>
      `${acc} - ${`${(i + 1).toLocaleString("ar")}`} - ${
        tafserAyah?.text || ` --- فشل فى تحميل تفسير هذه الآية الكريمة --- `
      } `,
    " "
  );

  console.log(tafsersText);
  return (
    <HeadingParagraph
      id={id}
      headingText={`التفسير الميسر ل${souraName}`}
      pargraphText={tafsersText}
    />
  );
}
