import { motion } from "framer-motion";
import { BookOpen, Users, Award, Calendar } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";

// ----------------------------------------------------------------------------
// Notre Histoire — page d'archives institutionnelle.
// Cette page est prête mais non encore liée dans la navigation publique.
// Accessible via la route /histoire pour publication future.
// ----------------------------------------------------------------------------

type Person = { name: string; role: string; period?: string };

const cofondatrices: Person[] = [
  { name: "Prénom Nom", role: "Cofondatrice" },
  { name: "Prénom Nom", role: "Cofondatrice" },
  { name: "Prénom Nom", role: "Cofondatrice" },
  { name: "Prénom Nom", role: "Cofondatrice" },
];

const bureauxPrecedents: { mandate: string; members: Person[] }[] = [
  // Exemple — à compléter au fil des mandats.
  // { mandate: "2025 — 2026", members: [...] },
];

const responsablesPrecedents: Person[] = [];

const realisations: { year: string; title: string; description: string }[] = [
  // Exemples — à compléter.
  // { year: "2026", title: "Lancement officiel", description: "..." },
];

const Section = ({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof BookOpen;
  title: string;
  children: React.ReactNode;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="border-l-4 border-secondary pl-6"
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
        <Icon className="w-5 h-5 text-secondary" />
      </div>
      <h2 className="font-display text-2xl md:text-3xl font-bold text-primary">
        {title}
      </h2>
    </div>
    {children}
  </motion.div>
);

const PersonCard = ({ p }: { p: Person }) => (
  <div className="bg-background rounded-xl p-4 border border-border">
    <div className="font-display font-bold text-primary">{p.name}</div>
    <div className="text-sm text-secondary font-semibold">{p.role}</div>
    {p.period && (
      <div className="text-xs text-muted-foreground mt-1">{p.period}</div>
    )}
  </div>
);

const History = () => {
  return (
    <>
      <PageHeader
        eyebrow="Notre Histoire"
        title="L'histoire de ChadAI Women"
        description="Cofondatrices, bureaux exécutifs précédents, responsables et grandes réalisations qui ont façonné notre communauté."
      />

      <section className="py-20 bg-card">
        <div className="section-container max-w-4xl space-y-14">
          <Section icon={Users} title="Cofondatrices">
            <div className="grid sm:grid-cols-2 gap-4">
              {cofondatrices.map((p, i) => (
                <PersonCard key={i} p={p} />
              ))}
            </div>
          </Section>

          <Section icon={Award} title="Bureaux Exécutifs précédents">
            {bureauxPrecedents.length === 0 ? (
              <p className="text-muted-foreground italic">
                Les mandats passés seront archivés ici au fil du temps.
              </p>
            ) : (
              <div className="space-y-8">
                {bureauxPrecedents.map((b) => (
                  <div key={b.mandate}>
                    <h3 className="font-display font-bold text-primary mb-3">
                      Mandat {b.mandate}
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {b.members.map((p, i) => (
                        <PersonCard key={i} p={p} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Section>

          <Section icon={Users} title="Responsables précédents">
            {responsablesPrecedents.length === 0 ? (
              <p className="text-muted-foreground italic">
                Les responsables des mandats précédents apparaîtront ici.
              </p>
            ) : (
              <div className="grid sm:grid-cols-2 gap-4">
                {responsablesPrecedents.map((p, i) => (
                  <PersonCard key={i} p={p} />
                ))}
              </div>
            )}
          </Section>

          <Section icon={Calendar} title="Grandes réalisations">
            {realisations.length === 0 ? (
              <p className="text-muted-foreground italic">
                Les jalons et grandes réalisations seront documentés ici.
              </p>
            ) : (
              <ol className="relative border-l-2 border-secondary/30 space-y-6 pl-6">
                {realisations.map((r, i) => (
                  <li key={i}>
                    <span className="absolute -left-[7px] w-3 h-3 rounded-full bg-secondary" />
                    <div className="text-xs font-semibold text-secondary uppercase tracking-wider">
                      {r.year}
                    </div>
                    <div className="font-display font-bold text-primary">
                      {r.title}
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {r.description}
                    </p>
                  </li>
                ))}
              </ol>
            )}
          </Section>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default History;