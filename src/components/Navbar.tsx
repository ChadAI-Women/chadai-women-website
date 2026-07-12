import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, NavLink, useNavigate } from "react-router-dom";

type NavItem = {
  label: string;
  to?: string;
  children?: { label: string; to: string }[];
};

const navItems: NavItem[] = [
  { label: "Accueil", to: "/" },
  {
    label: "À propos",
    children: [
      { label: "Qui sommes-nous", to: "/mission" },
      { label: "Notre Équipe", to: "/equipe" },
    ],
  },
  {
    label: "Programmes",
    children: [
      { label: "Formations", to: "/programmes#formations" },
      { label: "Mentorat", to: "/programmes#mentorat" },
      { label: "Événements", to: "/evenements" },
      { label: "Initiatives", to: "/programmes#initiatives" },
    ],
  },
  {
    label: "Ressources",
    children: [
      { label: "Blog", to: "/blog" },
      { label: "Galerie", to: "/galerie" },
      { label: "Ressources gratuites", to: "/ressources#ressources-gratuites" },
      { label: "FAQ", to: "/ressources#faq" },
    ],
  },
  { label: "Opportunités", to: "/joboard" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!openMenu) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("keydown", handleKey);
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openMenu]);

  const openDropdown = (label: string) => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpenMenu(label);
  };

  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), 150);
  };

  return (
    <nav
      ref={navRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-background/80 backdrop-blur-sm"
      )}
    >
      <div className="section-container">
        {/* Main bar */}
        <div className={cn("flex items-center justify-between transition-all duration-300", isScrolled ? "py-3" : "py-4")}>
          {/* Logo lockup */}
          <Link to="/" className="group shrink-0" aria-label="ChadAI Women">
            <span className="font-display text-3xl lg:text-4xl font-bold tracking-tight leading-none transition-opacity group-hover:opacity-90">
              <span className="text-primary">ChadAI</span>
              <span className="text-secondary"> Women</span>
            </span>
          </Link>

          {/* Primary nav */}
          <ul className="hidden lg:flex items-center gap-7 xl:gap-8">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={item.children ? () => openDropdown(item.label) : undefined}
                onMouseLeave={item.children ? scheduleClose : undefined}
              >
                {item.children ? (
                  <>
                    <button
                      type="button"
                      aria-haspopup="true"
                      aria-expanded={openMenu === item.label}
                      onClick={() =>
                        setOpenMenu(openMenu === item.label ? null : item.label)
                      }
                      className={cn(
                        "inline-flex items-center gap-1 text-[15px] font-medium transition-colors whitespace-nowrap",
                        openMenu === item.label
                          ? "text-secondary"
                          : "text-primary hover:text-secondary"
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform",
                          openMenu === item.label && "rotate-180"
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        "absolute left-1/2 -translate-x-1/2 top-full pt-3 transition-all duration-200 z-50",
                        openMenu === item.label
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      )}
                    >
                      <div className="min-w-[220px] bg-background rounded-xl shadow-elevated border border-primary/10 py-2">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.label}
                            to={child.to}
                            onClick={() => setOpenMenu(null)}
                            className={({ isActive }) =>
                              cn(
                                "block px-4 py-2.5 text-sm font-medium transition-colors",
                                isActive
                                  ? "text-secondary bg-secondary/5"
                                  : "text-primary hover:text-secondary hover:bg-primary/5"
                              )
                            }
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <NavLink
                    to={item.to!}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      cn(
                        "relative text-[15px] font-medium transition-colors group whitespace-nowrap",
                        isActive ? "text-secondary" : "text-primary hover:text-secondary"
                      )
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.label}
                        <span
                          className={cn(
                            "absolute -bottom-1 left-0 h-0.5 bg-secondary transition-transform origin-left",
                            isActive ? "w-full scale-x-100" : "w-full scale-x-0 group-hover:scale-x-100"
                          )}
                        />
                      </>
                    )}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:block">
            <a
              href="https://forms.gle/6KpoyXgepP8yueyK8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="default"
                className="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95"
              >
                Rejoignez-nous
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-card shadow-elevated p-6 animate-fade-in-up">
            <ul className="flex flex-col gap-2">
              {navItems.map((item) =>
                item.children ? (
                  <li key={item.label} className="border-b border-primary/10 pb-2">
                    <div className="text-[11px] uppercase tracking-widest text-secondary font-bold py-2">
                      {item.label}
                    </div>
                    {item.children.map((child) => (
                      <NavLink
                        key={child.label}
                        to={child.to}
                        className="text-foreground hover:text-secondary font-medium transition-colors block py-1.5 pl-3 text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </li>
                ) : (
                  <li key={item.label}>
                    <NavLink
                      to={item.to!}
                      end={item.to === "/"}
                      className="text-foreground hover:text-secondary font-medium transition-colors block py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                )
              )}
              <li className="pt-4">
                <a
                  href="https://forms.gle/6KpoyXgepP8yueyK8"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                >
                  <Button
                    variant="default"
                    className="w-full gradient-accent text-accent-foreground rounded-full font-semibold"
                  >
                    Rejoignez-nous
                  </Button>
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
