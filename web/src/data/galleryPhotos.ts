import aiWorkshop from "@/assets/generated/gallery-ai-workshop.webp";
import mentorship from "@/assets/generated/gallery-mentorship.webp";
import panel from "@/assets/generated/gallery-panel.webp";
import hackathon from "@/assets/generated/gallery-hackathon.webp";
import community from "@/assets/generated/gallery-community.webp";
import networking from "@/assets/generated/gallery-networking.webp";
import aiTeam from "@/assets/generated/gallery-ai-team.webp";
import dataTraining from "@/assets/generated/gallery-data-training.webp";
import partnership from "@/assets/generated/gallery-partnership.webp";

export const galleryPhotos = [
  {
    src: aiWorkshop,
    alt: "Atelier d'intelligence artificielle pour femmes tchadiennes",
  },
  {
    src: networking,
    alt: "Discussion professionnelle entre femmes lors d'un événement tech",
  },
  {
    src: mentorship,
    alt: "Session de mentorat sur les parcours en IA",
  },
  {
    src: aiTeam,
    alt: "Équipe de femmes collaborant sur une solution d'intelligence artificielle",
  },
  {
    src: panel,
    alt: "Panel ChadAI Women sur la place des femmes dans la tech",
  },
  {
    src: dataTraining,
    alt: "Formation pratique autour des données et tableaux de bord",
  },
  {
    src: hackathon,
    alt: "Équipe de femmes travaillant sur un prototype d'IA",
  },
  {
    src: community,
    alt: "Moment de communauté après une formation ChadAI Women",
  },
  {
    src: partnership,
    alt: "Rencontre de partenariat autour de l'IA en Afrique",
  },
];

export const homeGalleryPhotos = galleryPhotos.slice(0, 6);
