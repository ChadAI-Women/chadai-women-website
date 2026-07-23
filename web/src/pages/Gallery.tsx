import { motion } from "framer-motion";
import { PageHeader } from "@/components/PageHeader";
import { galleryPhotos } from "@/data/galleryPhotos";

const Gallery = () => {
  return (
    <>
      <PageHeader
        eyebrow="Galerie"
        title="Nos Moments en Images"
        description="Découvrez l'énergie et la diversité de notre communauté à travers nos événements, ateliers et rencontres."
      />
      <section className="py-20 bg-card">
        <div className="section-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryPhotos.map((photo, i) => (
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-3xl shadow-soft hover:shadow-elevated transition-all"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-primary-foreground font-medium">{photo.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
