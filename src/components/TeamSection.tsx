import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, User } from "lucide-react";
import { cn } from "@/lib/utils";

type Member = {
  name: string;
  role: string;
  photo?: string;
  linkedin?: string;
  committee?: string;
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

const mentors: Member[] = [
  { name: "Prénom Nom", role: "Mentor — Data Science" },
  { name: "Prénom Nom", role: "Mentor — Machine Learning" },
  { name: "Prénom Nom", role: "Mentor — Développement Web" },
  { name: "Prénom Nom", role: "Mentor — Carrière Tech" },
];

const tabs = [
  { id: "bureau", label: "Bureau Exécutif", members: bureau, grouped: false },
  { id: "responsables", label: "Responsables", members: responsables, grouped: false },
  { id: "mentors", label: "Mentors", members: mentors, grouped: false },
] as const;

const MemberCard = ({ member, index }: { member: Member; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
    className="group bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-elevated transition-all hover:-translate-y-2"
  >
    {/* Photo */}
    <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center overflow-hidden">
      {member.photo ? (
        <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
      ) : (
        <User className="w-20 h-20 text-primary/40" strokeWidth={1.5} />
      )}
    </div>

    {/* Info */}
    <div className="p-6 text-center">
      <h3 className="font-display text-xl font-bold text-primary mb-1">
        {member.name}
      </h3>
      <p className="text-secondary font-semibold text-sm mb-4">{member.role}</p>
      <a
        href={member.linkedin || "#"}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`LinkedIn de ${member.name}`}
        className="inline-flex w-10 h-10 rounded-full bg-background items-center justify-center text-primary hover:bg-secondary hover:text-secondary-foreground transition-all hover:-translate-y-1"
      >
        <Linkedin className="w-4 h-4" />
      </a>
    </div>
  </motion.div>
);

const groupByCommittee = (members: Member[]) => {
  const groups: Record<string, Member[]> = {};
  members.forEach((m) => {
    const key = m.committee || "Autres";
    if (!groups[key]) groups[key] = [];
    groups[key].push(m);
  });
  return groups;
};

export const TeamSection = () => {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]["id"]>("bureau");
  const current = tabs.find((t) => t.id === activeTab)!;

  return (
    <section id="equipe" className="py-20 bg-background">
      <div className="section-container">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-6 py-3 rounded-full font-semibold transition-all",
                activeTab === tab.id
                  ? "gradient-accent text-accent-foreground shadow-glow"
                  : "bg-card text-foreground/70 hover:text-primary hover:-translate-y-0.5"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {current.grouped ? (
              <div className="space-y-16">
                {Object.entries(groupByCommittee(current.members)).map(
                  ([committee, members]) => (
                    <div key={committee}>
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
                        Comité <span className="text-secondary">{committee}</span>
                      </h3>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {members.map((m, i) => (
                          <MemberCard key={m.name + i} member={m} index={i} />
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {current.members.map((m, i) => (
                  <MemberCard key={m.name + i} member={m} index={i} />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};