import { motion } from "framer-motion";
import { Linkedin, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type Member = {
  name: string;
  role: string;
  photo?: string;
  linkedin?: string;
  expertise?: string;
};

const bureau: Member[] = [
  { name: "Prénom Nom", role: "Présidente / Coordinatrice Générale" },
  { name: "Prénom Nom", role: "Vice-Présidente / Co-Coordinatrice" },
  { name: "Prénom Nom", role: "Secrétaire Générale" },
  { name: "Prénom Nom", role: "Trésorière" },
];

const responsables: Member[] = [
  { name: "Prénom Nom", role: "Responsable Communication" },
  { name: "Prénom Nom", role: "Responsable Adjointe Communication" },
  { name: "Prénom Nom", role: "Responsable Programmes" },
  { name: "Prénom Nom", role: "Responsable Adjointe Programmes" },
  { name: "Prénom Nom", role: "Responsable Formation" },
  { name: "Prénom Nom", role: "Responsable Mentorat" },
  { name: "Prénom Nom", role: "Responsable Partenariats" },
  { name: "Prénom Nom", role: "Responsable Recherche & Projets" },
];

const mentores: Member[] = [
  { name: "Prénom Nom", role: "Mentore", expertise: "Data Science" },
  { name: "Prénom Nom", role: "Mentore", expertise: "Machine Learning" },
  { name: "Prénom Nom", role: "Mentore", expertise: "Développement Web" },
  { name: "Prénom Nom", role: "Mentore", expertise: "Carrière Tech" },
];

const initialsOf = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const MemberCard = ({
  member,
  index,
  size = "md",
}: {
  member: Member;
  index: number;
  size?: "md" | "lg";
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
    className="group bg-card rounded-t-[999px] rounded-b-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all hover:-translate-y-2"
  >
    {/* Portrait en arche */}
    <div
      className={cn(
        "aspect-[4/5] flex items-center justify-center overflow-hidden",
        index % 2 === 0 ? "bg-primary/10" : "bg-secondary/15"
      )}
    >
      {member.photo ? (
        <img
          src={member.photo}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      ) : (
        <span
          className={cn(
            "font-display font-bold text-primary/60",
            size === "lg" ? "text-6xl" : "text-4xl"
          )}
        >
          {initialsOf(member.name)}
        </span>
      )}
    </div>

    {/* Infos */}
    <div className={cn("text-center", size === "lg" ? "p-6" : "p-4")}>
      <h3
        className={cn(
          "font-display font-bold text-primary mb-1",
          size === "lg" ? "text-xl" : "text-base"
        )}
      >
        {member.name}
      </h3>
      <p
        className={cn(
          "text-secondary font-semibold",
          size === "lg" ? "text-sm" : "text-xs"
        )}
      >
        {member.role}
      </p>
      {member.expertise && (
        <span className="inline-block mt-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
          {member.expertise}
        </span>
      )}
      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`LinkedIn de ${member.name}`}
          className="mt-3 inline-flex w-9 h-9 rounded-full bg-background items-center justify-center text-primary hover:bg-secondary hover:text-secondary-foreground transition-all hover:-translate-y-1"
        >
          <Linkedin className="w-4 h-4" />
        </a>
      )}
    </div>
  </motion.div>
);

export const TeamSection = () => {
  return (
    <section id="equipe" className="py-20 bg-background">
      <div className="section-container">
        {/* Bureau Exécutif — grandes cartes en tête */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {bureau.map((m, i) => (
            <MemberCard key={m.role} member={m} index={i} size="lg" />
          ))}
        </div>

        {/* Responsables puis mentores — grille compacte continue */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6 mt-6 md:mt-8">
          {[...responsables, ...mentores].map((m, i) => (
            <MemberCard key={m.expertise ?? m.role} member={m} index={i} />
          ))}
        </div>

        {/* Rejoindre l'équipe */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 border-2 border-dashed border-secondary/50 rounded-3xl p-8 md:p-10 text-center"
        >
          <span className="inline-flex w-12 h-12 rounded-full bg-secondary/10 items-center justify-center mb-4">
            <Plus className="w-6 h-6 text-secondary" />
          </span>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-primary mb-3">
            Et si c'était vous ?
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            L'équipe grandit avec la communauté. Rejoignez-nous comme bénévole
            ou partagez votre expérience en devenant mentore.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground rounded-full px-6 font-semibold"
            >
              <a
                href="https://forms.gle/GHYYsHrTgSkD6z3R8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Devenir bénévole
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full px-6 font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link to="/contact">Devenir mentore</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
