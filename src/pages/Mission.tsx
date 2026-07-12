import { motion } from "framer-motion";
import {
  Eye,
  Target,
  Heart,
  Sparkles,
  Users,
  Video,
  GraduationCap,
  Rocket,
  Award,
  Lightbulb,
  Shield,
  Trophy,
  Code2,
  Check,
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import logo from "@/assets/logo-mark.png";

const quiSommesNous = [
  "ChadAI Women est la première communauté dédiée à l'autonomisation des femmes tchadiennes dans l'intelligence artificielle, les technologies numériques et l'innovation. Elle rassemble étudiantes, professionnelles, chercheuses et entrepreneures autour d'une même envie : apprendre, collaborer et innover.",
  "Formation, mentorat, sensibilisation : nous créons un environnement inclusif où chaque femme peut développer son potentiel et devenir actrice de la transformation numérique, au Tchad comme en Afrique.",
];

const keyFigures = [
  { icon: Users, value: "150+", label: "Membres" },
  { icon: GraduationCap, value: "100+", label: "Femmes formées" },
  { icon: Video, value: "24", label: "Webinaires" },
  { icon: Rocket, value: "10+", label: "Projets accompagnés" },
];

const objectifs = [
  {
    title: "Promouvoir l'éducation des filles et des femmes",
    description:
      "Encourager les jeunes filles et les femmes à s'orienter vers les filières STEM et les métiers de l'intelligence artificielle.",
  },
  {
    title: "Démystifier l'intelligence artificielle",
    description:
      "Rendre l'IA accessible à toutes et tous en vulgarisant ses concepts et son impact : contenus pédagogiques, conférences, sensibilisation.",
  },
  {
    title: "Construire un réseau solide",
    description:
      "Connecter les femmes tchadiennes de la tech — recherche, data, développement, entrepreneuriat — pour favoriser collaborations et partage d'expériences.",
  },
  {
    title: "Renforcer les compétences",
    description:
      "Organiser formations, bootcamps et hackathons pour développer les compétences techniques et professionnelles de nos membres.",
  },
  {
    title: "Promouvoir une IA responsable",
    description:
      "Sensibiliser aux enjeux éthiques, à la diversité et à l'utilisation responsable de l'IA, pour une technologie bénéfique à tous.",
  },
];

const valeurs = [
  {
    icon: Users,
    title: "Inclusion",
    description:
      "Chaque femme, quel que soit son parcours, son niveau d'études ou son expérience, mérite une place dans l'écosystème de l'intelligence artificielle.",
  },
  {
    icon: Heart,
    title: "Sororité",
    description:
      "Nous encourageons l'entraide, le partage de connaissances et le soutien mutuel afin que chacune évolue dans un environnement bienveillant.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Nous visons la qualité, le professionnalisme et l'amélioration continue dans toutes nos activités, formations et projets.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Nous encourageons la créativité, l'expérimentation et le développement de solutions innovantes répondant aux défis du Tchad et du continent africain.",
  },
  {
    icon: Shield,
    title: "Responsabilité",
    description:
      "Nous promouvons une intelligence artificielle éthique, inclusive et responsable, respectueuse des droits humains et créatrice d'impact positif.",
  },
];

const ateliersThemes = [
  "Intelligence artificielle",
  "Machine Learning",
  "Data Science",
  "Deep Learning",
  "NLP",
  "Vision par ordinateur",
  "Programmation",
  "Outils numériques",
];

const activites = [
  {
    icon: Users,
    title: "Cercles d'apprentissage",
    description:
      "Des sessions d'apprentissage collaboratif en ligne et en présentiel permettant aux membres d'acquérir progressivement de nouvelles compétences.",
  },
  {
    icon: Code2,
    title: "Ateliers pratiques",
    description: "Des formations techniques portant notamment sur :",
    tags: ateliersThemes,
  },
  {
    icon: Video,
    title: "Webinaires",
    description:
      "Des conférences animées par des expertes, chercheurs, professionnelles et entrepreneures venant du Tchad, d'Afrique et du reste du monde.",
  },
  {
    icon: GraduationCap,
    title: "Mentorat",
    description:
      "Un accompagnement personnalisé permettant aux membres de bénéficier des conseils de mentors expérimentés pour leurs études, leurs carrières et leurs projets.",
  },
  {
    icon: Trophy,
    title: "Compétitions technologiques",
    description:
      "La préparation et la participation à des concours, challenges et compétitions en intelligence artificielle afin de valoriser les talents tchadiens.",
  },
  {
    icon: Rocket,
    title: "Hackathons",
    description:
      "L'organisation de hackathons favorisant le travail en équipe, l'innovation et la création de solutions technologiques répondant aux besoins réels de nos communautés.",
  },
];

const avantages = [
  "Développer des compétences en intelligence artificielle et en technologies numériques",
  "Participer à des formations et événements de qualité",
  "Échanger avec une communauté dynamique et bienveillante",
  "Bénéficier d'opportunités de mentorat",
  "Développer son réseau professionnel",
  "Participer à des projets innovants à fort impact",
  "Découvrir des opportunités de stages, d'emplois, de bourses et de concours",
  "Contribuer au développement de l'écosystème de l'IA au Tchad",
];

const SectionHeader = ({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center max-w-2xl mx-auto mb-14"
  >
    <span className="inline-block text-secondary font-semibold uppercase tracking-widest text-sm mb-4">
      {eyebrow}
    </span>
    <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
      {title}
    </h2>
    {intro && <p className="text-muted-foreground text-lg">{intro}</p>}
  </motion.div>
);

const About = () => {
  return (
    <>
      <PageHeader
        eyebrow="À propos"
        title="À propos de ChadAI Women"
        description="Découvrez qui nous sommes, ce qui nous anime et la vision qui guide notre communauté."
      />

      {/* Qui sommes-nous — texte + visuel institutionnel */}
      <section id="qui-sommes-nous" className="scroll-mt-24 py-20 bg-card">
        <div className="section-container">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-widest text-sm mb-4">
                <Sparkles className="w-4 h-4" />
                Qui sommes-nous ?
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">
                La première communauté tchadienne dédiée aux femmes en IA
              </h2>
              <div className="text-muted-foreground leading-relaxed text-base md:text-lg space-y-4">
                {quiSommesNous.map((para) => (
                  <p key={para.slice(0, 30)}>{para}</p>
                ))}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
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
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-secondary/25 blur-[100px] rounded-full" />
                <div className="absolute inset-10 bg-primary/15 blur-[80px] rounded-full" />
                <img
                  src={logo}
                  alt="ChadAI Women"
                  className="relative w-full max-w-sm mx-auto object-contain drop-shadow-2xl"
                />
              </div>
              <p className="mt-6 font-display text-lg text-primary italic tracking-wide">
                Empowering Chadian Women in AI &amp; Tech
              </p>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Mission & Vision — duo bleu / or */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <motion.div
              id="mission"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="scroll-mt-24 gradient-primary rounded-3xl p-8 md:p-10 text-primary-foreground"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-secondary" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Notre Mission
              </h2>
              <div className="space-y-3 text-primary-foreground/90 leading-relaxed">
                <p>
                  Inspirer, former, connecter et autonomiser les femmes
                  tchadiennes en IA et en technologies, au Tchad comme dans la
                  diaspora.
                </p>
                <p>
                  Offrir à chacune les ressources, les compétences et les
                  opportunités pour réussir dans les métiers du numérique.
                </p>
              </div>
            </motion.div>

            <motion.div
              id="vision"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="scroll-mt-24 gradient-accent rounded-3xl p-8 md:p-10 text-secondary-foreground"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Notre Vision
              </h2>
              <div className="space-y-3 text-secondary-foreground/90 leading-relaxed">
                <p>
                  Faire du Tchad un pôle émergent de talents féminins en
                  intelligence artificielle, où les femmes jouent un rôle majeur
                  dans la recherche, l'innovation et l'entrepreneuriat.
                </p>
                <p>
                  Bâtir une génération de femmes leaders dont les solutions ont
                  un impact local, régional et international.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Objectifs — cartes numérotées */}
      <section id="objectifs" className="scroll-mt-24 py-20 bg-card">
        <div className="section-container">
          <SectionHeader
            eyebrow="Nos Objectifs"
            title="Cinq objectifs stratégiques"
            intro="Pour concrétiser cette vision, ChadAI Women poursuit plusieurs objectifs stratégiques."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectifs.map((obj, i) => (
              <motion.div
                key={obj.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-background rounded-2xl p-7 border border-border/60 shadow-sm hover:shadow-elevated hover:-translate-y-1 transition-all"
              >
                <span className="font-display text-4xl font-bold text-secondary/40 leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl font-bold text-primary mt-4 mb-3 leading-snug">
                  {obj.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-[15px]">
                  {obj.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section id="valeurs" className="scroll-mt-24 py-20 bg-background">
        <div className="section-container">
          <SectionHeader
            eyebrow="Nos Valeurs"
            title="Ce qui guide chacune de nos initiatives"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {valeurs.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card rounded-2xl p-7 shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-5">
                  <v.icon className="w-6 h-6 text-secondary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary mb-2">
                  {v.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-[15px]">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activités */}
      <section id="activites" className="scroll-mt-24 py-20 bg-card">
        <div className="section-container">
          <SectionHeader
            eyebrow="Nos Activités"
            title="Tout au long de l'année"
            intro="Diverses activités destinées à développer les compétences de nos membres et à renforcer l'écosystème de l'IA."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activites.map((act, i) => (
              <motion.div
                key={act.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-background rounded-2xl p-7 border border-border/60 shadow-sm hover:shadow-elevated hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <act.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary mb-3">
                  {act.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-[15px]">
                  {act.description}
                </p>
                {act.tags && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {act.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-secondary/10 text-primary text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi rejoindre — bande bleue */}
      <section
        id="pourquoi-rejoindre"
        className="scroll-mt-24 py-20 gradient-primary"
      >
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="inline-block text-secondary font-semibold uppercase tracking-widest text-sm mb-4">
              Pourquoi nous rejoindre ?
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
              Rejoindre ChadAI Women, c'est…
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4 max-w-4xl mx-auto">
            {avantages.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: i % 2 === 0 ? -10 : 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="flex items-start gap-3"
              >
                <span className="mt-0.5 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-secondary" />
                </span>
                <p className="text-primary-foreground/90 leading-relaxed">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rejoignez-nous — message final avant le CTA */}
      <section id="rejoignez-nous" className="scroll-mt-24 py-20 bg-card">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">
              Votre place est parmi nous
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Débutante, étudiante, chercheuse, professionnelle ou
              entrepreneure : votre place est au sein de ChadAI Women.
              Ensemble, faisons émerger une nouvelle génération de femmes
              leaders en intelligence artificielle.
            </p>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default About;
