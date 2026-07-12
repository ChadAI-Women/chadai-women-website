import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=900&q=80",
    alt: "Femme africaine en session de formation tech",
  },
  {
    src: "https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=900&q=80",
    alt: "Atelier de code collaboratif entre femmes",
  },
  {
    src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=80",
    alt: "Session de mentorat en programmation",
  },
  {
    src: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=900&q=80",
    alt: "Panel et conférence tech au féminin",
  },
  {
    src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=80",
    alt: "Jeune femme africaine développeuse IA",
  },
  {
    src: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=900&q=80",
    alt: "Communauté ChadAI Women",
  },
];

export const HomeGallerySection = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-widest mb-3">
            Galerie
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Nos actions en images
          </h2>
          <p className="text-foreground/75 text-lg leading-relaxed">
            Découvrez quelques moments marquants de nos formations, webinaires, ateliers,
            panels et initiatives en faveur des femmes tchadiennes dans l'IA et la technologie.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl bg-background shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                <p className="text-primary-foreground font-medium text-sm">{photo.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/galerie"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-secondary text-secondary-foreground font-semibold shadow-md hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-0.5"
          >
            Voir toute la galerie
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};