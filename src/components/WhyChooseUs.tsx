import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const reasons = [
  { title: "Indigenous Gir Cows", desc: "Our ghee comes exclusively from native Gir cows, known for producing the finest A2 milk rich in nutrients." },
  { title: "Traditional Bilona Method", desc: "We follow the centuries-old Bilona churning process — curd is hand-churned to extract butter, then slow-cooked into pure ghee." },
  { title: "Small Batch Production", desc: "Each batch is carefully crafted in limited quantities to ensure the highest quality and freshness." },
  { title: "100% Authentic & Traceable", desc: "Every jar is traceable to our farm. No middlemen, no adulteration — just pure, honest ghee." },
];

const cowImages = [
  { image: "/src/assets/cows3.jpeg", name: "Our Gir Cows" },
  { image: "/src/assets/cows1.jpeg", name: "Our Herd" },
  { image: "/src/assets/byri1.jpeg", name: "Byri" },
  { image: "/src/assets/bheema1.jpeg", name: "Bheema" },
  { image: "/src/assets/partha1.jpeg", name: "Partha" },
];

const WhyChooseUs = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? cowImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === cowImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          {/* Image Carousel */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl shadow-warm-lg" style={{ aspectRatio: "3/4" }}>
              {cowImages.map((item, index) => (
                <img
                  key={index}
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  width={1280}
                  height={720}
                  className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-foreground p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-foreground p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {cowImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-white w-6" : "bg-white/50"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>

            {/* Name Badge */}
            <div className="absolute bottom-4 left-4 bg-black/50 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
              <p className="text-sm font-semibold">{cowImages[currentIndex].name}</p>
            </div>
          </div>

          {/* Content */}
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
                    <p className="text-base text-muted-foreground mt-1 leading-relaxed">{r.desc}</p>
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
