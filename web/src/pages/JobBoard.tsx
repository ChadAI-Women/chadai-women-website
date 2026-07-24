import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Award,
  Briefcase,
  Calendar,
  Clock,
  ExternalLink,
  FileText,
  GraduationCap,
  LayoutGrid,
  MapPin,
  Search,
  ShieldCheck,
  Trophy,
  Users,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PageHeader } from "@/components/PageHeader";
import { cn } from "@/lib/utils";
import { useStrapiOpportunities } from "@/hooks/useStrapiOpportunities";

type OppType =
  | "Emploi"
  | "Stage"
  | "Bourse"
  | "Fellowship"
  | "Hackathon"
  | "Conférence"
  | "Appel à candidatures";

type Level = "Débutant" | "Intermédiaire" | "Avancé";
type Loc = "Tchad" | "Afrique" | "International" | "Online";
type Filter = "Tous" | "Carrières" | "Bourses" | "Événements" | "Appels";

interface Opportunity {
  title: string;
  organization: string;
  type: OppType;
  level: Level;
  location: Loc;
  city?: string;
  deadline: string;
  description: string;
  featured?: boolean;
  link?: string;
}

const fallbackOpportunities: Opportunity[] = [
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
    featured: true,
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
      "Stage de recherche de 6 mois en NLP appliqué aux langues africaines.",
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
    featured: true,
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
    featured: true,
  },
  {
    title: "Deep Learning Indaba",
    organization: "Indaba",
    type: "Conférence",
    level: "Avancé",
    location: "Afrique",
    deadline: "2026-08-01",
    description:
      "Grande conférence d'IA en Afrique avec networking, workshops et keynotes.",
  },
  {
    title: "Appel à projets Women in Tech",
    organization: "UNDP",
    type: "Appel à candidatures",
    level: "Intermédiaire",
    location: "International",
    deadline: "2026-07-30",
    description:
      "Financement de projets tech portés par des femmes africaines jusqu'à 25 000 USD.",
  },
  {
    title: "Développeuse Frontend",
    organization: "Startup Sahel",
    type: "Emploi",
    level: "Intermédiaire",
    location: "Online",
    deadline: "2026-08-15",
    description:
      "Mission freelance React/TypeScript pour une startup edtech.",
  },
];

const filters: { label: string; value: Filter; icon: typeof Briefcase }[] = [
  { label: "Toutes", value: "Tous", icon: LayoutGrid },
  { label: "Carrières", value: "Carrières", icon: Briefcase },
  { label: "Bourses", value: "Bourses", icon: Award },
  { label: "Événements", value: "Événements", icon: Trophy },
  { label: "Appels", value: "Appels", icon: FileText },
];

const locationFilters: { label: string; value: Loc | "Tous" }[] = [
  { label: "Toutes zones", value: "Tous" },
  { label: "Tchad", value: "Tchad" },
  { label: "Afrique", value: "Afrique" },
  { label: "International", value: "International" },
  { label: "Online", value: "Online" },
];

const filterIncludes: Record<Exclude<Filter, "Tous">, OppType[]> = {
  "Carrières": ["Emploi", "Stage"],
  Bourses: ["Bourse", "Fellowship"],
  "Événements": ["Hackathon", "Conférence"],
  Appels: ["Appel à candidatures"],
};

const typeIcon: Record<OppType, typeof Briefcase> = {
  Emploi: Briefcase,
  Stage: GraduationCap,
  Bourse: Award,
  Fellowship: Users,
  Hackathon: Trophy,
  "Conférence": Calendar,
  "Appel à candidatures": FileText,
};

const typeStyle: Record<OppType, string> = {
  Emploi: "bg-primary/10 text-primary",
  Stage: "bg-primary/10 text-primary",
  Bourse: "bg-secondary/15 text-primary",
  Fellowship: "bg-secondary/15 text-primary",
  Hackathon: "bg-primary/10 text-primary",
  "Conférence": "bg-primary/10 text-primary",
  "Appel à candidatures": "bg-secondary/15 text-primary",
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

const getDeadline = (iso: string) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const deadline = new Date(iso);
  deadline.setHours(0, 0, 0, 0);
  const days = Math.ceil((deadline.getTime() - today.getTime()) / 86400000);

  if (days < 0) return { label: "Expirée", tone: "text-muted-foreground", days };
  if (days <= 10) return { label: `J-${days}`, tone: "text-destructive", days };
  if (days <= 30) return { label: `J-${days}`, tone: "text-secondary-ink", days };
  return { label: `J-${days}`, tone: "text-primary", days };
};

const OpportunityCard = ({ opportunity, index }: { opportunity: Opportunity; index: number }) => {
  const Icon = typeIcon[opportunity.type];
  const deadline = getDeadline(opportunity.deadline);

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
      transition={{ duration: 0.35, delay: (index % 4) * 0.05 }}
      className="group flex h-full flex-col rounded-2xl border border-border/70 bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-secondary/50 hover:shadow-elevated"
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <span className={cn("inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold", typeStyle[opportunity.type])}>
          <Icon className="h-3.5 w-3.5" />
          {opportunity.type}
        </span>
        <span className={cn("text-sm font-bold", deadline.tone)}>{deadline.label}</span>
      </div>

      <h3 className="font-display text-xl font-bold leading-snug text-primary transition-colors group-hover:text-secondary">
        {opportunity.title}
      </h3>
      <p className="mt-1 text-sm font-semibold text-muted-foreground">
        {opportunity.organization}
      </p>

      <p className="mt-4 flex-1 text-[15px] leading-relaxed text-foreground/80">
        {opportunity.description}
      </p>

      <div className="mt-6 space-y-2 border-t border-border pt-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-secondary" />
          {opportunity.city ? `${opportunity.city}, ${opportunity.location}` : opportunity.location}
        </span>
        <span className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-secondary" />
          Deadline : {formatDate(opportunity.deadline)}
        </span>
      </div>

      <Button
        className="mt-6 w-full rounded-full bg-primary font-semibold text-primary-foreground hover:bg-secondary hover:text-secondary-foreground"
        asChild
      >
        <a
          href={opportunity.link || "mailto:contact@chadaiwomen.org"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Voir l'opportunité
          <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </motion.article>
  );
};

