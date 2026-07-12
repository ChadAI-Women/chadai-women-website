import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    date: "20 Déc 2024",
    readTime: "5 min",
    title: "Lancement Officiel de ChadAI Women",
    excerpt:
      "Retour sur la soirée de lancement et les moments forts de la présentation officielle...",
  },
  {
    date: "15 Déc 2024",
    readTime: "7 min",
    title: "Pourquoi les Femmes Doivent Investir l'IA",
    excerpt:
      "L'importance de la diversité dans le développement des technologies d'intelligence artificielle...",
  },
  {
    date: "10 Déc 2024",
    readTime: "10 min",
    title: "Calendrier des Activités 2026",
    excerpt:
      "Découvrez le programme complet de nos webinaires et ateliers pour l'année 2026...",
  },
];

export const BlogSection = () => {
  return (
    <section id="blog" className="py-20 bg-card">
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
            Blog & Actualités
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Derniers Articles
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Restez informée des dernières actualités de la communauté et du monde
            de la tech
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-background rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-elevated group"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Calendar className="w-16 h-16 text-primary-foreground/50" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                  {post.title}
                </h3>

                <p className="text-muted-foreground mb-4">{post.excerpt}</p>

                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-secondary font-semibold hover:gap-2.5 transition-all"
                >
                  Lire l'article
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
