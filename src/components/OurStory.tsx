import farmLandscape from "@/assets/farm-landscape.jpg";
import bilonaProcess from "@/assets/bilona-process.jpg";
import girCow from "@/assets/gir-cow.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stories = [
  {
    image: farmLandscape,
    title: "Our Farm",
    text: "Nestled in the lush pastures of Gujarat, Vrushabha Farms is home to a free-roaming herd of indigenous Gir cows. Our cows graze on natural, pesticide-free grasslands, ensuring the purest milk.",
    alt: "Vrushabha Farms green pastures",
  },
  {
    image: girCow,
    title: "Our Gir Cows",
    text: "The Gir breed is one of India's most prized indigenous cattle, known for producing A2 beta-casein milk — easier to digest and packed with nutrients that modern breeds simply can't match.",
    alt: "Indigenous Gir cow at Vrushabha Farms",
  },
  {
    image: bilonaProcess,
    title: "The Bilona Process",
    text: "Our ghee is made the way it has been for thousands of years. Fresh curd is hand-churned using a wooden churner (Bilona), the butter is collected, and slow-cooked over a low flame until pure golden ghee emerges.",
    alt: "Traditional Bilona churning process",
  },
  {
    image: farmLandscape,
    title: "Healthy & Happy Animals",
    text: "We believe that the quality of ghee starts with the well-being of our animals. Our herd enjoys spacious grazing areas, natural food, and personalized care from our dedicated farmers. Every animal on Vrushabha Farms is treated with respect and love.",
    alt: "Healthy Gir cows grazing at Vrushabha Farms",
  },
  {
    image: girCow,
    title: "Pure A2 Ghee",
    text: "Our A2 ghee is rich in nutrients and easier to digest. Each batch is carefully produced to maintain the highest standards of purity. We never use any additives or preservatives — just pure, golden ghee made from the milk of our beloved Gir cows.",
    alt: "Pure golden A2 ghee from Vrushabha Farms",
  },
];

const OurStory = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="story" ref={ref} className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm text-accent font-semibold uppercase tracking-wider mb-3">Our Journey</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">From Farm to Your Table</h2>
        </div>

        <div className="space-y-16 sm:space-y-20">
          {stories.map((s, i) => (
            <div
              key={i}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""} ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <img src={s.image} alt={s.alt} loading="lazy" width={1280} height={720} className="rounded-2xl shadow-warm-lg w-full" />
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">{s.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStory;
