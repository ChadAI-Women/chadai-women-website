import { TeamSection } from "@/components/TeamSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PageHeader } from "@/components/PageHeader";

const Team = () => {
  return (
    <>
      <PageHeader
        eyebrow="Notre Équipe"
        title="Rencontrez Notre Équipe"
        description="Découvrez les visages derrière ChadAI Women — Core Team, responsables de comités et mentors qui font vivre la communauté au quotidien."
      />
      <TeamSection />
      <TestimonialsSection />
    </>
  );
};

export default Team;
