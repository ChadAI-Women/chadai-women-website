import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Grâce à ChadAI Women, j'ai découvert ma passion pour la Data Science. Aujourd'hui, je travaille sur des projets qui ont un impact réel au Tchad. Je ne serais jamais arrivée là sans cette communauté.",
    name: "Amina K.",
    role: "Data Analyst, N'Djamena",
    initial: "A",
  },
  {
    text: "En tant que membre de la diaspora, ChadAI Women m'a permis de rester connectée à mon pays et de contribuer à former la prochaine génération de femmes tech tchadiennes. C'est incroyable !",
    name: "Fatima M.",
    role: "ML Engineer, Paris",
    initial: "F",
  },
  {
    text: "J'avais zéro connaissance en programmation. Six mois plus tard, j'ai créé mon premier chatbot ! Le mentorat et le soutien de la communauté ont été déterminants dans ma transformation.",
    name: "Sarah D.",
    role: "Étudiante en Informatique",
    initial: "S",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-card">
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
            Témoignages
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Ce Que Disent Nos Membres
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Des parcours inspirants de femmes qui ont rejoint la communauté
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative bg-background rounded-3xl p-8"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 left-6 w-12 h-12 text-secondary/20" />

              <p className="relative z-10 text-muted-foreground italic leading-relaxed mb-6 pt-8">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="text-xl text-primary-foreground font-bold">
                    {testimonial.initial}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-primary">{testimonial.name}</h4>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
