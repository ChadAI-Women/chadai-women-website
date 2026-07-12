import { motion } from "framer-motion";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export const PageHeader = ({ eyebrow, title, description }: PageHeaderProps) => {
  return (
    <section className="pt-32 pb-12 gradient-hero">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {eyebrow && (
            <span className="inline-block text-secondary font-semibold uppercase tracking-widest text-sm mb-4">
              {eyebrow}
            </span>
          )}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-muted-foreground text-lg">{description}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
};
