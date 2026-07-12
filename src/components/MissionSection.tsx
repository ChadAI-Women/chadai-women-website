import { motion } from "framer-motion";
import { BookOpen, Sparkles, Rocket } from "lucide-react";

const missions = [
  {
    icon: BookOpen,
    title: "Former",
    description:
      "Des formations pratiques et accessibles en IA, Data Science, Machine Learning et développement. Du niveau débutant à avancé, nous vous accompagnons à chaque étape de votre parcours d'apprentissage.",
  },
  {
    icon: Sparkles,
    title: "Inspirer",
    description:
      "Des modèles féminins, des success stories et des rencontres avec des femmes leaders qui prouvent que c'est possible. Vous n'êtes plus seules dans votre parcours tech.",
  },
  {
    icon: Rocket,
    title: "Accompagner",
    description:
      "Du mentorat personnalisé et l'accompagnement dans le développement de projets concrets à impact social qui répondent aux défis de notre société tchadienne.",
  },
];

export const MissionSection = () => {
  return (
    <section id="mission" className="py-20 bg-card">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-secondary font-semibold uppercase tracking-widest text-sm mb-4">
            Notre Mission
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Inspirer, Former, Connecter, Autonomiser
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nous créons un écosystème où chaque femme tchadienne peut développer
            ses compétences en IA et contribuer à l'innovation technologique
          </p>
        </motion.div>

        {/* Mission Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <motion.div
              key={mission.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative bg-background rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-elevated overflow-hidden"
            >
              {/* Left accent bar */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-secondary transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

              <div className="w-20 h-20 rounded-2xl gradient-accent flex items-center justify-center mb-6">
                <mission.icon className="w-10 h-10 text-accent-foreground" />
              </div>

              <h3 className="font-display text-2xl font-bold text-primary mb-4">
                {mission.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {mission.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
