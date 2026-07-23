import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const baseTitle = "ChadAI Women";
const defaultDescription =
  "Première communauté de femmes tchadiennes en intelligence artificielle et technologie. Formations, mentorat et opportunités.";

const seoByPath: Record<string, { title: string; description: string }> = {
  "/": {
    title: "ChadAI Women - Femmes tchadiennes en intelligence artificielle",
    description:
      "ChadAI Women forme, inspire et connecte les femmes tchadiennes autour de l'intelligence artificielle, de la data et de l'innovation.",
  },
  "/mission": {
    title: "Mission - ChadAI Women",
    description:
      "Découvrez la mission, la vision et les valeurs de ChadAI Women pour rendre l'intelligence artificielle plus accessible aux femmes tchadiennes.",
  },
  "/equipe": {
    title: "Équipe - ChadAI Women",
    description:
      "Rencontrez l'organisation et les rôles qui portent ChadAI Women, communauté dédiée aux femmes tchadiennes en IA.",
  },
  "/programmes": {
    title: "Programmes - ChadAI Women",
    description:
      "Formations, mentorat, événements et initiatives pour aider les femmes tchadiennes à progresser en intelligence artificielle.",
  },
  "/evenements": {
    title: "Événements - ChadAI Women",
    description:
      "Webinaires, ateliers et rencontres communautaires organisés par ChadAI Women autour de l'IA et des technologies.",
  },
  "/blog": {
    title: "Blog - ChadAI Women",
    description:
      "Actualités, portraits, ressources et opportunités pour les femmes tchadiennes et africaines intéressées par l'intelligence artificielle.",
  },
  "/ressources": {
    title: "Ressources - ChadAI Women",
    description:
      "Guides, tutoriels, replays et ressources gratuites pour apprendre l'intelligence artificielle et la data science.",
  },
  "/contact": {
    title: "Contact - ChadAI Women",
    description:
      "Contactez ChadAI Women pour rejoindre la communauté, proposer une collaboration ou partager une opportunité.",
  },
  "/galerie": {
    title: "Galerie - ChadAI Women",
    description:
      "Photos et moments forts des ateliers, webinaires et rencontres de la communauté ChadAI Women.",
  },
  "/joboard": {
    title: "Opportunités - ChadAI Women",
    description:
      "Emplois, stages, bourses, hackathons et appels à candidatures sélectionnés pour les femmes tchadiennes en tech et IA.",
  },
  "/histoire": {
    title: "Histoire - ChadAI Women",
    description:
      "Archives institutionnelles, jalons et évolution de la communauté ChadAI Women.",
  },
};

const setMeta = (selector: string, attr: "content", value: string) => {
  const element = document.head.querySelector(selector);
  if (element) {
    element.setAttribute(attr, value);
  }
};

export const SEOManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo =
      seoByPath[pathname] ?? {
        title: `Page introuvable - ${baseTitle}`,
        description: defaultDescription,
      };

    document.title = seo.title;
    setMeta('meta[name="description"]', "content", seo.description);
    setMeta('meta[property="og:title"]', "content", seo.title);
    setMeta('meta[property="og:description"]', "content", seo.description);
    setMeta('meta[name="twitter:title"]', "content", seo.title);
    setMeta('meta[name="twitter:description"]', "content", seo.description);
  }, [pathname]);

  return null;
};
