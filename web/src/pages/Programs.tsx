import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Check,
  Code2,
  Compass,
  GraduationCap,
  Heart,
  Lightbulb,
  Monitor,
  Network,
  Rocket,
  Trophy,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { FlagDash } from "@/components/FlagDash";

type Program = {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  Icon: typeof GraduationCap;
  outcomes: string[];
  items: { title: string; description: string; Icon: typeof Monitor }[];
  cta: { label: string; to: string };
};

const programs: Program[] = [
  {
    id: "formations",
    eyebrow: "Formations",
    title: "Apprendre l'IA, étape par étape",
    intro:
      "Des formats accessibles pour comprendre les bases, pratiquer avec des outils concrets et construire des compétences utiles.",
    Icon: GraduationCap,
    outcomes: ["Bases solides", "Pratique guidée", "Mini-projets portfolio"],
    items: [
      {
        Icon: Monitor,
        title: "Webinaires mensuels",
        description:
          "Sessions courtes pour découvrir un thème : IA générative, data science, éthique, machine learning.",
      },
      {
        Icon: Code2,
        title: "Cercles d'apprentissage",
        description:
          "Petits groupes réguliers pour progresser sur Python, data analysis et projets guidés.",
      },
      {
        Icon: Lightbulb,
        title: "Bootcamps thématiques",
        description:
          "Parcours intensifs autour d'un sujet précis, avec un livrable concret à la fin.",
      },
    ],
    cta: { label: "Rejoindre une formation", to: "/contact" },
  },
  {
    id: "mentorat",
    eyebrow: "Mentorat",
    title: "Avancer avec un mentor",
    intro:
      "Un accompagnement humain pour clarifier ses objectifs, progresser avec confiance et ouvrir des opportunités.",
    Icon: Users,
    outcomes: ["Objectifs clarifiés", "Conseils carrière", "Suivi régulier"],
    items: [
      {
        Icon: Heart,
        title: "Mentorat individuel",
        description:
          "Un binôme mentor / personne accompagnée sur 3 à 6 mois pour avancer sur un objectif précis.",
      },
      {
        Icon: Users,
        title: "Mentorat de groupe",
        description:
          "Sessions thématiques sur l'orientation tech, les candidatures, les entretiens et la confiance.",
      },
      {
        Icon: GraduationCap,
        title: "Devenir mentor",
        description:
          "Un cadre pour les personnes expérimentées qui souhaitent transmettre et accompagner la communauté.",
      },
    ],
    cta: { label: "Demander un mentorat", to: "/contact" },
  },
  {
    id: "evenements",
    eyebrow: "Événements",
    title: "Se rencontrer, pratiquer, célébrer",
    intro:
      "Des temps forts en ligne et en présentiel pour apprendre ensemble, créer du lien et rendre les parcours visibles.",
    Icon: Calendar,
    outcomes: ["Réseau actif", "Panels inspirants", "Challenges pratiques"],
    items: [
      {
        Icon: Calendar,
        title: "Meetups trimestriels",
        description:
          "Rencontres avec panels, retours d'expérience, networking et ateliers découverte.",
      },
      {
        Icon: Trophy,
        title: "Hackathons & challenges",
        description:
          "Défis autour de sujets locaux : éducation, santé, climat, inclusion et données.",
      },
      {
        Icon: Heart,
        title: "Journées dédiées",
        description:
          "Moments de célébration pour valoriser les femmes tchadiennes en IA et tech.",
      },
    ],
    cta: { label: "Voir les événements", to: "/evenements" },
  },
  {
    id: "initiatives",
    eyebrow: "Initiatives",
    title: "Construire un impact durable",
    intro:
      "Des actions structurantes pour renforcer la place des femmes tchadiennes dans l'IA, au pays et dans la diaspora.",
    Icon: Lightbulb,
    outcomes: ["Visibilité", "Plaidoyer", "Projets utiles"],
    items: [
      {
        Icon: GraduationCap,
        title: "Jeunes Talents",
        description:
          "Sensibilisation des lycéennes et étudiantes aux métiers de l'IA et du numérique.",
      },
      {
        Icon: Network,
        title: "Réseau Femmes en IA Tchad",
        description:
          "Connexion entre étudiantes, chercheuses, ingénieures, entrepreneures et diaspora.",
      },
      {
        Icon: Lightbulb,
        title: "Plaidoyer",
        description:
          "Représentation dans les discussions sur l'IA, l'innovation et l'inclusion numérique.",
      },
      {
        Icon: Heart,
        title: "Série « Femmes tchadiennes en IA »",
        description:
          "Initiative officielle de ChadAI Women qui met en lumière, à travers portraits et interviews, les parcours de femmes tchadiennes qui font avancer l'intelligence artificielle au Tchad, en Afrique et dans la diaspora.",
      },
    ],
    cta: { label: "Soutenir nos initiatives", to: "/contact" },
  },
];

