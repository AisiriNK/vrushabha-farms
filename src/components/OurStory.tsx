import { useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import farmLandscape from "@/assets/farm-landscape.jpeg";
import cows3 from "@/assets/cows3.jpeg";
import cows1 from "@/assets/cows1.jpeg";
import cows2 from "@/assets/cows2.jpeg";
import byri1 from "@/assets/byri1.jpeg";
import gowri4 from "@/assets/gowri4.jpeg";
import ganga1 from "@/assets/ganga1.jpeg";
import bheema1 from "@/assets/bheema1.jpeg";
import bheema2 from "@/assets/bheema2.jpeg";
import partha1 from "@/assets/partha1.jpeg";
import partha2 from "@/assets/partha2.jpeg";
import bilonaProcess from "@/assets/bilona-process.jpg";
import feeding_calf from "@/assets/feeding_calf.jpeg";

const stories = [
  {
    image: farmLandscape,
    title: "Our Farm",
    text: "Nestled in the lush pastures of Shivamogga, Vrushabha Farms is home to a free-roaming herd of indigenous Gir cows. Our cows graze on natural, pesticide-free grasslands, ensuring the purest milk.",
    alt: "Vrushabha Farms green pastures",
  },
  {
    image: cows3,
    title: "Our Gir Cows",
    text: "The Gir breed is one of India's most prized indigenous cattle, known for producing A2 beta-casein milk — easier to digest and packed with nutrients that modern breeds simply can't match.",
    alt: "Indigenous Gir cow at Vrushabha Farms",
  },
  {
    image: cows1,
    title: "Our Herd",
    text: "Our beautiful herd of Gir cows represents the heart of Vrushabha Farms. Each cow is cherished and cared for with the utmost dedication, ensuring their health and happiness directly translates to the quality of our milk and ghee.",
    alt: "Gir cows herd at Vrushabha Farms",
  },
  {
    image: cows2,
    title: "Pasture to Plate",
    text: "Our cows spend their days grazing freely in our organic pastures. This natural lifestyle, combined with clean water and fresh air, produces the nutrient-rich milk that becomes our premium A2 ghee.",
    alt: "Gir cows grazing in pasture",
  },
  {
    image: byri1,
    title: "Byri – Our Milk Provider",
    text: "Meet Byri, our beloved milk-giving cow. Her rich, creamy A2 milk is the foundation of our finest ghee batches. Byri is treated with love and care, as we believe her well-being directly reflects in the quality of her milk.",
    alt: "Byri, our milk-giving Gir cow",
  },
  {
    image: bheema1,
    title: "Bheema – Our Guardian",
    text: "Meet Bheema, our strong and gentle bull. He plays a vital role in our farm's ecosystem, helping us maintain our pure bloodline of indigenous Gir cattle. Bheema is as much a part of the Vrushabha family as every other animal here. As our farm's protector and patriarch, Bheema embodies the strength and grace of the Gir breed. His presence ensures the continuation of our pure, indigenous cattle line for generations to come.",
    alt: "Bheema, our male Gir bull",
  },
   {
    image: ganga1,
    title: "Ganga – Our Gentle Soul",
    text: "Meet Ganga, our gentle and nurturing female cow. Her compassionate nature and high-quality A2 milk make her one of our most treasured members. Ganga embodies the perfect balance of strength and gentleness that defines the Gir breed.",
    alt: "Ganga, our female Gir cow",
   },
   {
    image: gowri4,
    title: "Gowri's Grace",
    text: "Every liter of milk from Gowri carries the essence of pure nutrition. We protect and nourish her because we understand that the best ghee comes from the happiest and healthiest cows on our farm. She is the heart of our dairy production.",
    alt: "Gowri at Vrushabha Farms",
  },
  {
    image: partha1,
    title: "Partha – Our Little Pride",
    text: "Meet Partha, our adorable calf! Born and raised at Vrushabha Farms, Partha represents the future of our herd. We nurture him with the same love and care we give all our animals, watching him grow into a strong member of the Vrushabha family.",
    alt: "Partha, our calf at Vrushabha Farms",
  },
  {
    image: partha2,
    title: "Future of Vrushabha",
    text: "Young Partha is growing strong with every passing day. Fed on the same pristine pastures and fresh water as his family, he will one day contribute to our mission of providing pure, A2 ghee to families across India.",
    alt: "Partha grazing with the herd",
  },
  {
    image: cows3,
    title: "Our Farm Family",
    text: "These beautiful moments capture the essence of Vrushabha Farms — a place where cattle are family. Every cow, every bull, every calf is known by name, cherished with affection, and treated with the respect they deserve.",
    alt: "Happy Gir cows at Vrushabha Farms",
  },
  {
    image: bilonaProcess,
    title: "The Bilona Process",
    text: "Our ghee is made the way it has been for thousands of years. Fresh curd is hand-churned using a wooden churner (Bilona), the butter is collected, and slow-cooked over a low flame until pure golden ghee emerges.",
    alt: "Traditional Bilona churning process",
  },
];

const OurStory = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    setShouldRender(true);
  }, []);

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
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""} ${shouldRender || isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <img src={s.image} alt={s.alt} loading="lazy" width={1280} height={720} className="rounded-2xl shadow-warm-lg w-full" style={s.image === feeding_calf ? { transform: 'rotate(-90deg)', transformOrigin: 'center', width: '400px', height: 'auto', maxWidth: '100%', margin: '20 auto', display: 'block' } : {}} />
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
