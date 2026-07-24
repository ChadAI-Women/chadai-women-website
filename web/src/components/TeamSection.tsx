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

const chadAILinkedIn = "https://www.linkedin.com/company/chadai-women";

const bureau: Member[] = [
  { name: "Présidence", role: "Coordination générale", linkedin: chadAILinkedIn },
  { name: "Vice-présidence", role: "Co-coordination", linkedin: chadAILinkedIn },
  { name: "Secrétariat général", role: "Organisation & suivi", linkedin: chadAILinkedIn },
  { name: "Trésorerie", role: "Gestion financière", linkedin: chadAILinkedIn },
];

const responsables: Member[] = [
  { name: "Communication", role: "Responsable de comité", linkedin: chadAILinkedIn },
  { name: "Communication adjointe", role: "Responsable adjointe", linkedin: chadAILinkedIn },
  { name: "Programmes", role: "Responsable de comité", linkedin: chadAILinkedIn },
  { name: "Programmes adjoints", role: "Responsable adjointe", linkedin: chadAILinkedIn },
  { name: "Formation", role: "Responsable de comité", linkedin: chadAILinkedIn },
  { name: "Mentorat", role: "Responsable de comité", linkedin: chadAILinkedIn },
  { name: "Partenariats", role: "Responsable de comité", linkedin: chadAILinkedIn },
  { name: "Recherche & Projets", role: "Responsable de comité", linkedin: chadAILinkedIn },
];

const mentors: Member[] = [
  { name: "Mentorat Data", role: "Mentor", expertise: "Data Science", linkedin: chadAILinkedIn },
  { name: "Mentorat IA", role: "Mentor", expertise: "Machine Learning", linkedin: chadAILinkedIn },
  { name: "Mentorat Web", role: "Mentor", expertise: "Développement Web", linkedin: chadAILinkedIn },
  { name: "Mentorat Carrière", role: "Mentor", expertise: "Carrière Tech", linkedin: chadAILinkedIn },
];

const initialsOf = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const MemberCard = ({
  member,
  index,
}: {
  member: Member;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "0px 0px -15% 0px" }}
    transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
    className="group flex h-full flex-col overflow-hidden rounded-b-2xl rounded-t-[999px] bg-card shadow-soft transition-all hover:-translate-y-2 hover:shadow-elevated"
  >
    <div
      className={cn(
        "relative flex aspect-[4/5] items-center justify-center overflow-hidden",
        index % 2 === 0 ? "bg-primary/10" : "bg-secondary/15"
      )}
    >
      {member.photo ? (
        <img
          src={member.photo}
          alt={member.name}
          className="h-full w-full object-cover"
        />
      ) : (
        <span
          className="font-display text-4xl font-bold text-primary/60"
        >
          {initialsOf(member.name)}
        </span>
      )}
    </div>

    <div
      className="flex min-h-[172px] flex-1 flex-col items-center p-4 text-center"
    >
      <h3
        className="mb-1 font-display text-base font-bold text-primary"
      >
        {member.name}
      </h3>
      <p className="font-semibold text-secondary-ink text-xs">
        {member.role}
      </p>
      {member.expertise && (
        <span className="mt-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          {member.expertise}
        </span>
      )}
      {!member.expertise && <span className="mt-2 h-6" aria-hidden />}
      {!member.photo && (
        <p className="mt-3 text-xs text-muted-foreground">
          Profil en cours de confirmation
        </p>
      )}
      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`LinkedIn de ${member.name}`}
          className="mt-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:bg-secondary hover:text-secondary-foreground"
        >
          <Linkedin className="h-4 w-4" />
        </a>
      )}
    </div>
  </motion.div>
);

export const TeamSection = () => {
  return (
    <section id="equipe" className="bg-background py-20">
      <div className="section-container">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-6">
          {bureau.map((member, index) => (
            <MemberCard key={member.role} member={member} index={index} />
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-5 md:mt-8 md:grid-cols-4 md:gap-6">
          {[...responsables, ...mentors].map((member, index) => (
            <MemberCard
              key={`${member.name}-${member.expertise ?? member.role}`}
              member={member}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-3xl border-2 border-dashed border-secondary/50 p-8 text-center md:p-10"
        >
          <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
            <Plus className="h-6 w-6 text-secondary" />
          </span>
          <h3 className="mb-3 font-display text-2xl font-bold text-primary md:text-3xl">
            Et si c'était vous ?
          </h3>
          <p className="mx-auto mb-6 max-w-xl text-muted-foreground">
            L'équipe grandit avec la communauté. Rejoignez-nous comme bénévole
            ou partagez votre expérience en devenant mentor.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              className="rounded-full bg-primary px-6 font-semibold text-primary-foreground hover:bg-secondary hover:text-secondary-foreground"
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
              className="rounded-full border-2 border-primary px-6 font-semibold text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link to="/contact">Devenir mentor</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