const pathway = [
  {
    title: "Découvrir",
    text: "Comprendre l'IA, ses usages et les opportunités accessibles aux femmes tchadiennes.",
    detail:
      "Webinaires d'introduction, discussions ouvertes et ressources pour démystifier l'intelligence artificielle.",
    Icon: Compass,
  },
  {
    title: "Apprendre",
    text: "Acquérir les bases techniques avec des formats guidés et progressifs.",
    detail:
      "Parcours Python, data, IA générative et machine learning avec exercices pratiques et accompagnement.",
    Icon: BookOpen,
  },
  {
    title: "Pratiquer",
    text: "Construire des mini-projets et manipuler des données réelles ou contextualisées.",
    detail:
      "Ateliers, bootcamps et challenges pour transformer l'apprentissage en livrables concrets.",
    Icon: Code2,
  },
  {
    title: "Être accompagnée",
    text: "Bénéficier du mentorat et des retours d'expertes.",
    detail:
      "Mentorat individuel ou collectif pour clarifier ses objectifs, candidater, progresser et gagner en confiance.",
    Icon: Heart,
  },
  {
    title: "Contribuer",
    text: "Présenter, collaborer et créer de l'impact local.",
    detail:
      "Projets communautaires, prises de parole, partenariats et initiatives qui servent les besoins locaux.",
    Icon: Rocket,
  },
];

const pathwayPositions = [
  { nodeLeft: "62%", nodeTop: "7%", labelLeft: "70%", labelTop: "16%", align: "left" },
  { nodeLeft: "92%", nodeTop: "38%", labelLeft: "82%", labelTop: "48%", align: "left" },
  { nodeLeft: "74%", nodeTop: "84%", labelLeft: "70%", labelTop: "94%", align: "center" },
  { nodeLeft: "26%", nodeTop: "84%", labelLeft: "30%", labelTop: "94%", align: "center" },
  { nodeLeft: "8%", nodeTop: "44%", labelLeft: "18%", labelTop: "54%", align: "right" },
];

