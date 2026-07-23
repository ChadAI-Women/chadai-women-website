import { Facebook, Linkedin, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-mark.png";

const columns: {
  title: string;
  links: { label: string; to?: string; href?: string; external?: boolean }[];
}[] = [
  {
    title: "À propos",
    links: [
      { label: "Qui sommes-nous", to: "/mission" },
      { label: "Notre Équipe", to: "/equipe" },
    ],
  },
  {
    title: "Programmes",
    links: [
      { label: "Formations", to: "/programmes#formations" },
      { label: "Mentorat", to: "/programmes#mentorat" },
      { label: "Événements", to: "/evenements" },
      { label: "Initiatives", to: "/programmes#initiatives" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { label: "Blog", to: "/blog" },
      { label: "Galerie", to: "/galerie" },
      { label: "Ressources gratuites", to: "/ressources#ressources-gratuites" },
      { label: "FAQ", to: "/ressources#faq" },
    ],
  },
  {
    title: "S'impliquer",
    links: [
      { label: "Bénévolat", href: "https://forms.gle/GHYYsHrTgSkD6z3R8", external: true },
      { label: "Devenir Mentor", to: "/contact" },
      { label: "Partenariats", to: "/contact" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: "https://web.facebook.com/chadaiwomen", label: "Facebook" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/chadai-women", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/chadai_women", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com/@chadaiwomen", label: "YouTube" },
];

export const Footer = () => {
  return (
    <footer id="contact">
      {/* White section */}
      <div className="bg-background pt-16 pb-12">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-[1.1fr_repeat(4,1fr)] gap-10 items-start">
            {/* Logo column */}
            <div className="md:col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left">
              <Link to="/" className="inline-flex flex-col items-center lg:items-start group">
                <img
                  src={logo}
                  alt="ChadAI Women"
                  className="w-32 h-32 object-contain -mb-1 drop-shadow-md"
                />
                <span className="font-display text-xl font-bold leading-none mt-2">
                  <span className="text-primary">ChadAI</span>
                  <span className="text-secondary"> Women</span>
                </span>
              </Link>
              <div className="flex flex-wrap gap-3 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all hover:-translate-y-1"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="font-display text-base font-bold text-secondary-ink mb-5">
                  {col.title}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/75 hover:text-primary hover:pl-1 transition-all text-sm"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          to={link.to!}
                          className="text-foreground/75 hover:text-primary hover:pl-1 transition-all text-sm"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blue bar */}
      <div className="bg-primary py-5">
        <div className="section-container text-center">
          <p className="text-primary-foreground text-sm">
            © {new Date().getFullYear()} ChadAI Women. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};
