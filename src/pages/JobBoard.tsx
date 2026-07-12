import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  MapPin,
  Calendar,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Award,
  Sparkles,
  Code2,
  Users,
  Megaphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PageHeader } from "@/components/PageHeader";
import { cn } from "@/lib/utils";

type OppType =
  | "Emploi"
  | "Stage"
  | "Bourse"
  | "Fellowship"
  | "Hackathon"
  | "Conférence"
  | "Appel à candidatures";

type Level = "Débutant" | "Intermédiaire" | "Avancé";
type Loc = "Tchad" | "Afrique" | "International" | "Remote";

interface Opportunity {
  title: string;
  organization: string;
  type: OppType;
  level: Level;
  location: Loc;
  city?: string;
  deadline: string;
  description: string;
  link?: string;
}

const opportunities: Opportunity[] = [
  {
    title: "Data Scientist Junior",
    organization: "TechCorp Africa",
    type: "Emploi",
    level: "Débutant",
    location: "Tchad",
    city: "N'Djamena",
    deadline: "2026-08-30",
    description:
      "Rejoignez une équipe data pour développer des modèles ML appliqués au secteur bancaire africain.",
  },
  {
    title: "AI Research Intern",
    organization: "Institut IA Afrique",
    type: "Stage",
    level: "Intermédiaire",
    location: "Afrique",
    city: "Dakar",
    deadline: "2026-07-15",
    description:
      "Stage de recherche 6 mois en NLP appliqué aux langues africaines.",
  },
  {
    title: "Google Generation Scholarship",
    organization: "Google",
    type: "Bourse",
    level: "Débutant",
    location: "International",
    deadline: "2026-09-10",
    description:
      "Bourse pour étudiantes en informatique avec mentorat et accompagnement carrière.",
  },
  {
    title: "Mandela Washington Fellowship",
    organization: "U.S. Department of State",
    type: "Fellowship",
    level: "Avancé",
    location: "International",
    deadline: "2026-09-20",
    description:
      "Fellowship de 6 semaines aux États-Unis pour jeunes leaders africains.",
  },
  {
    title: "Sahel AI Hackathon",
    organization: "ChadAI Women",
    type: "Hackathon",
    level: "Intermédiaire",
    location: "Tchad",
    city: "N'Djamena",
    deadline: "2026-10-05",
    description:
      "48h pour prototyper des solutions IA répondant à des défis locaux.",
  },
  {
    title: "Deep Learning Indaba",
    organization: "Indaba",
    type: "Conférence",
    level: "Avancé",
    location: "Afrique",
    deadline: "2026-08-01",
    description:
      "La plus grande conférence d'IA en Afrique — networking, workshops et keynotes.",
  },
  {
    title: "Appel à projets Women in Tech",
    organization: "UNDP",
    type: "Appel à candidatures",
    level: "Intermédiaire",
    location: "International",
    deadline: "2026-07-30",
    description:
      "Financement de projets tech portés par des femmes africaines (jusqu'à 25 000 USD).",
  },
  {
    title: "Développeuse Frontend",
    organization: "Startup Sahel",
    type: "Emploi",
    level: "Intermédiaire",
    location: "Remote",
    deadline: "2026-08-15",
    description:
      "Mission freelance React/TypeScript pour une startup edtech.",
  },
];

const typeFilters: { label: string; value: OppType | "Tous"; icon: typeof Briefcase }[] = [
  { label: "Tous", value: "Tous", icon: Sparkles },
  { label: "Emplois", value: "Emploi", icon: Briefcase },
  { label: "Stages", value: "Stage", icon: GraduationCap },
  { label: "Bourses", value: "Bourse", icon: Award },
  { label: "Fellowships", value: "Fellowship", icon: Users },
  { label: "Hackathons", value: "Hackathon", icon: Code2 },
  { label: "Conférences", value: "Conférence", icon: Megaphone },
  { label: "Appels à candidatures", value: "Appel à candidatures", icon: Sparkles },
];

const levels: (Level | "Tous")[] = ["Tous", "Débutant", "Intermédiaire", "Avancé"];
const locations: (Loc | "Tous")[] = ["Tous", "Tchad", "Afrique", "International", "Remote"];

