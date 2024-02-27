import { getRandomAyah } from "@/actions";
import Hero from "@/components/commen/hero";
import { randomPageNumber } from "@/utils/random-page";

export default async function Home() {
  const pageNumber = randomPageNumber();
  const data = await getRandomAyah(pageNumber);
  const ayat = data.verses;
  console.log(ayat);
  return (
    <>
      <Hero ayat={ayat} />
    </>
  );
}
