import { Heart, Shield, Flame, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
  { icon: Heart, title: "Improves Digestion", desc: "A2 ghee stimulates digestive enzymes, promoting healthy gut function and nutrient absorption." },
  { icon: Shield, title: "Boosts Immunity", desc: "Packed with antioxidants and fat-soluble vitamins A, D, E & K that strengthen your immune system." },
  { icon: Flame, title: "Rich in Healthy Fats", desc: "Contains essential fatty acids like CLA and Omega-3 that support heart health and brain function." },
  { icon: Sparkles, title: "Ayurvedic Benefits", desc: "Revered in Ayurveda for balancing doshas, improving memory, and nourishing all body tissues." },
];

const BenefitsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="benefits" ref={ref} className="section-padding bg-muted">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm text-accent font-semibold uppercase tracking-wider mb-3">Why A2 Ghee?</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">The Golden Benefits</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`bg-card rounded-xl p-6 shadow-warm hover:shadow-warm-lg hover:-translate-y-1 transition-all duration-300 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <b.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{b.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
