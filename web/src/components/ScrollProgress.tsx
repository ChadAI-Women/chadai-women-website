import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Fine barre de progression de lecture, tout en haut de la page.
 * Se remplit aux couleurs or/bleu au fil du défilement.
 */
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-gradient-to-r from-secondary via-secondary to-primary"
      aria-hidden
    />
  );
};
