import { ResourcesSection } from "@/components/ResourcesSection";
import { FAQSection } from "@/components/FAQSection";
import { PageHeader } from "@/components/PageHeader";

const Resources = () => {
  return (
    <>
      <PageHeader
        eyebrow="Ressources"
        title="Apprenez et Progressez"
        description="Tutoriels, guides, replay de webinaires et outils pour développer vos compétences en IA."
      />
      <ResourcesSection />
      <FAQSection />
    </>
  );
};

export default Resources;