const JobBoard = () => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("Tous");
  const [location, setLocation] = useState<Loc | "Tous">("Tous");
  const opportunities = useStrapiOpportunities(fallbackOpportunities);

  const hasActiveFilters = query.trim() !== "" || filter !== "Tous" || location !== "Tous";

  const resetFilters = () => {
    setQuery("");
    setFilter("Tous");
    setLocation("Tous");
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return opportunities
      .filter((opportunity) => {
        if (filter !== "Tous" && !filterIncludes[filter].includes(opportunity.type)) {
          return false;
        }
        if (location !== "Tous" && opportunity.location !== location) {
          return false;
        }
        if (!q) return true;
        return (
          opportunity.title.toLowerCase().includes(q) ||
          opportunity.organization.toLowerCase().includes(q) ||
          opportunity.description.toLowerCase().includes(q)
        );
      })
      .sort((a, b) => a.deadline.localeCompare(b.deadline));
  }, [query, filter, location]);

  const featured = filtered.filter((opportunity) => opportunity.featured).slice(0, 3);
  const regular = filtered.filter((opportunity) => !featured.includes(opportunity));

  return (
    <>
      <PageHeader
        eyebrow="Opportunités"
        title="Opportunités sélectionnées pour avancer en tech"
        description="Emplois, stages, bourses, hackathons et appels à candidatures choisis pour les femmes tchadiennes et africaines intéressées par l'IA et le numérique."
      />

      <section className="border-b border-border/70 bg-card py-12">
        <div className="section-container">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <span className="mb-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-secondary-ink">
                <ShieldCheck className="h-4 w-4" />
                Sélection éditoriale
              </span>
              <h2 className="font-display text-3xl font-bold text-primary md:text-5xl">
                Moins de bruit, plus d'opportunités utiles
              </h2>
            </div>
            <div className="rounded-2xl border border-primary/10 bg-background p-5 shadow-soft">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Rechercher par titre, organisme ou mot-clé..."
                  className="h-12 rounded-full border-border bg-card pl-12 text-base"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {filters.map((item) => {
                const Icon = item.icon;
                const active = filter === item.value;

                return (
                  <button
                    key={item.value}
                    onClick={() => setFilter(item.value)}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all",
                      active
                        ? "border-primary bg-primary text-primary-foreground shadow-soft"
                        : "border-primary/15 bg-background text-primary hover:border-secondary hover:text-secondary"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-secondary" />
              <select
                value={location}
                onChange={(event) => setLocation(event.target.value as Loc | "Tous")}
                className="h-10 rounded-full border border-primary/15 bg-background px-4 text-sm font-semibold text-primary shadow-soft outline-none transition-colors hover:border-secondary focus:border-secondary"
                aria-label="Filtrer par localisation"
              >
                {locationFilters.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>
                <strong className="text-primary">{filtered.length}</strong> opportunité
                {filtered.length > 1 ? "s" : ""}
              </span>
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="inline-flex items-center gap-1.5 font-semibold text-primary hover:text-secondary"
                >
                  <X className="h-4 w-4" />
                  Réinitialiser
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="section-container">
          {filtered.length === 0 ? (
            <div className="rounded-3xl border border-border bg-card p-12 text-center shadow-soft">
              <p className="mb-5 text-muted-foreground">
                Aucune opportunité ne correspond à votre recherche.
              </p>
              <Button onClick={resetFilters} className="rounded-full bg-primary text-primary-foreground">
                Réinitialiser les filtres
              </Button>
            </div>
          ) : (
            <>
              {featured.length > 0 && (
                <div className="mb-14">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.22em] text-secondary-ink">
                        À la une
                      </p>
                      <h2 className="mt-2 font-display text-3xl font-bold text-primary">
                        Opportunités prioritaires
                      </h2>
                    </div>
                  </div>
                  <div className="grid gap-6 lg:grid-cols-3">
                    {featured.map((opportunity, index) => (
                      <OpportunityCard key={opportunity.title} opportunity={opportunity} index={index} />
                    ))}
                  </div>
                </div>
              )}

              <div>
                <div className="mb-6">
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-secondary-ink">
                    Toutes les opportunités
                  </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  {regular.map((opportunity, index) => (
                    <OpportunityCard key={opportunity.title} opportunity={opportunity} index={index} />
                  ))}
                </div>
              </div>
            </>
          )}

          <div className="mt-16 overflow-hidden rounded-3xl bg-primary p-8 text-center text-primary-foreground shadow-elevated md:p-10">
            <Clock className="mx-auto mb-4 h-10 w-10 text-secondary" />
            <h3 className="font-display text-2xl font-bold md:text-3xl">
              Vous avez une opportunité à partager ?
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-primary-foreground/80">
              Envoyez-nous les informations essentielles. Nous sélectionnons les offres
              utiles, sérieuses et adaptées aux femmes tchadiennes en tech et en IA.
            </p>
            <Button
              className="mt-7 rounded-full bg-secondary px-8 font-semibold text-secondary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <a href="mailto:contact@chadaiwomen.org">Soumettre une opportunité</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobBoard;
