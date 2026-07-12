import { EventsSection } from "@/components/EventsSection";
import { PageHeader } from "@/components/PageHeader";

const Events = () => {
  return (
    <>
      <PageHeader
        eyebrow="Événements"
        title="Nos Prochains Rendez-vous"
        description="Rejoignez-nous pour nos webinaires, ateliers et rencontres communautaires."
      />
      <EventsSection />
    </>
  );
};

export default Events;
