import { motion } from "framer-motion";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const heroImage =
  "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=1200&q=80";

export const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center pt-24 pb-16 gradient-hero relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/30 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-primary/20 blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Première communauté tchadienne en IA
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6"
            >
              Autonomiser les{" "}
              <span className="text-secondary">Femmes Tchadiennes</span> en
              Intelligence Artificielle
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-muted-foreground mb-4 max-w-xl"
            >
              Première communauté tchadienne dédiée aux femmes en IA et
              technologie
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-muted-foreground mb-8 max-w-xl"
            >
              Nous formons, inspirons et accompagnons les femmes tchadiennes
              pour qu'elles deviennent des leaders dans le domaine de
              l'intelligence artificielle et façonnent l'avenir technologique
              de l'Afrique.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="gradient-accent text-accent-foreground rounded-full px-8 font-semibold hover:shadow-glow transition-all hover:-translate-y-1 group"
                onClick={() => navigate('/programmes')}
              >
                Découvrir nos programmes
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-1"
                onClick={() => navigate('/evenements')}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Prochain événement
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              <img
                src={heroImage}
                alt="ChadAI Women - Femmes africaines en technologie"
                className="w-full h-auto rounded-3xl shadow-elevated animate-float"
              />
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl gradient-primary opacity-80" />
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-xl gradient-accent opacity-80" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
