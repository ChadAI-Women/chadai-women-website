import type { Variants } from "framer-motion";

/**
 * Réglages de viewport partagés pour les animations au scroll.
 * La marge négative en bas déclenche l'animation ~15 % AVANT que l'élément
 * entre dans l'écran : le contenu est déjà en place quand on arrive dessus,
 * ce qui évite l'effet « bloc blanc qui apparaît en retard » au scroll rapide.
 */
export const revealViewport = {
  once: true,
  margin: "0px 0px -15% 0px",
} as const;

/** Fondu + légère montée, réutilisable partout. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Conteneur qui fait apparaître ses enfants en cascade.
 * Les enfants utilisent la variante `fadeUp` (ou `staggerItem`).
 */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export const staggerItem = fadeUp;
