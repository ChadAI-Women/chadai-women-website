import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Users, Video, GraduationCap, Rocket } from "lucide-react";

const stats = [
  { icon: Users, value: 150, suffix: "+", label: "Membres actifs" },
  { icon: Video, value: 24, suffix: "", label: "Webinaires en 2026" },
  { icon: GraduationCap, value: 100, suffix: "+", label: "Femmes formées" },
  { icon: Rocket, value: 10, suffix: "+", label: "Projets lancés" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export const StatsSection = () => {
  return (
    <section className="gradient-primary py-16">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -15% 0px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary/20 mb-4">
                <stat.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-display text-3xl lg:text-4xl font-bold text-secondary mb-2">
                <Counter target={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-primary-foreground/80 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