const typeColor: Record<OppType, string> = {
  Emploi: "bg-primary/10 text-primary",
  Stage: "bg-secondary/10 text-secondary",
  Bourse: "bg-secondary/10 text-secondary",
  Fellowship: "bg-primary/10 text-primary",
  Hackathon: "bg-secondary/10 text-secondary",
  Conférence: "bg-primary/10 text-primary",
  "Appel à candidatures": "bg-secondary/10 text-secondary",
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

const Opportunities = () => {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<OppType | "Tous">("Tous");
  const [level, setLevel] = useState<Level | "Tous">("Tous");
  const [loc, setLoc] = useState<Loc | "Tous">("Tous");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return opportunities.filter((o) => {
      if (type !== "Tous" && o.type !== type) return false;
      if (level !== "Tous" && o.level !== level) return false;
      if (loc !== "Tous" && o.location !== loc) return false;
      if (!q) return true;
      return (
        o.title.toLowerCase().includes(q) ||
        o.organization.toLowerCase().includes(q) ||
        o.description.toLowerCase().includes(q)
      );
    });
  }, [query, type, level, loc]);

  return (
    <>
      <PageHeader
        eyebrow="Opportunités"
        title="Trouvez votre prochaine opportunité"
        description="Emplois, stages, bourses, fellowships, hackathons, conférences et appels à candidatures — sélectionnés pour les femmes tchadiennes en tech et en IA."
      />

      <section className="py-12 bg-card border-b border-border">
        <div className="section-container">
          {/* Search */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Rechercher une opportunité..."
                className="pl-12 h-14 rounded-full bg-background border-border text-base shadow-soft"
              />
            </div>
          </div>

          {/* Type pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {typeFilters.map((f) => {
              const active = type === f.value;
              const Icon = f.icon;
              return (
                <button
                  key={f.value}
                  onClick={() => setType(f.value)}
                  className={cn(
                    "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all border",
                    active
                      ? "bg-primary text-primary-foreground border-primary shadow-soft"
                      : "bg-background text-primary border-border hover:border-secondary hover:text-secondary"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {f.label}
                </button>
              );
            })}
          </div>

          {/* Sub filters */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Niveau d'expérience
              </p>
              <div className="flex flex-wrap gap-2">
                {levels.map((l) => (
                  <button
                    key={l}
                    onClick={() => setLevel(l)}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-xs font-semibold border transition-all",
                      level === l
                        ? "bg-secondary text-secondary-foreground border-secondary"
                        : "bg-background text-primary border-border hover:border-secondary"
                    )}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Localisation
              </p>
              <div className="flex flex-wrap gap-2">
                {locations.map((l) => (
                  <button
                    key={l}
                    onClick={() => setLoc(l)}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-xs font-semibold border transition-all",
                      loc === l
                        ? "bg-secondary text-secondary-foreground border-secondary"
                        : "bg-background text-primary border-border hover:border-secondary"
                    )}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="section-container">
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm text-muted-foreground">
              <span className="font-bold text-primary">{filtered.length}</span>{" "}
              opportunité{filtered.length > 1 ? "s" : ""} trouvée
              {filtered.length > 1 ? "s" : ""}
            </p>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 bg-card rounded-2xl">
              <p className="text-muted-foreground">
                Aucune opportunité ne correspond à votre recherche.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {filtered.map((o, i) => (
                <motion.article
                  key={o.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: (i % 4) * 0.05 }}
                  className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all border border-border flex flex-col"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span
                      className={cn(
                        "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide",
                        typeColor[o.type]
                      )}
                    >
                      {o.type}
                    </span>
                    <span className="text-xs font-medium text-muted-foreground">
                      {o.level}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-primary mb-1 group-hover:text-secondary transition-colors">
                    {o.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {o.organization}
                  </p>

                  <p className="text-sm text-foreground/80 leading-relaxed mb-5 flex-1">
                    {o.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-5">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {o.city ? `${o.city}, ${o.location}` : o.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      Deadline : {formatDate(o.deadline)}
                    </span>
                  </div>

                  <Button
                    className="w-full bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground rounded-full font-semibold"
                    asChild
                  >
                    <a
                      href={o.link || "mailto:contact@chadaiwomen.org"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Postuler
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </motion.article>
              ))}
            </div>
          )}

          <div className="mt-16 text-center bg-card rounded-2xl p-8 shadow-soft border border-border">
            <h3 className="font-display text-2xl font-bold text-primary mb-3">
              Vous recrutez ou avez une opportunité à partager ?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Publiez votre offre auprès de la première communauté de femmes
              tchadiennes en tech et en IA.
            </p>
            <Button
              className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground rounded-full font-semibold px-8"
              asChild
            >
              <a href="mailto:contact@chadaiwomen.org">
                Soumettre une opportunité
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Opportunities;