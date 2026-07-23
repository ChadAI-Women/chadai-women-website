import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Merci pour votre inscription !", {
        description: "Vous recevrez bientôt nos actualités.",
      });
      setEmail("");
    }
  };

  return (
    <section id="newsletter" className="py-20 gradient-primary">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <Mail className="w-16 h-16 text-secondary mx-auto mb-6" />

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Restez Connectée
          </h2>

          <p className="text-primary-foreground/80 text-lg mb-8">
            Inscrivez-vous à notre newsletter pour recevoir les dernières
            actualités, les dates des événements et des ressources exclusives.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
          >
            <Input
              type="email"
              placeholder="Votre adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-14 rounded-full px-6 bg-primary-foreground text-foreground border-0 placeholder:text-muted-foreground"
              required
            />
            <Button
              type="submit"
              size="lg"
              className="h-14 gradient-accent text-accent-foreground rounded-full px-8 font-semibold hover:shadow-glow transition-all hover:-translate-y-0.5"
            >
              <Send className="w-4 h-4 mr-2" />
              S'inscrire
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
