import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Comment puis-je rejoindre ChadAI Women ?",
    answer:
      "Il vous suffit de remplir notre formulaire d'inscription en ligne, de nous suivre sur les réseaux sociaux et de rejoindre nos groupes WhatsApp/Telegram. L'adhésion est gratuite !",
  },
  {
    question: "Les formations sont-elles payantes ?",
    answer:
      "La majorité de nos webinaires et ressources sont gratuits. Certains programmes avancés ou ateliers spécialisés peuvent nécessiter une contribution symbolique pour couvrir les frais.",
  },
  {
    question: "Je n'ai aucune expérience en programmation, puis-je rejoindre ?",
    answer:
      "Absolument ! Nos programmes sont conçus pour tous les niveaux, du débutant complet à l'expérimenté. Nous vous accompagnons à chaque étape de votre apprentissage.",
  },
  {
    question: "Comment puis-je devenir mentor ou formatrice ?",
    answer:
      "Si vous avez des compétences en IA, Data Science ou développement et souhaitez contribuer à la communauté, contactez-nous via notre formulaire. Nous recherchons activement des mentors !",
  },
  {
    question: "Les événements sont-ils uniquement en ligne ?",
    answer:
      "La plupart de nos événements sont en ligne pour permettre à toutes les femmes tchadiennes, y compris la diaspora, de participer. Nous organisons aussi des rencontres en présentiel à N'Djamena.",
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-background scroll-mt-24">
      <div className="section-container max-w-3xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-secondary-ink font-semibold uppercase tracking-widest text-sm mb-4">
            FAQ
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Questions Fréquentes
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card rounded-2xl overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-primary hover:bg-background/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{faq.question}</span>
                <span className="flex-shrink-0 ml-4">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-secondary" />
                  ) : (
                    <Plus className="w-5 h-5 text-secondary" />
                  )}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
