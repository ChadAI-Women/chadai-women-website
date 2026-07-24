import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Users, Calendar, BookOpen, Newspaper, Mail, Image, Briefcase } from "lucide-react";

const previews = [
  { to: "/mission", icon: Target, title: "Notre Mission", description: "Inspirer, former, connecter et autonomiser les femmes tchadiennes en IA." },
  { to: "/equipe", icon: Users, title: "Leadership", description: "Rencontrez l'équipe qui porte la communauté ChadAI Women." },
  { to: "/programmes", icon: BookOpen, title: "Programmes", description: "Webinaires, ateliers, mentorat et hackathons pour vous faire progresser." },
  { to: "/evenements", icon: Calendar, title: "Événements", description: "Découvrez nos prochains rendez-vous et inscrivez-vous." },
  { to: "/galerie", icon: Image, title: "Galerie", description: "Revivez nos meilleurs moments en photos." },
  { to: "/joboard", icon: Briefcase, title: "Opportunités", description: "Opportunités tech pour les femmes tchadiennes." },
  { to: "/blog", icon: Newspaper, title: "Blog", description: "Articles, actualités et histoires inspirantes du monde de l'IA." },
  { to: "/contact", icon: Mail, title: "Contact", description: "Une question, un projet, une envie de collaborer ? Écrivez-nous." },
];

export const HomePreviewSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-secondary-ink font-semibold uppercase tracking-widest text-sm mb-4">
            Explorer
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Découvrez ChadAI Women
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Plongez dans nos différentes pages pour tout savoir sur notre communauté.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previews.map((preview, index) => (
            <motion.div
              key={preview.to}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -15% 0px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link
                to={preview.to}
                className="group block bg-background rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-all hover:-translate-y-1 h-full"
              >
                <div className="w-14 h-14 rounded-2xl gradient-accent flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                  <preview.icon className="w-7 h-7 text-accent-foreground transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary mb-2">
                  {preview.title}
                </h3>
                <p className="text-muted-foreground mb-4">{preview.description}</p>
                <span className="inline-flex items-center gap-2 text-secondary-ink font-semibold group-hover:gap-3 transition-all">
                  En savoir plus
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
