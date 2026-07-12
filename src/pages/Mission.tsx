import { motion } from "framer-motion";
import {
  Eye,
  Target,
  ListChecks,
  Heart,
  BookOpen,
  Sparkles,
  Users,
  Video,
  GraduationCap,
  Rocket,
  Star,
  UserPlus,
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import logo from "@/assets/logo-mark.png";

type SectionItem = {
  title: string;
  description: string;
  sub?: string[];
};

type Section = {
  id: string;
  icon: typeof Sparkles;
  title: string;
  body?: string;
  intro?: string;
  items?: SectionItem[];
  list?: string[];
};

const sections: Section[] = [
  {
    id: "qui-sommes-nous",
    icon: Sparkles,
    title: "Qui sommes-nous ?",
    body: "ChadAI Women est la première communauté dédiée à l'autonomisation des femmes tchadiennes dans le domaine de l'intelligence artificielle, des technologies numériques et de l'innovation.\n\nNotre communauté rassemble des étudiantes, professionnelles, chercheuses, entrepreneures et passionnées de technologie qui souhaitent apprendre, collaborer, développer des projets innovants et contribuer à l'essor de l'intelligence artificielle au Tchad et en Afrique.\n\nÀ travers nos programmes de formation, de mentorat, de sensibilisation et d'accompagnement, nous créons un environnement inclusif où chaque femme peut développer son potentiel et devenir actrice de la transformation numérique.",
  },
  {
    id: "mission",
    icon: Target,
    title: "Notre Mission",
    body: "Notre mission est d'inspirer, former, connecter et autonomiser les femmes tchadiennes dans le domaine de l'intelligence artificielle et des technologies, qu'elles vivent au Tchad ou dans la diaspora.\n\nNous souhaitons offrir à chaque femme les ressources, les compétences et les opportunités nécessaires pour réussir dans les métiers de l'IA, de la Data Science et du numérique.",
  },
  {
    id: "vision",
    icon: Eye,
    title: "Notre Vision",
    body: "Nous aspirons à faire du Tchad un pôle émergent de talents féminins en intelligence artificielle, où les femmes jouent un rôle majeur dans la recherche, l'innovation, l'entrepreneuriat et le développement de solutions technologiques répondant aux défis de notre société.\n\nNotre ambition est de bâtir une nouvelle génération de femmes leaders capables de concevoir des solutions innovantes ayant un impact local, régional et international.",
  },
  {
    id: "objectifs",
    icon: ListChecks,
    title: "Nos Objectifs",
    intro:
      "Pour concrétiser cette vision, ChadAI Women poursuit plusieurs objectifs stratégiques.",
    items: [
      {
        title: "Promouvoir l'éducation des filles et des femmes",
        description:
          "Encourager davantage de jeunes filles et de femmes à s'orienter vers les filières STEM (Science, Technologie, Ingénierie et Mathématiques) ainsi que vers les métiers de l'intelligence artificielle.",
      },
      {
        title: "Démystifier l'intelligence artificielle",
        description:
          "Rendre l'IA accessible à tous en vulgarisant ses concepts, ses applications et son impact à travers des contenus pédagogiques, des conférences et des actions de sensibilisation.",
      },
      {
        title: "Construire un réseau solide",
        description:
          "Créer un réseau de femmes tchadiennes évoluant dans les domaines de l'IA, de la recherche, de la Data Science, du développement logiciel, de l'entrepreneuriat et de l'innovation afin de favoriser les collaborations et le partage d'expériences.",
      },
      {
        title: "Renforcer les compétences",
        description:
          "Organiser régulièrement des formations, ateliers pratiques, bootcamps, conférences et hackathons permettant aux membres d'acquérir des compétences techniques et professionnelles.",
      },
      {
        title: "Promouvoir une IA responsable",
        description:
          "Sensibiliser aux enjeux éthiques, à la diversité, à l'inclusion et à l'utilisation responsable de l'intelligence artificielle afin de contribuer au développement d'une technologie bénéfique pour tous.",
      },
    ],
  },
  {
    id: "valeurs",
    icon: Heart,
    title: "Nos Valeurs",
    intro:
      "Nos actions reposent sur des valeurs fortes qui guident chacune de nos initiatives.",
    items: [
      {
        title: "Inclusion",
        description:
          "Nous croyons que chaque femme, quel que soit son parcours, son niveau d'études ou son expérience, mérite une place dans l'écosystème de l'intelligence artificielle.",
      },
      {
        title: "Sororité",
        description:
          "Nous encourageons l'entraide, le partage de connaissances et le soutien mutuel entre nos membres afin que chacune puisse évoluer dans un environnement bienveillant.",
      },
      {
        title: "Excellence",
        description:
          "Nous visons la qualité, le professionnalisme et l'amélioration continue dans toutes nos activités, formations et projets.",
      },
      {
        title: "Innovation",
        description:
          "Nous encourageons la créativité, l'expérimentation et le développement de solutions innovantes répondant aux défis du Tchad et du continent africain.",
      },
      {
        title: "Responsabilité",
        description:
          "Nous promouvons une intelligence artificielle éthique, inclusive et responsable, respectueuse des droits humains et créatrice d'impact positif.",
      },
    ],
  },
  {
    id: "activites",
    icon: BookOpen,
    title: "Nos Activités",
    intro:
      "Afin d'accomplir notre mission, ChadAI Women organise tout au long de l'année diverses activités destinées à développer les compétences de ses membres et à renforcer l'écosystème de l'IA.",
    items: [
      {
        title: "Cercles d'apprentissage",
        description:
          "Des sessions d'apprentissage collaboratif en ligne et en présentiel permettant aux membres d'acquérir progressivement de nouvelles compétences.",
      },
      {
        title: "Ateliers pratiques",
        description: "Des formations techniques portant notamment sur :",
        sub: [
          "l'intelligence artificielle",
          "le Machine Learning",
          "la Data Science",
          "le Deep Learning",
          "le traitement du langage naturel (NLP)",
          "la vision par ordinateur",
          "la programmation",
          "les outils numériques",
        ],
      },
      {
        title: "Webinaires",
        description:
          "Des conférences animées par des expertes, chercheurs, professionnelles et entrepreneures venant du Tchad, d'Afrique et du reste du monde.",
      },
      {
        title: "Mentorat",
        description:
          "Un accompagnement personnalisé permettant aux membres de bénéficier des conseils de mentors expérimentés pour leurs études, leurs carrières et leurs projets.",
      },
      {
        title: "Compétitions technologiques",
        description:
          "La préparation et la participation à des concours, challenges et compétitions en intelligence artificielle afin de valoriser les talents tchadiens.",
      },
      {
        title: "Hackathons",
        description:
          "L'organisation de hackathons favorisant le travail en équipe, l'innovation et la création de solutions technologiques répondant aux besoins réels de nos communautés.",
      },
    ],
  },
  {
    id: "pourquoi-rejoindre",
    icon: Star,
    title: "Pourquoi rejoindre ChadAI Women ?",
    intro: "Rejoindre ChadAI Women, c'est :",
    list: [
      "Développer des compétences en intelligence artificielle et en technologies numériques",
      "Participer à des formations et événements de qualité",
      "Échanger avec une communauté dynamique et bienveillante",
      "Bénéficier d'opportunités de mentorat",
      "Développer son réseau professionnel",
      "Participer à des projets innovants à fort impact",
      "Découvrir des opportunités de stages, d'emplois, de bourses et de concours",
      "Contribuer au développement de l'écosystème de l'intelligence artificielle au Tchad",
    ],
  },
  {
    id: "rejoignez-nous",
    icon: UserPlus,
    title: "Rejoignez-nous",
    body: "Que vous soyez débutante, étudiante, chercheuse, professionnelle ou entrepreneure, votre place est au sein de ChadAI Women.\n\nEnsemble, construisons une communauté forte, innovante et inclusive, capable de faire émerger une nouvelle génération de femmes leaders en intelligence artificielle et de contribuer activement au développement technologique du Tchad et de l'Afrique.",
  },
];

const keyFigures = [
  { icon: Users, value: "150+", label: "Membres" },
  { icon: GraduationCap, value: "100+", label: "Femmes formées" },
  { icon: Video, value: "24", label: "Webinaires" },
  { icon: Rocket, value: "10+", label: "Projets accompagnés" },
];

const About = () => {
  return (
    <>
      <PageHeader
        eyebrow="À propos"
        title="À propos de ChadAI Women"
        description="Découvrez qui nous sommes, ce qui nous anime et la vision qui guide notre communauté."
      />

      <section className="py-20 bg-card">
        <div className="section-container">
          <div className="grid lg:grid-cols-[1fr_360px] gap-12 lg:gap-16 items-start">
            {/* LEFT — Content */}
            <div className="space-y-12">
              {sections.map((s, i) => (
                <motion.div
                  key={s.id}
                  id={s.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="border-l-4 border-secondary pl-6"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <s.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-primary">
                      {s.title}
                    </h2>
                  </div>
                  {s.body && (
                    <div className="text-muted-foreground leading-relaxed text-base md:text-lg space-y-3">
                      {s.body.split("\n\n").map((para, idx) => (
                        <p key={idx}>{para}</p>
                      ))}
                    </div>
                  )}
                  {s.intro && (
                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-4">
                      {s.intro}
                    </p>
                  )}
                  {s.items && (
                    <div className="space-y-5 mt-2">
                      {s.items.map((item) => (
                        <div key={item.title}>
                          <h3 className="font-display text-lg font-bold text-primary mb-1">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                          {item.sub && (
                            <ul className="grid sm:grid-cols-2 gap-1.5 mt-2">
                              {item.sub.map((subItem) => (
                                <li
                                  key={subItem}
                                  className="flex items-center gap-2 text-muted-foreground"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                                  {subItem}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                  {s.list && (
                    <ul className="space-y-2 mt-2">
                      {s.list.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {s.id === "qui-sommes-nous" && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                      {keyFigures.map((k) => (
                        <div
                          key={k.label}
                          className="bg-background rounded-xl p-4 border border-border text-center"
                        >
                          <k.icon className="w-5 h-5 text-secondary mx-auto mb-2" />
                          <div className="font-display text-2xl font-bold text-primary leading-none">
                            {k.value}
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            {k.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* RIGHT — Logo as institutional visual */}
            <motion.aside
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:sticky lg:top-28 text-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-secondary/25 blur-[100px] rounded-full" />
                <div className="absolute inset-10 bg-primary/15 blur-[80px] rounded-full" />
                <img
                  src={logo}
                  alt="ChadAI Women"
                  className="relative w-full max-w-md mx-auto object-contain drop-shadow-2xl"
                />
              </div>
              <p className="mt-8 font-display text-xl text-primary italic tracking-wide">
                Empowering Chadian Women in AI &amp; Tech
              </p>
            </motion.aside>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default About;
