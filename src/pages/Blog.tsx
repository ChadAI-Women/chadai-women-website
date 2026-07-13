import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { FlagDash } from "@/components/FlagDash";
import { PageHeader } from "@/components/PageHeader";
import { cn } from "@/lib/utils";

const categories = [
  "Tous",
  "Actualités ChadAI Women",
  "Femmes tchadiennes en IA",
  "Intelligence Artificielle",
  "Ressources & Tutoriels",
  "Événements",
  "Opportunités",
] as const;

type Category = (typeof categories)[number];

type Post = {
  category: Exclude<Category, "Tous">;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
};

const posts: Post[] = [
  {
    category: "Actualités ChadAI Women",
    date: "20 Déc 2024",
    readTime: "5 min",
    title: "Lancement officiel de ChadAI Women",
    excerpt:
      "Retour sur la soirée de lancement, les temps forts de la présentation et les premières ambitions de la communauté.",
  },
  {
    category: "Femmes tchadiennes en IA",
    date: "12 Jan 2026",
    readTime: "6 min",
    title: "Portrait : une chercheuse tchadienne au cœur du Machine Learning",
    excerpt:
      "Premier épisode de notre série « Femmes tchadiennes en IA » : parcours, défis et conseils d'une chercheuse inspirante.",
  },
  {
    category: "Intelligence Artificielle",
    date: "15 Déc 2024",
    readTime: "7 min",
    title: "Pourquoi les femmes doivent investir l'IA",
    excerpt:
      "L'importance de la diversité dans le développement des technologies d'intelligence artificielle au Tchad et en Afrique.",
  },
  {
    category: "Ressources & Tutoriels",
    date: "05 Fév 2026",
    readTime: "10 min",
    title: "Débuter en Python pour la Data Science",
    excerpt:
      "Guide pas-à-pas pour installer votre environnement, écrire vos premiers scripts et manipuler des données.",
  },
  {
    category: "Événements",
    date: "10 Déc 2024",
    readTime: "4 min",
    title: "Calendrier des activités 2026",
    excerpt:
      "Découvrez le programme complet de nos webinaires, meetups et ateliers pour l'année à venir.",
  },
  {
    category: "Opportunités",
    date: "01 Mars 2026",
    readTime: "3 min",
    title: "Bourses et programmes ouverts aux femmes africaines en IA",
    excerpt:
      "Une sélection d'appels à candidatures, bourses et fellowships à ne pas manquer ce trimestre.",
  },
];

const Blog = () => {
  const [active, setActive] = useState<Category>("Tous");
  const filtered = active === "Tous" ? posts : posts.filter((p) => p.category === active);

  return (
    <>
      <PageHeader
        eyebrow="Blog & Actualités"
        title="Actualités, Histoires & Opportunités"
        description="Suivez les activités de ChadAI Women, découvrez les parcours inspirants des femmes tchadiennes dans l'IA et restez informée des dernières opportunités en intelligence artificielle et en technologie."
      />

      <section className="py-20 bg-card">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 max-w-2xl mx-auto"
          >
            <span className="inline-flex items-center gap-3 text-secondary font-semibold uppercase tracking-widest text-xs mb-4">
              <FlagDash size="sm" />
              Média communautaire
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-5">
              Nos Dernières Publications
            </h2>
            <p className="text-muted-foreground text-lg">
              Retrouvez nos actualités, comptes rendus d'événements, portraits de
              femmes inspirantes, ressources éducatives et analyses autour de
              l'intelligence artificielle.
            </p>
          </motion.div>

          {/* Category chips */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-semibold border transition-all",
                  active === cat
                    ? "bg-primary text-primary-foreground border-primary shadow-md"
                    : "border-primary/15 text-primary hover:bg-primary/5"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-background rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-elevated group flex flex-col"
              >
                <div className="h-44 bg-gradient-to-br from-primary to-secondary flex items-center justify-center relative">
                  <Calendar className="w-14 h-14 text-primary-foreground/40" />
                  <span className="absolute top-4 left-4 bg-background/95 text-primary text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-5 flex-1 text-[15px]">
                    {post.excerpt}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-secondary font-semibold hover:gap-2.5 transition-all text-sm"
                  >
                    Lire l'article
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground mt-12">
              Aucune publication pour cette catégorie pour le moment.
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;
