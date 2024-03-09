import Container from "@/components/commen/Container";
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
    <div className="bg-radial-gradient">
      <Container className="pt-2">
        <HeroAudioCard
          id="audio-player"
          souraId={souraId}
          souraName={souraName}
        />
        <div className="py-5" id="soura-text">
          <SouraText
            id="soura-text"
            headingText={souraName}
            souraId={souraId}
          />
        </div>
        {/* <TafserText id="tafser-text" souraId={souraId} souraName={souraName} /> */}
      </Container>
    </div>
  );
}
