import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { FlagDash } from "@/components/FlagDash";
import { useStrapiArticles } from "@/hooks/useStrapiArticles";

export const BlogSection = () => {
  const posts = useStrapiArticles(blogPosts);
  const latestPosts = posts.slice(0, 3);

  return (
    <section id="blog" className="bg-card py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.22em] text-secondary-ink">
              <FlagDash size="sm" />
              Blog & actualités
            </span>
            <h2 className="font-display text-3xl font-bold text-primary md:text-5xl">
              Histoires et ressources de la communauté
            </h2>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-secondary hover:text-secondary-foreground"
          >
            Voir le blog
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {latestPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group flex h-full flex-col rounded-2xl border border-border/70 bg-background p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
            >
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Newspaper className="h-6 w-6" />
              </span>
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
              <h3 className="mt-4 font-display text-xl font-bold text-primary transition-colors group-hover:text-secondary">
                {post.title}
              </h3>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-secondary-ink">
                Lire bientôt
                <ArrowRight className="h-4 w-4" />
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
