import { motion } from "framer-motion";
import { BookOpen, Video, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const resources = [
  {
    icon: BookOpen,
    title: "Guides & Tutoriels",
    description:
      "Des guides pas-à-pas pour apprendre Python, Data Science, ML et bien plus.",
    cta: "Accéder",
  },
  {
    icon: Video,
    title: "Replay des Webinaires",
    description: "Accédez à tous les enregistrements de nos webinaires passés.",
    cta: "Voir",
  },
  {
    icon: Briefcase,
    title: "Opportunités d'Emploi",
    description:
      "Job board avec des offres tech pour les femmes tchadiennes.",
    cta: "Explorer",
  },
];

export const ResourcesSection = () => {
  return (
    <section id="ressources-gratuites" className="py-20 bg-card scroll-mt-24">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-secondary-ink font-semibold uppercase tracking-widest text-sm mb-4">
            Ressources
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Outils Pour Votre Apprentissage
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Des ressources gratuites pour vous aider à progresser dans votre
            parcours tech
          </p>
        </motion.div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-background rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-elevated"
            >
              <div className="w-24 h-24 mx-auto rounded-full gradient-accent flex items-center justify-center mb-6">
                <resource.icon className="w-12 h-12 text-accent-foreground" />
              </div>

              <h3 className="font-display text-xl font-bold text-primary mb-4">
                {resource.title}
              </h3>

              <p className="text-muted-foreground mb-6">{resource.description}</p>

              <Button className="gradient-accent text-accent-foreground rounded-full font-semibold hover:shadow-glow transition-all group">
                {resource.cta}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
