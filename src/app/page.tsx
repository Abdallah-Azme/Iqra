import { getAllSourName, getRandomPage } from "@/actions";

import Hero from "@/components/commen/hero";
import SourCardContainer from "@/components/souar/soura-card-container";
import { Soura } from "@/types";
import { randomPageNumber } from "@/utils";

export default async function Home() {
  const res = await getAllSourName();
  const sour: Soura[] = res.data;
  const randomPage = randomPageNumber();

  const data = await getRandomPage(randomPage);
  const ayat = data.verses;
  return (
    <>
      <Hero ayat={ayat} randomPage={randomPage} />
      <div className="bg-gradient-radial from-[#2C5364] via-[#203A43] text-center to-[#0F2027]">
        <h3 className="text-center text-white md:inline-flex md:px-10 text-3xl md:rounded-3xl mt-5 bg-gradient-to-l from-slate-800 to-slate-950 p-5">
          القراءن الكريم
        </h3>
        <SourCardContainer sour={sour} />
      </div>
    </>
  );
}
