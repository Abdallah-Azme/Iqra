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
      <div className="bg-radial-gradient text-center pt-2">
        <h3
          id="quran"
          className="text-4xl text-white my-5 inline-flex rounded-3xl p-5 tracking-wider leading-10 bg-slate-500/60"
        >
          القراءن الكريم
        </h3>
        <SourCardContainer sour={sour} />
      </div>
    </>
  );
}
