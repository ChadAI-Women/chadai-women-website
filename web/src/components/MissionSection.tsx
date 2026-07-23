import { motion } from "framer-motion";
import { FlagDash } from "@/components/FlagDash";

const missions = [
  {
    title: "Former",
    description:
      "Des formations pratiques en IA, Data Science et développement, du niveau débutant aux premiers projets concrets.",
  },
  {
    title: "Inspirer",
    description:
      "Des modèles féminins, des parcours visibles et des rencontres qui donnent confiance pour entrer dans la tech.",
  },
  {
    title: "Accompagner",
    description:
      "Du mentorat et un appui projet pour transformer les idées en solutions utiles aux communautés tchadiennes.",
  },
];

export const MissionSection = () => {
  return (
    <section id="mission" className="py-20 bg-card overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-secondary-ink font-semibold uppercase tracking-widest text-sm mb-4">
            Notre Mission
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Inspirer, Former, Connecter, Autonomiser
          </h2>
          <FlagDash className="mb-5" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nous créons un écosystème où chaque femme tchadienne peut développer
            ses compétences en IA et contribuer à l'innovation technologique.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-7 lg:items-start lg:pt-8 lg:pb-12">
          {missions.map((mission, index) => (
            <div
              key={mission.title}
              className={[
                "mission-card group relative overflow-hidden rounded-[1.75rem] p-8 md:p-10 shadow-soft transition-all duration-300 hover:shadow-elevated flex flex-col justify-between",
                index === 0 &&
                  "mission-card-1 bg-primary text-primary-foreground",
                index === 1 &&
                  "mission-card-2 bg-secondary text-secondary-foreground",
                index === 2 &&
                  "mission-card-3 bg-background text-foreground border border-primary/10",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <h3 className="font-display text-2xl md:text-3xl font-bold">
                {mission.title}
              </h3>

              <p
                className={[
                  "max-w-[30ch] leading-relaxed text-base md:text-[17px]",
                  index === 0 && "text-primary-foreground/85",
                  index === 1 && "text-secondary-foreground/85",
                  index === 2 && "text-muted-foreground",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {mission.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
