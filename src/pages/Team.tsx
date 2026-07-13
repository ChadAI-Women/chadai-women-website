import { TeamSection } from "@/components/TeamSection";
import { PageHeader } from "@/components/PageHeader";

const Team = () => {
  return (
    <>
      <PageHeader
        eyebrow="Notre Équipe"
        title="Rencontrez Notre Équipe"
        description="Découvrez les visages derrière ChadAI Women — Bureau Exécutif, responsables de comités et mentores qui font vivre la communauté au quotidien."
      />
      <TeamSection />
    </>
  );
};

export default Team;
