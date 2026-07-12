import { motion } from "framer-motion";
import { Clock, Globe, ArrowRight } from "lucide-react";

const events = [
  {
    day: "10",
    month: "Jan",
    title: "Introduction à l'Intelligence Artificielle",
    time: "10h-12h GMT",
    location: "En ligne",
    description:
      "Premier webinaire inaugural de ChadAI Women. Découvrez les concepts fondamentaux de l'IA et faites vos premiers pas en Python.",
  },
  {
    day: "24",
    month: "Jan",
    title: "Atelier Python pour Débutantes",
    time: "10h-12h GMT",
    location: "En ligne",
    description:
      "Atelier pratique de programmation Python. Créez votre premier script et explorez les bibliothèques essentielles.",
  },
  {
    day: "14",
    month: "Fév",
    title: "Data Science : Outils et Projets",
    time: "10h-12h GMT",
    location: "En ligne",
    description:
      "Découvrez le cycle de vie d'un projet Data Science et les outils du Data Scientist moderne.",
  },
  {
    day: "28",
    month: "Fév",
    title: "Atelier Pandas & Visualisation",
    time: "10h-12h GMT",
    location: "En ligne",
    description:
      "Apprenez à nettoyer et visualiser des données avec Pandas, Matplotlib et Seaborn.",
  },
];

export const EventsSection = () => {
  return (
    <section id="evenements" className="py-20 bg-background">
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
            Événements à Venir
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Ne Manquez Pas Nos Prochains Événements
          </h2>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl overflow-hidden flex transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
            >
              {/* Date */}
              <div className="gradient-accent text-center p-6 min-w-[120px] flex flex-col justify-center">
                <span className="font-display text-4xl font-bold text-accent-foreground">
                  {event.day}
                </span>
                <span className="text-accent-foreground/90 font-semibold uppercase">
                  {event.month}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex-1">
                <h3 className="font-display text-xl font-bold text-primary mb-3">
                  {event.title}
                </h3>

                <div className="flex flex-wrap gap-4 mb-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {event.time}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Globe className="w-4 h-4" />
                    {event.location}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm mb-4">
                  {event.description}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-secondary font-semibold hover:gap-2.5 transition-all"
                >
                  S'inscrire
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
