import { getRandomAyah } from "@/actions";
import Hero from "@/components/commen/hero";
import { randomPageNumber } from "@/utils/random-page";

export default async function Home() {
  const data = await getRandomAyah(randomPageNumber());
  const ayat = data.verses;
  console.log(ayat);
  return (
    <>
      <Hero ayat={ayat} />
    </>
  );
}
