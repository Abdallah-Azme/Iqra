import { Soura } from "@/types";
import { PlayCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type SouraCardProps = {
  soura: Soura;
};

export default async function SouraCard({ soura }: SouraCardProps) {
  return (
    <div className="col-span-5 lg:col-span-3 xl:col-span-2 flex group">
      <Link
        href={`/quran/${soura.number}?soura=${soura.name}`}
        className=" justify-center items-center"
      >
        <div className="text-md text-center md:text-3xl">
          <div className="relative group-hover:scale-105 transition ">
            <Image
              src="/quran-photo-1.jpg"
              alt="Quran photo"
              width={150}
              height={150}
              className=" "
            />
            <div className="absolute rounded-2xl inset-0 bg-gradient-to-t from-gray-800 opacity-40 group-hover:opacity-85 to-stone-900"></div>
            <PlayCircle
              className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10 text-white/70"
              size={60}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white">
                <h3 className="text-md lg:text-2xl">{soura.name}</h3>
                <h5 className="text-sm ">
                  {soura.revelationType === "Meccan"
                    ? " سورة مكية"
                    : "سورة مدنية"}
                </h5>
                <h5 className="text-sm">
                  {soura.numberOfAyahs.toLocaleString("ar")}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
