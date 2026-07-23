import { motion } from "framer-motion";
import { Monitor, Target, Users, Trophy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const programs = [
  {
    icon: Monitor,
    title: "Webinaires Bi-hebdomadaires",
    description:
      "Chaque 2ème et 4ème samedi du mois, rejoignez-nous pour des sessions de 2 heures mêlant théorie et pratique.",
    features: [
      "Introduction à l'IA et au Machine Learning",
      "Data Science et analyse de données",
      "Computer Vision et traitement d'images",
      "Développement de chatbots et LLMs",
      "IA appliquée aux défis africains",
    ],
    cta: "Voir le calendrier",
    to: "/evenements",
  },
  {
    icon: Target,
    title: "Ateliers Pratiques",
    description:
      "Des sessions hands-on pour développer vos compétences techniques à travers des projets concrets.",
    features: [
      "Coding sessions en Python",
      "Projets Data Science sur Google Colab",
      "Création de modèles ML",
      "Déploiement d'applications IA",
      "Développement de portfolios tech",
    ],
    cta: "S'inscrire",
    to: "/contact",
  },
  {
    icon: Users,
    title: "Mentorat & Networking",
    description:
      "Connectez-vous avec des mentors expérimentés et construisez votre réseau professionnel.",
    features: [
      "Mentorat one-on-one",
      "Groupes d'étude collaboratifs",
      "Networking avec des professionnelles",
      "Accompagnement de projets",
      "Préparation aux entretiens tech",
    ],
    cta: "Trouver un mentor",
    to: "/contact",
  },
  {
    icon: Trophy,
    title: "Hackathons & Compétitions",
    description:
      "Participez à des défis techniques pour renforcer vos compétences et créer des solutions innovantes.",
    features: [
      "Hackathons mensuels",
      "Défis de programmation",
      "Projets à impact social",
      "Compétitions de Data Science",
      "Showcases de projets",
    ],
    cta: "Participer",
    to: "/contact",
  },
];

export const ProgramsSection = () => {
  const navigate = useNavigate();
  return (
    <section id="programmes" className="py-20 bg-gradient-to-b from-background to-card">
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
            Nos Programmes
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Des Activités Variées pour Toutes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Webinaires, ateliers pratiques, mentorat, hackathons... Découvrez nos
            programmes conçus pour votre réussite
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-3xl overflow-hidden shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-elevated"
            >
              {/* Icon Header */}
              <div className="h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <program.icon className="w-20 h-20 text-primary-foreground" />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="font-display text-2xl font-bold text-primary mb-4">
                  {program.title}
                </h3>

                <p className="text-muted-foreground mb-6">{program.description}</p>

                <ul className="space-y-3 mb-6">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="gradient-accent text-accent-foreground rounded-full font-semibold hover:shadow-glow transition-all"
                  onClick={() => navigate(program.to)}
                >
                  {program.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
