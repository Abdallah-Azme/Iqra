import { getSurahText } from "@/actions";
import Container from "@/components/commen/Container";
import HeroAudioCard from "@/components/commen/hero-audio-card";
import { AyahText } from "@/types";

type SouraPageProps = {
  params: {
    souraId: string;
  };
  searchParams: { soura: string };
};

export default async function SouraPage({
  params,
  searchParams,
}: SouraPageProps) {
  const souraId = parseInt(params.souraId);
  const souraName = searchParams.soura;

  //get surah text
  const res = await getSurahText(souraId);
  const surahArray: AyahText[] = res.data.ayahs;

  const souraText = surahArray.reduce(
    (acc, ayah) =>
      `${acc} ${ayah.text} - ${ayah.numberInSurah.toLocaleString("ar")} - `,
    " "
  );

  return (
    <div className="bg-gradient-radial from-[#2C5364] via-[#203A43] to-[#12262c]">
      <Container className="pt-10">
        <HeroAudioCard souraId={souraId} souraName={souraName} />
        <div className="text-white text-center text-lg mt-10">
          <p className="">{souraText}</p>
        </div>
      </Container>
    </div>
  );
}