const Programs = () => {
  const navigate = useNavigate();
  const [activePathway, setActivePathway] = useState(0);
  const [selectedPathway, setSelectedPathway] = useState<number | null>(null);
  const activeStep = pathway[activePathway];
  const selectedStep = selectedPathway === null ? null : pathway[selectedPathway];

  return (
    <>
      <PageHeader
        eyebrow="Nos Programmes"
        title="Un parcours complet pour apprendre, pratiquer et contribuer"
        description="Formations, mentorat, événements et initiatives : ChadAI Women accompagne les femmes tchadiennes depuis la découverte de l'IA jusqu'aux projets concrets."
      />

      <section className="border-b border-border/60 bg-background">
        <div className="section-container py-6">
          <div className="flex flex-wrap justify-center gap-3">
            {programs.map((program) => (
              <a
                key={program.id}
                href={`#${program.id}`}
                className="inline-flex items-center gap-2 rounded-full border border-primary/15 px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
              >
                <program.Icon className="h-4 w-4" />
                {program.eyebrow}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card py-16">
        <div className="section-container">
          <div className="mb-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -15% 0px" }}
              transition={{ duration: 0.45 }}
            >
              <span className="mb-3 inline-block text-sm font-bold uppercase tracking-[0.22em] text-secondary-ink">
                Organisation
              </span>
              <h2 className="font-display text-3xl font-bold leading-tight text-primary md:text-5xl">
                Quatre piliers, un même objectif : passer à l'action
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -15% 0px" }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="text-lg leading-relaxed text-muted-foreground"
            >
              Chaque programme joue un rôle précis : apprendre les compétences,
              être accompagnée, rencontrer la communauté, puis transformer les idées
              en solutions utiles.
            </motion.p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {programs.map((program, index) => (
              <motion.a
                key={program.id}
                href={`#${program.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -15% 0px" }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group rounded-2xl border border-primary/10 bg-background p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-secondary/50 hover:shadow-elevated"
              >
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                  <program.Icon className="h-5 w-5" />
                </span>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary-ink">
                  {program.eyebrow}
                </p>
                <h3 className="mt-2 font-display text-lg font-bold leading-snug text-primary">
                  {program.title}
                </h3>
                <div className="mt-5 space-y-2">
                  {program.outcomes.map((outcome) => (
                    <span key={outcome} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-secondary" />
                      {outcome}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="section-container">
          <div className="mb-8 text-center">
            <span className="mb-3 inline-block text-sm font-bold uppercase tracking-[0.22em] text-secondary-ink">
              Parcours membre
            </span>
            <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold text-primary md:text-5xl">
              De la curiosité au projet concret
            </h2>
            <FlagDash className="mt-5" />
          </div>

          <div className="grid gap-10 lg:items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "0px 0px -15% 0px" }}
              transition={{ duration: 0.45 }}
              className="hidden justify-center md:flex"
            >
              <div className="relative aspect-[680/540] w-full max-w-[680px]">
                <svg
                  className="absolute inset-0 h-full w-full overflow-visible"
                  viewBox="0 0 680 540"
                  aria-hidden="true"
                >
                  <circle
                    cx="340"
                    cy="270"
                    r="215"
                    fill="none"
                    stroke="hsl(var(--primary) / 0.12)"
                    strokeWidth="2"
                  />
                  <circle
                    cx="340"
                    cy="270"
                    r="108"
                    fill="none"
                    stroke="hsl(var(--primary) / 0.045)"
                    strokeWidth="1"
                  />
                  <circle
                    className="program-orbit-stroke"
                    cx="340"
                    cy="270"
                    r="215"
                    fill="none"
                    stroke="hsl(var(--secondary))"
                    strokeLinecap="round"
                    strokeWidth="3"
                    strokeDasharray="70 1500"
                  />
                </svg>
                <div className="absolute inset-0">
                  {pathway.map((step, index) => {
                    const Icon = step.Icon;
                    const isActive = activePathway === index || selectedPathway === index;
                    const position = pathwayPositions[index];

                    return (
                      <div key={step.title}>
                        <button
                          type="button"
                          onMouseEnter={() => setActivePathway(index)}
                          onFocus={() => setActivePathway(index)}
                          onClick={() => {
                            setActivePathway(index);
                            setSelectedPathway(index);
                          }}
                          style={{ left: position.nodeLeft, top: position.nodeTop }}
                          className={`absolute flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border bg-background text-muted-foreground shadow-[0_8px_28px_hsl(var(--primary)/0.08)] transition-all hover:border-secondary hover:text-primary ${
                            isActive
                              ? "border-secondary text-primary ring-8 ring-secondary/10"
                              : "border-border"
                          }`}
                          aria-pressed={isActive}
                        >
                          <span className="text-[10px] font-bold leading-none">0{index + 1}</span>
                          <Icon className="mt-1 h-5 w-5" />
                        </button>
                        <button
                          type="button"
                          onMouseEnter={() => setActivePathway(index)}
                          onFocus={() => setActivePathway(index)}
                          onClick={() => {
                            setActivePathway(index);
                            setSelectedPathway(index);
                          }}
                          style={{
                            left: position.labelLeft,
                            top: position.labelTop,
                            textAlign: position.align as "left" | "center" | "right",
                          }}
                          className={`absolute w-44 -translate-x-1/2 -translate-y-1/2 text-sm font-bold transition-colors ${
                            isActive ? "text-primary" : "text-muted-foreground/65"
                          }`}
                        >
                          {step.title}
                        </button>
                      </div>
                    );
                  })}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedPathway(null)}
                  className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_20px_50px_hsl(var(--primary)/0.22)] transition-all hover:scale-105 hover:bg-secondary hover:text-secondary-foreground"
                  aria-label="Fermer le contenu du parcours"
                >
                  <span className="font-display text-xl font-bold">IA</span>
                  <span className="mt-1 h-9 w-9 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 text-xs font-bold leading-9">
                    CW
                  </span>
                </button>

                {selectedStep && selectedPathway !== null && (
                  <motion.div
                    key={selectedStep.title}
                    initial={{ opacity: 0, y: 12, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.25 }}
                    className="absolute left-1/2 top-[56%] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-primary/10 bg-background/95 p-6 text-left shadow-elevated backdrop-blur"
                  >
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <span className="rounded-full bg-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-secondary-foreground">
                        Parcours
                      </span>
                      <span className="text-sm font-medium text-muted-foreground">
                        Étape 0{selectedPathway + 1}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-primary">
                      {selectedStep.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {selectedStep.text}
                    </p>
                    <div className="my-5 h-px bg-border" />
                    <p className="text-sm leading-relaxed text-foreground/80">
                      {selectedStep.detail}
                    </p>
                    <button
                      type="button"
                      onClick={() => setSelectedPathway(null)}
                      className="mt-5 text-sm font-semibold text-primary hover:text-secondary"
                    >
                      Fermer
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>

            <motion.div
              key={selectedStep?.title ?? "pathway-empty"}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="rounded-3xl border border-primary/10 bg-card/80 p-7 shadow-soft md:hidden md:p-9"
            >
              {selectedStep && selectedPathway !== null ? (
                <>
                  <div className="mb-6 flex items-center gap-4">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
                      <selectedStep.Icon className="h-7 w-7" />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground">
                        Étape 0{selectedPathway + 1}
                      </p>
                      <h3 className="font-display text-3xl font-bold text-primary">
                        {selectedStep.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {selectedStep.text}
                  </p>
                  <p className="mt-5 leading-relaxed text-foreground/80">
                    {selectedStep.detail}
                  </p>
                </>
              ) : (
                <p className="text-center text-sm font-semibold text-muted-foreground">
                  Choisissez une étape pour afficher son contenu.
                </p>
              )}
            </motion.div>

            <div className="grid gap-3 sm:grid-cols-2 md:hidden">
              {pathway.map((step, index) => (
                <button
                  key={step.title}
                  type="button"
                  onClick={() => {
                    setActivePathway(index);
                    setSelectedPathway(index);
                  }}
                  className={`flex items-center gap-3 rounded-2xl border p-4 text-left transition-all ${
                    activePathway === index
                      ? "border-secondary bg-secondary/10"
                      : "border-border/70 bg-card"
                  }`}
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <step.Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                      0{index + 1}
                    </span>
                    <span className="font-display font-bold text-primary">{step.title}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>
      {programs.map((program, index) => (
        <section
          key={program.id}
          id={program.id}
          className={`scroll-mt-24 py-14 ${index % 2 === 0 ? "bg-card" : "bg-background"}`}
        >
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -15% 0px" }}
              transition={{ duration: 0.45 }}
              className="mb-7 grid gap-5 lg:grid-cols-[0.75fr_1.25fr] lg:items-end"
            >
              <div>
                <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-secondary-ink">
                  <program.Icon className="h-4 w-4" />
                  {program.eyebrow}
                </span>
                <h2 className="font-display text-2xl font-bold leading-tight text-primary md:text-4xl">
                  {program.title}
                </h2>
              </div>
              <p className="text-base leading-relaxed text-muted-foreground">{program.intro}</p>
            </motion.div>

            <div
              className={`mb-7 grid gap-4 ${
                program.items.length === 4
                  ? "md:grid-cols-2 lg:grid-cols-4"
                  : "md:grid-cols-3"
              }`}
            >
              {program.items.map((item, itemIndex) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -15% 0px" }}
                  transition={{ duration: 0.4, delay: itemIndex * 0.08 }}
                  className="flex h-full flex-col rounded-2xl border border-border/70 bg-background p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
                >
                  <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-bold leading-snug text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </motion.article>
              ))}
            </div>

            <Button
              onClick={() => navigate(program.cta.to)}
              className="group rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:bg-secondary hover:text-secondary-foreground"
            >
              {program.cta.label}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </section>
      ))}

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="section-container">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold md:text-4xl">
                Vous voulez construire un programme avec nous ?
              </h2>
              <p className="mt-4 max-w-2xl text-primary-foreground/80">
                Entreprises, institutions, mentors et partenaires peuvent contribuer
                à rendre l'IA plus accessible aux femmes tchadiennes.
              </p>
            </div>
            <Button
              asChild
              className="rounded-full bg-secondary px-7 font-semibold text-secondary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link to="/contact">
                Proposer un partenariat
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Programs;
