import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  Lightbulb,
  Megaphone,
  Newspaper,
  Sparkles,
  Trophy,
  UserRound,
} from "lucide-react";
import { FlagDash } from "@/components/FlagDash";
import { PageHeader } from "@/components/PageHeader";
import { cn } from "@/lib/utils";
import { blogPosts, type BlogCategory, type BlogPost } from "@/data/blogPosts";
import { Link } from "react-router-dom";
import { useStrapiArticles } from "@/hooks/useStrapiArticles";

const categoryMeta: Record<
  BlogCategory,
  { label: string; description: string; Icon: typeof Newspaper }
> = {
  "Actualités ChadAI Women": {
    label: "Actualités ChadAI Women",
    description: "Vie de la communauté, annonces et coulisses.",
    Icon: Megaphone,
  },
  "Femmes tchadiennes en IA": {
    label: "Femmes tchadiennes en IA",
    description: "Portraits, interviews et trajectoires inspirantes.",
    Icon: UserRound,
  },
  "Intelligence Artificielle": {
    label: "Intelligence Artificielle",
    description: "Analyses simples pour comprendre les enjeux de l'IA.",
    Icon: Lightbulb,
  },
  "Ressources & Tutoriels": {
    label: "Ressources & Tutoriels",
    description: "Guides pratiques, apprentissage et outils.",
    Icon: BookOpen,
  },
  "Événements": {
    label: "Événements",
    description: "Comptes rendus, annonces et rencontres.",
    Icon: Calendar,
  },
  "Opportunités": {
    label: "Opportunités",
    description: "Bourses, appels, programmes et candidatures.",
    Icon: Trophy,
  },
};

const categories = ["Tous", ...Object.keys(categoryMeta)] as const;
type ActiveCategory = (typeof categories)[number];

const ArticleMeta = ({ post }: { post: BlogPost }) => (
  <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
    <span className="flex items-center gap-1.5">
      <Calendar className="h-3.5 w-3.5" />
      {post.date}
    </span>
    <span className="flex items-center gap-1.5">
      <Clock className="h-3.5 w-3.5" />
      {post.readTime}
    </span>
  </div>
);

const CategoryBadge = ({ category }: { category: BlogCategory }) => {
  const Icon = categoryMeta[category].Icon;

  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
      <Icon className="h-3.5 w-3.5 text-secondary" />
      {categoryMeta[category].label}
    </span>
  );
};

const Blog = () => {
  const [active, setActive] = useState<ActiveCategory>("Tous");
  const posts = useStrapiArticles(blogPosts);

  const filtered = useMemo(
    () =>
      active === "Tous"
        ? posts
        : posts.filter((post) => post.category === active),
    [active, posts]
  );
  const featured = filtered.find((post) => post.featured) ?? filtered[0];
  const articles = featured
    ? filtered.filter((post) => post.title !== featured.title)
    : filtered;

  return (
    <>
      <PageHeader
        eyebrow="Blog & Actualités"
        title="Histoires, ressources et opportunités"
        description="Un espace éditorial pour suivre ChadAI Women, découvrir les femmes tchadiennes qui font avancer l'IA et trouver des ressources utiles pour progresser."
      />

      <section className="bg-card py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
          >
            <div>
              <span className="mb-3 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-secondary-ink">
                <FlagDash size="sm" />
                Média communautaire
              </span>
              <h2 className="font-display text-3xl font-bold leading-tight text-primary md:text-5xl">
                Une ligne éditoriale claire, utile et inspirante
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Le blog rassemble actualités, portraits, tutoriels et opportunités
              pour informer la communauté et rendre visibles les parcours de femmes
              tchadiennes dans l'intelligence artificielle.
            </p>
          </motion.div>

          <div className="mb-10 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActive(category)}
                className={cn(
                  "rounded-full border px-5 py-2.5 text-sm font-semibold transition-all",
                  active === category
                    ? "border-primary bg-primary text-primary-foreground shadow-md"
                    : "border-primary/15 text-primary hover:bg-primary/5"
                )}
              >
                {category === "Tous" ? "Tous" : categoryMeta[category].label}
              </button>
            ))}
          </div>

          {featured && (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="mb-12 grid overflow-hidden rounded-3xl border border-primary/10 bg-background shadow-elevated lg:grid-cols-[1.05fr_0.95fr]"
            >
              <div className="relative min-h-[320px] bg-primary p-8 text-primary-foreground md:p-10">
                <div className="absolute inset-0 bg-weave opacity-10" />
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em]">
                      <Sparkles className="h-4 w-4" />
                      À la une
                    </span>
                    <h3 className="mt-8 max-w-xl font-display text-3xl font-bold leading-tight md:text-5xl">
                      {featured.title}
                    </h3>
                  </div>
                  <ArticleMeta post={featured} />
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 md:p-10">
                <CategoryBadge category={featured.category} />
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  {featured.excerpt}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-bold text-secondary-foreground">
                    Article bientôt disponible
                    <ArrowRight className="h-4 w-4" />
                  </span>
                  <Link
                    to="/contact"
                    className="text-sm font-semibold text-primary hover:text-secondary"
                  >
                    Proposer un portrait
                  </Link>
                </div>
              </div>
            </motion.article>
          )}

          <div className="mb-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {(Object.keys(categoryMeta) as BlogCategory[]).map((category) => {
              const meta = categoryMeta[category];
              const Icon = meta.Icon;

              return (
                <div
                  key={category}
                  className="rounded-2xl border border-border/70 bg-background p-5 shadow-soft"
                >
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-bold text-primary">
                    {meta.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {meta.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group flex h-full flex-col rounded-2xl border border-border/70 bg-background p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-secondary/50 hover:shadow-elevated"
              >
                <CategoryBadge category={post.category} />
                <ArticleMeta post={post} />
                <h3 className="mt-5 font-display text-xl font-bold leading-snug text-primary transition-colors group-hover:text-secondary">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-secondary-ink">
                  Article bientôt disponible
                  <ArrowRight className="h-4 w-4" />
                </span>
              </motion.article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-12 text-center text-muted-foreground">
              Aucune publication pour cette catégorie pour le moment.
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;
