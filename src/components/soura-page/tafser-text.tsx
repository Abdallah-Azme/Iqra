"use client";
import React, { useCallback, useEffect, useState } from "react";
import HeadingParagraph from "../commen/heading-paragh";
import { TafserAyah } from "@/types";
import { getTafserAyah } from "@/actions";
import { references } from "@/data";
import { BeatLoader } from "react-spinners";

type TafserTextProps = {
  souraId: number;
  souraName: string;
  id: string;
};

export default function TafserText({
  souraId,
  souraName,
  id,
}: TafserTextProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [countOfAyat, setCountOfAyat] = useState(1);
  const [tafserArray, setTafserArray] = useState<TafserAyah[]>([]);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const newData = await getTafserAyah(souraId, countOfAyat);
      setTafserArray((prevData) => [...prevData, newData]);
      setCountOfAyat((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  }, [souraId, countOfAyat]);

  console.log(tafserArray);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight &&
      countOfAyat <=
        (references.find((soura) => soura.number === souraId)?.numberOfAyahs ||
          1)
    ) {
      fetchData();
    }
  }, [fetchData, souraId, countOfAyat]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const tafsersText = tafserArray.map(
    (tafserAyah, i) =>
      `- ${`${(i + 1).toLocaleString("ar")}`} - ${
        tafserAyah?.text || ` --- فشل فى تحميل تفسير هذه الآية الكريمة --- `
      } `
  );

  return (
    <div className="pb-5">
      <HeadingParagraph
        id={id}
        headingText={`التفسير الميسر ل${souraName}`}
        pargraphText={tafsersText}
      />
      {isLoading && (
        <BeatLoader
          className="absolute  bottom-4 right-1/2 translate-x-1/2"
          color="#36d7b7"
          size={25}
          margin={10}
        />
      )}
    </div>
  );
}
