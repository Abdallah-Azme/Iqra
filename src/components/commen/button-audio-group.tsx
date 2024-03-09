import { nameOfSheikhs } from "@/data";
import { cn } from "@/lib/utils";

type ButtonAudioGroupProps = {
  setCurrentShakih: React.Dispatch<React.SetStateAction<string>>;
  currentShakih: string;
};

export default function ButtonAudioGroup({
  setCurrentShakih,
  currentShakih,
}: ButtonAudioGroupProps) {
  const audioGroup = nameOfSheikhs.map((nameOfSheikh, i) => (
    <button
      onClick={() => setCurrentShakih(nameOfSheikh.identifier)}
      className={cn(
        "mx-1 p-[6px] my-1 text-[12px] w-auto bg-white/30 rounded-xl  text-white ",
        currentShakih === nameOfSheikh.identifier && "bg-sky-800"
      )}
      color="success"
      key={i}
    >
      {nameOfSheikh.arabicName || nameOfSheikh.name}
    </button>
  ));
  return <div>{audioGroup}</div>;
}
