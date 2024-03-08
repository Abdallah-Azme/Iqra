import Container from "@/components/commen/Container";
import NavLinks from "@/components/commen/nav-links";
import dynamic from "next/dynamic";

const TafserText = dynamic(
  () => import("@/components/soura-page/tafser-text"),
  {
    ssr: false,
  }
);
const SouraText = dynamic(() => import("@/components/soura-page/soura-text"), {
  ssr: false,
});

const HeroAudioCard = dynamic(
  () => import("@/components/commen/hero-audio-card"),
  {
    ssr: false,
  }
);

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

  return (
    <div className="bg-gradient-radial from-[#2C5364] via-[#203A43] to-[#12262c]">
      <Container className="pt-10">
        {/* <NavLinks souraName={souraName} /> */}

        <HeroAudioCard
          id="audio-player"
          souraId={souraId}
          souraName={souraName}
        />
        <div id="soura-text">
          <SouraText
            id="soura-text"
            headingText={souraName}
            souraId={souraId}
          />
        </div>
        <TafserText id="tafser-text" souraId={souraId} souraName={souraName} />
      </Container>
    </div>
  );
}
