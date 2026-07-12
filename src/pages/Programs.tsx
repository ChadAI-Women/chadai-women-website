import { motion } from "framer-motion";
import {
  GraduationCap,
  Users,
  Calendar,
  Lightbulb,
  Check,
  ArrowRight,
  Monitor,
  Code2,
  Trophy,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";

type Program = {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  Icon: typeof GraduationCap;
  items: { title: string; description: string; Icon: typeof Monitor }[];
  cta: { label: string; to: string };
};

const programs: Program[] = [
  {
    id: "formations",
    eyebrow: "Formations",
    title: "Apprendre l'IA, étape par étape",
    intro:
      "Nos formations sont conçues pour toutes les femmes, du niveau débutant aux profils plus avancés. Elles combinent théorie, démonstrations et exercices pratiques pour vous donner des compétences réellement utilisables.",
    Icon: GraduationCap,
    items: [
      {
        Icon: Monitor,
        title: "Webinaire mensuel",
        description:
          "Chaque mois, un webinaire en ligne animé par une experte autour d'un thème de l'IA (introduction au Machine Learning, IA générative, Data Science, éthique de l'IA, etc.). Format : 1h30 de présentation + 30 minutes de questions-réponses.",
      },
      {
        Icon: Code2,
        title: "Cercles d'apprentissage",
        description:
          "Des petits groupes qui se retrouvent en ligne toutes les deux semaines pour apprendre ensemble Python, les bibliothèques de Data Science (NumPy, Pandas, Scikit-learn) et progresser sur des projets guidés.",
      },
      {
        Icon: Lightbulb,
        title: "Bootcamps thématiques",
        description:
          "Des sessions intensives de plusieurs jours sur un sujet précis : prompt engineering, Computer Vision, NLP, déploiement de modèles. Chaque bootcamp se termine par un mini-projet à intégrer dans votre portfolio.",
      },
    ],
    cta: { label: "Rejoindre une formation", to: "/contact" },
  },
  {
    id: "mentorat",
    eyebrow: "Mentorat",
    title: "Avancer accompagnée par des mentores",
    intro:
      "Le mentorat est un pilier de ChadAI Women. Nous mettons en relation chaque membre avec des professionnelles expérimentées en IA, Data Science et Tech, basées au Tchad et dans la diaspora.",
    Icon: Users,
    items: [
      {
        Icon: Heart,
        title: "Mentorat individuel",
        description:
          "Un binôme mentore / mentorée pour 3 à 6 mois. Sessions régulières pour définir vos objectifs, choisir vos formations, préparer vos candidatures et avancer concrètement sur votre projet professionnel.",
      },
      {
        Icon: Users,
        title: "Mentorat de groupe",
        description:
          "Des sessions thématiques en petit groupe (orientation tech, reconversion vers la Data, préparation aux entretiens, etc.) animées par une mentore et une facilitatrice de la communauté.",
      },
      {
        Icon: GraduationCap,
        title: "Programme « Devenir mentore »",
        description:
          "Vous avez déjà de l'expérience en IA, Data ou Tech ? Rejoignez notre cercle de mentores : formation à la posture, outils, accompagnement et reconnaissance officielle de votre engagement.",
      },
    ],
    cta: { label: "Demander un mentorat", to: "/contact" },
  },
  {
    id: "evenements",
    eyebrow: "Événements",
    title: "Des temps forts pour la communauté",
    intro:
      "Tout au long de l'année, nous organisons des rencontres en ligne et en présentiel à N'Djamena pour créer des liens, partager des expériences et célébrer les femmes en IA.",
    Icon: Calendar,
    items: [
      {
        Icon: Calendar,
        title: "Meetups trimestriels",
        description:
          "Rencontres en présentiel à N'Djamena (et en ligne pour la diaspora) avec des intervenantes inspirantes, des panels, du networking et des ateliers découverte.",
      },
      {
        Icon: Trophy,
        title: "Hackathons & challenges",
        description:
          "Hackathons annuels autour de défis concrets (santé, éducation, climat) pour mettre l'IA au service du Tchad et de l'Afrique. Mentorat technique inclus pendant tout l'événement.",
      },
      {
        Icon: Heart,
        title: "Célébrations et journées dédiées",
        description:
          "Journée internationale des femmes, Ada Lovelace Day, anniversaire de ChadAI Women… des moments festifs pour mettre en lumière les parcours et les réussites de la communauté.",
      },
    ],
    cta: { label: "Voir tous les événements", to: "/evenements" },
  },
  {
    id: "initiatives",
    eyebrow: "Initiatives",
    title: "Agir pour l'inclusion des femmes dans l'IA",
    intro:
      "Au-delà des formations, ChadAI Women porte des initiatives structurantes pour faire évoluer durablement la place des femmes tchadiennes dans la tech et l'intelligence artificielle.",
    Icon: Lightbulb,
    items: [
      {
        Icon: GraduationCap,
        title: "Programme Jeunes Talents",
        description:
          "Sensibilisation des lycéennes et étudiantes aux métiers de l'IA et du numérique à travers des visites, ateliers découverte et témoignages dans les établissements scolaires.",
      },
      {
        Icon: Users,
        title: "Réseau Femmes en IA Tchad",
        description:
          "Un réseau professionnel qui connecte chercheuses, ingénieures, étudiantes et entrepreneures tchadiennes en IA, au pays comme dans la diaspora, pour favoriser la collaboration et la visibilité.",
      },
      {
        Icon: Lightbulb,
        title: "Plaidoyer et représentation",
        description:
          "Participation à des panels, rapports et événements pour porter la voix des femmes tchadiennes dans les discussions nationales et internationales sur l'IA, le numérique et l'innovation.",
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

const Programs = () => {
  const navigate = useNavigate();

  return (
    <>
      <PageHeader
        eyebrow="Nos Programmes"
        title="Des programmes pensés pour faire grandir chaque femme"
        description="Formations, mentorat, événements et initiatives : un parcours complet pour apprendre, se connecter et rayonner dans l'écosystème de l'intelligence artificielle."
      />

      {/* Quick nav */}
      <section className="bg-background border-b border-border/60">
        <div className="section-container py-6">
          <div className="flex flex-wrap justify-center gap-3">
            {programs.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/15 text-primary text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <p.Icon className="w-4 h-4" />
                {p.eyebrow}
              </a>
            ))}
          </div>
        </div>
      </section>

      {programs.map((program, idx) => (
        <section
          key={program.id}
          id={program.id}
          className={`scroll-mt-24 py-20 ${idx % 2 === 0 ? "bg-background" : "bg-card"}`}
        >
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mb-12"
            >
              <span className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-widest text-xs mb-4">
                <program.Icon className="w-4 h-4" />
                {program.eyebrow}
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-5 leading-tight">
                {program.title}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {program.intro}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {program.items.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-background border border-border/60 rounded-2xl p-7 shadow-sm hover:shadow-elevated hover:-translate-y-1 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                    <item.Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-primary mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-[15px]">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div>
              <Button
                onClick={() => navigate(program.cta.to)}
                className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground rounded-full px-6 py-3 font-semibold transition-all group"
              >
                {program.cta.label}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>
      ))}

      <CTASection />
    </>
  );
};

export default Programs;
