"use client";
import { HadithItem } from "@/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getHadithList } from "@/actions";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

export default function HadithAccordion() {
  const [isLoading, setIsLoading] = useState(false);
  const [numberOfPage, setNumberOfPage] = useState(1);
  const [hadithList, setHadithList] = useState<HadithItem[]>([]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const newData = await getHadithList(numberOfPage);
      setHadithList((prevData) => [...prevData, ...newData]);
      setNumberOfPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // number of pages of the sahih-bukhari is 302
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight &&
      numberOfPage <= 302
    ) {
      fetchData();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //init data load
  useEffect(() => {
    const initData = async () => {
      const res = await getHadithList(1);
      console.log(res);
      setHadithList(() => [...res]);
    };
    initData();
  }, []);

  return (
    <div className="relative">
      <Accordion collapsible type="single" className="pb-6">
        {hadithList.map((hadith: HadithItem) => (
          <AccordionItem key={hadith.id} value={hadith.id.toString()}>
            <AccordionTrigger className="text-2xl">
              {hadith.headingArabic}
              {`${hadith.headingArabic ? ". " : " "} `}
              {`حديث ${
                hadith.status === "Sahih"
                  ? "صحيح"
                  : hadith.status === "Hasan"
                  ? "حسن"
                  : "ضعيف"
              } رقم ${hadith.hadithNumber} مجلد رقم ${parseInt(
                hadith.volume
              ).toLocaleString("ar")} (${hadith.chapter.chapterArabic}) `}
            </AccordionTrigger>
            <AccordionContent className="text-2xl pr-5 md:pr-10 xl:pr-20 text-neutral-950">
              {hadith.hadithArabic}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      {isLoading && numberOfPage <= 302 && (
        <BeatLoader
          className="absolute  bottom-4 right-1/2 -translate-x-1/2"
          color="#36d7b7"
          size={25}
          margin={10}
        />
      )}
    </div>
  );
}
