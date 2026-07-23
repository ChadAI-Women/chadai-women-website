import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const CTASection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 gradient-accent">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-accent-foreground mb-6">
            Prête à Rejoindre l'Aventure ?
          </h2>

          <p className="text-accent-foreground/90 text-lg md:text-xl mb-8">
            Ensemble, façonnons l'avenir technologique du Tchad. Rejoignez
            ChadAI Women dès aujourd'hui et commencez votre parcours dans l'IA.
          </p>

          <Button
            size="lg"
            className="bg-primary-foreground text-primary rounded-full px-10 py-6 text-lg font-bold hover:shadow-elevated transition-all hover:-translate-y-1 group"
            onClick={() => navigate('/contact')}
          >
            Rejoindre la Communauté
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
