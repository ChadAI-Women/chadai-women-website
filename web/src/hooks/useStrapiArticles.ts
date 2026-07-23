import { useEffect, useState } from "react";
import { fetchStrapiList } from "@/lib/strapi";
import type { BlogCategory, BlogPost } from "@/data/blogPosts";

type StrapiArticle = {
  title?: string;
  excerpt?: string;
  readTime?: string;
  featured?: boolean;
  publishedAt?: string;
  publishedAtLabel?: string;
  category?: {
    name?: string;
    attributes?: {
      name?: string;
    };
  };
};

const isBlogCategory = (value: string): value is BlogCategory =>
  [
    "Actualités ChadAI Women",
    "Femmes tchadiennes en IA",
    "Intelligence Artificielle",
    "Ressources & Tutoriels",
    "Événements",
    "Opportunités",
  ].includes(value);

// Noms de catégories historiques (CMS) sans accents → libellés accentués
const legacyCategoryMap: Record<string, BlogCategory> = {
  "Actualites ChadAI Women": "Actualités ChadAI Women",
  Evenements: "Événements",
  Opportunites: "Opportunités",
};

const formatArticleDate = (value?: string) => {
  if (!value) return "";

  return new Date(value).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const mapArticle = (article: StrapiArticle): BlogPost | null => {
  if (!article.title || !article.excerpt) return null;

  const categoryName =
    article.category?.name || article.category?.attributes?.name || "Actualités ChadAI Women";

  return {
    title: article.title,
    excerpt: article.excerpt,
    category: isBlogCategory(categoryName)
      ? categoryName
      : legacyCategoryMap[categoryName] ?? "Actualités ChadAI Women",
    date: article.publishedAtLabel || formatArticleDate(article.publishedAt),
    readTime: article.readTime || "5 min",
    featured: article.featured,
  };
};

export const useStrapiArticles = (fallback: BlogPost[]) => {
  const [posts, setPosts] = useState(fallback);

  useEffect(() => {
    let active = true;

    fetchStrapiList<StrapiArticle>("articles")
      .then((articles) => {
        const mapped = articles.map(mapArticle).filter(Boolean) as BlogPost[];
        if (active && mapped.length > 0) {
          setPosts(mapped);
        }
      })
      .catch(() => {
        if (active) {
          setPosts(fallback);
        }
      });

    return () => {
      active = false;
    };
  }, [fallback]);

  return posts;
};
