import { Shield, Leaf, Truck, FlaskConical, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const badges = [
  { icon: Leaf, label: "100% Organic", desc: "Pure & Natural" },
  { icon: FlaskConical, label: "Bilona Method", desc: "Traditional Process" },
  { icon: Truck, label: "Farm Direct", desc: "No Middlemen" },
  { icon: Shield, label: "No Chemicals", desc: "Zero Additives" },
  { icon: Award, label: "Lab Tested", desc: "Quality Certified" },
];

const TrustBadges = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-card border-y border-border">
      <div className="container-narrow mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {badges.map((badge, i) => (
            <div
              key={badge.label}
              className={`flex flex-col items-center text-center gap-3 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <badge.icon size={24} className="text-primary" />
              </div>
              <div>
                <p className="font-display text-xl font-semibold text-foreground">{badge.label}</p>
                <p className="text-l text-muted-foreground">{badge.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
