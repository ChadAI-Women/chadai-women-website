export type BlogCategory =
  | "Actualités ChadAI Women"
  | "Femmes tchadiennes en IA"
  | "Intelligence Artificielle"
  | "Ressources & Tutoriels"
  | "Événements"
  | "Opportunités";

export type BlogPost = {
  category: BlogCategory;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  featured?: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    category: "Femmes tchadiennes en IA",
    date: "12 Jan 2026",
    readTime: "6 min",
    title: "Portrait : une chercheuse tchadienne au cœur du Machine Learning",
    excerpt:
      "Premier épisode de notre série officielle : parcours, défis, apprentissages et conseils d'une femme tchadienne qui fait avancer l'IA.",
    featured: true,
  },
  {
    category: "Actualités ChadAI Women",
    date: "20 Déc 2024",
    readTime: "5 min",
    title: "Lancement officiel de ChadAI Women",
    excerpt:
      "Retour sur le lancement, les temps forts de la présentation et les premières ambitions de la communauté.",
  },
  {
    category: "Intelligence Artificielle",
    date: "15 Déc 2024",
    readTime: "7 min",
    title: "Pourquoi les femmes doivent investir l'IA",
    excerpt:
      "La diversité n'est pas un bonus : elle influence les questions posées, les données choisies et les solutions créées.",
  },
  {
    category: "Ressources & Tutoriels",
    date: "05 Fév 2026",
    readTime: "10 min",
    title: "Débuter en Python pour la Data Science",
    excerpt:
      "Un guide pas-à-pas pour installer son environnement, écrire ses premiers scripts et manipuler des données.",
  },
  {
    category: "Événements",
    date: "10 Déc 2024",
    readTime: "4 min",
    title: "Calendrier des activités 2026",
    excerpt:
      "Webinaires, meetups, ateliers et temps forts : les rendez-vous à suivre pour progresser avec la communauté.",
  },
  {
    category: "Opportunités",
    date: "01 Mars 2026",
    readTime: "3 min",
    title: "Bourses et programmes ouverts aux femmes africaines en IA",
    excerpt:
      "Une sélection d'appels à candidatures, bourses, fellowships et programmes à surveiller ce trimestre.",
  },
];
