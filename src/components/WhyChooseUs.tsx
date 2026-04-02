import girCow from "@/assets/gir-cow.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const reasons = [
  { title: "Indigenous Gir Cows", desc: "Our ghee comes exclusively from native Gir cows, known for producing the finest A2 milk rich in nutrients." },
  { title: "Traditional Bilona Method", desc: "We follow the centuries-old Bilona churning process — curd is hand-churned to extract butter, then slow-cooked into pure ghee." },
  { title: "Small Batch Production", desc: "Each batch is carefully crafted in limited quantities to ensure the highest quality and freshness." },
  { title: "100% Authentic & Traceable", desc: "Every jar is traceable to our farm. No middlemen, no adulteration — just pure, honest ghee." },
];

const WhyChooseUs = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div>
            <img src={girCow} alt="Indigenous Gir Cow at Vrushabha Farms" loading="lazy" width={1280} height={720} className="rounded-2xl shadow-warm-lg" />
          </div>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-accent font-semibold uppercase tracking-wider mb-3">Why Choose Us</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Purity You Can Trust</h2>
            </div>
            <div className="space-y-5">
              {reasons.map((r, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary font-bold text-sm">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-foreground">{r.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
