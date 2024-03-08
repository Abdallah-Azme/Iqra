import { nameOfSheikhs } from "@/data";

type ButtonAudioGroupProps = {
  setCurrentShakih: React.Dispatch<React.SetStateAction<string>>;
};

export default function ButtonAudioGroup({
  setCurrentShakih,
}: ButtonAudioGroupProps) {
  const audioGroup = nameOfSheikhs.map((nameOfSheikh, i) => (
    <button
      onClick={() => setCurrentShakih(nameOfSheikh.identifier)}
      className="mx-1 p-1 my-1 text-[12px] w-auto bg-white/30 rounded-xl  text-white"
      color="success"
      key={i}
    >
      {nameOfSheikh.arabicName || nameOfSheikh.name}
    </button>
  ));
  return <div>{audioGroup}</div>;
}
