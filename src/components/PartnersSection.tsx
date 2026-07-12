import { motion } from "framer-motion";

import googleLogo from "@/assets/partners/google.png";
import microsoftLogo from "@/assets/partners/microsoft.png";
import unescoLogo from "@/assets/partners/unesco.png";
import unwomenLogo from "@/assets/partners/unwomen.png";
import worldbankLogo from "@/assets/partners/worldbank.png";
import unicefLogo from "@/assets/partners/unicef.png";
import afdbLogo from "@/assets/partners/afdb.png";
import orangeLogo from "@/assets/partners/orange.png";

const partners = [
  { name: "Google for Startups", logo: googleLogo },
  { name: "Microsoft", logo: microsoftLogo },
  { name: "UNESCO", logo: unescoLogo },
  { name: "ONU Femmes", logo: unwomenLogo },
  { name: "Banque Mondiale", logo: worldbankLogo },
  { name: "UNICEF", logo: unicefLogo },
  { name: "African Development Bank", logo: afdbLogo },
  { name: "Orange Digital Center", logo: orangeLogo },
];

export const PartnersSection = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Ensemble pour l'impact
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-2 mb-4">
            Nos Partenaires &amp; Soutiens
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nous collaborons avec des organisations, entreprises, universités et communautés qui partagent notre vision d'un écosystème technologique plus inclusif.
          </p>
        </motion.div>
      </div>

      {/* Single scrolling row */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="flex gap-10 animate-scroll-slow">
          {[...partners, ...partners].map((partner, index) => (
            <PartnerCard key={`row-${index}`} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PartnerCard = ({ partner }: { partner: typeof partners[0] }) => {
  return (
    <div className="flex-shrink-0 w-64 bg-cream border border-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 group flex flex-col items-center justify-center gap-3 h-36">
      <img
        src={partner.logo}
        alt={partner.name}
        className="max-h-14 max-w-[200px] object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
      />
      <span className="text-xs text-muted-foreground font-medium text-center leading-tight">
        {partner.name}
      </span>
    </div>
  );
};
