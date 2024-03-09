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
    arrayOfPromises.push(getTafserSurah(souraId, i));
  }

  // get tafser surah
  const tafsers: TafserAyah[] = await fetchDataWithRetry(arrayOfPromises, 3);
  const tafsersText = tafsers.reduce(
    (acc, tafserAyah, i) =>
      `${acc} - ${`${(i + 1).toLocaleString("ar")}`} - ${
        tafserAyah?.text || ` --- فشل فى تحميل تفسير هذه الآية الكريمة --- `
      } `,
    " "
  );
  return (
    <HeadingParagraph
      id={id}
      headingText={`التفسير الميسر ل${souraName}`}
      pargraphText={tafsersText}
    />
  );
}
