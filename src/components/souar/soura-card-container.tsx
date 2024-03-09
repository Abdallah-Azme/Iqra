import { AyahAudio, Soura } from "@/types";
import SouraCard from "./soura-card";
import { getSurahAudio } from "@/actions";

type SouraCardProps = {
  sour: Soura[];
};

export default async function SourCardContainer({ sour }: SouraCardProps) {
  const allSour = sour.map((soura) => (
    <SouraCard soura={soura} key={soura.number} />
  ));
  return (
    <div className="grid space-x-4 space-y-4 mt-10 items-center grid-cols-16 gap-4 justify-center container mx-auto px-2.5 md:px-20">
      {allSour}
    </div>
  );
}
