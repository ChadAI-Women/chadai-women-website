import { useEffect, useState } from "react";
import { fetchStrapiList } from "@/lib/strapi";

export type CmsOpportunity = {
  title: string;
  organization: string;
  type: "Emploi" | "Stage" | "Bourse" | "Fellowship" | "Hackathon" | "Conférence" | "Appel à candidatures";
  level: "Débutant" | "Intermédiaire" | "Avancé";
  location: "Tchad" | "Afrique" | "International" | "Online";
  city?: string;
  deadline: string;
  description: string;
  featured?: boolean;
  link?: string;
};

type StrapiOpportunity = {
  title?: string;
  organization?: string;
  summary?: string;
  type?: string;
  experienceLevel?: string;
  location?: string;
  deadline?: string;
  applyUrl?: string;
  featured?: boolean;
};

const typeMap: Record<string, CmsOpportunity["type"]> = {
  emploi: "Emploi",
  stage: "Stage",
  bourse: "Bourse",
  fellowship: "Fellowship",
  hackathon: "Hackathon",
  conference: "Conférence",
  appel: "Appel à candidatures",
};

const levelMap: Record<string, CmsOpportunity["level"]> = {
  debutant: "Débutant",
  intermediaire: "Intermédiaire",
  avance: "Avancé",
};

const locationMap: Record<string, CmsOpportunity["location"]> = {
  tchad: "Tchad",
  afrique: "Afrique",
  international: "International",
  online: "Online",
};

const mapOpportunity = (opportunity: StrapiOpportunity): CmsOpportunity | null => {
  if (!opportunity.title || !opportunity.summary || !opportunity.deadline) return null;

  return {
    title: opportunity.title,
    organization: opportunity.organization || "ChadAI Women",
    type: typeMap[opportunity.type || ""] || "Appel à candidatures",
    level: levelMap[opportunity.experienceLevel || ""] || "Débutant",
    location: locationMap[opportunity.location || ""] || "Online",
    deadline: opportunity.deadline,
    description: opportunity.summary,
    featured: opportunity.featured,
    link: opportunity.applyUrl,
  };
};

export const useStrapiOpportunities = <T extends CmsOpportunity>(fallback: T[]) => {
  const [opportunities, setOpportunities] = useState<CmsOpportunity[]>(fallback);

  useEffect(() => {
    let active = true;

    fetchStrapiList<StrapiOpportunity>("opportunities", "sort=deadline:asc")
      .then((items) => {
        const mapped = items.map(mapOpportunity).filter(Boolean) as CmsOpportunity[];
        if (active && mapped.length > 0) {
          setOpportunities(mapped);
        }
      })
      .catch(() => {
        if (active) {
          setOpportunities(fallback);
        }
      });

    return () => {
      active = false;
    };
  }, [fallback]);

  return opportunities;
};
