import { NewsletterSection } from "@/components/NewsletterSection";
import { CTASection } from "@/components/CTASection";
import { PageHeader } from "@/components/PageHeader";
import { Mail, Facebook, Linkedin, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Entrons en Contact"
        description="Une question, un projet, une envie de collaborer ? Nous sommes à votre écoute."
      />
      <section className="py-16 bg-card">
        <div className="section-container">
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
            <a href="mailto:contact@chadaiwomen.org" className="bg-background rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all hover:-translate-y-1 text-center">
              <Mail className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h3 className="font-display text-xl font-bold text-primary mb-2">Email</h3>
              <p className="text-muted-foreground">contact@chadaiwomen.org</p>
            </a>
            <div className="bg-background rounded-2xl p-8 shadow-soft text-center">
              <h3 className="font-display text-xl font-bold text-primary mb-4">Réseaux sociaux</h3>
              <div className="flex justify-center gap-3">
                <a href="https://web.facebook.com/chadaiwomen" target="_blank" rel="noopener noreferrer" aria-label="Facebook ChadAI Women" className="w-12 h-12 rounded-full gradient-accent text-accent-foreground flex items-center justify-center hover:-translate-y-1 transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/company/chadai-women" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn ChadAI Women" className="w-12 h-12 rounded-full gradient-accent text-accent-foreground flex items-center justify-center hover:-translate-y-1 transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/chadai_women" target="_blank" rel="noopener noreferrer" aria-label="Instagram ChadAI Women" className="w-12 h-12 rounded-full gradient-accent text-accent-foreground flex items-center justify-center hover:-translate-y-1 transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <NewsletterSection />
      <CTASection />
    </>
  );
};

export default Contact;
