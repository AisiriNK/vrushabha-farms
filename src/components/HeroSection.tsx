import gheeHero from "@/assets/ghee-hero.jpg";
import { useCart } from "@/contexts/CartContext";

const HeroSection = () => {
  const { addItem } = useCart();

  const handleBuyNow = () => {
    addItem({
      id: "a2-ghee-500ml",
      name: "A2 Bilona Gir Cow Ghee",
      price: 2500,
      image: gheeHero,
      weight: "1000ml",
    });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      <div className="container-narrow mx-auto section-padding pt-28 sm:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="space-y-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 border border-accent/30">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-gentle" />
              <span className="text-xs font-body font-semibold text-accent tracking-wide uppercase">Limited Batch Production</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Pure A2 Gir Cow Ghee –{" "}
              <span className="text-gradient-gold">Crafted the Traditional Way</span>
            </h1>

            <p className="font-body text-lg text-muted-foreground max-w-lg leading-relaxed">
              Made using the ancient <strong className="text-foreground">Bilona method</strong>, our ghee is 100% pure, farm-direct, and free from chemicals. Experience the golden goodness trusted for generations.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button onClick={handleBuyNow} className="px-8 py-3.5 bg-gradient-olive text-primary-foreground font-body font-semibold rounded-lg shadow-warm hover:shadow-warm-lg hover:scale-105 transition-all duration-300">
                Buy Now — ₹2500
              </button>
              <a href="#benefits" className="px-8 py-3.5 border-2 border-primary text-primary font-body font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                Learn More
              </a>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-secondary border-2 border-card flex items-center justify-center text-xs font-bold text-muted-foreground">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex justify-center lg:justify-end" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl" />
              <img src={gheeHero} alt="Premium A2 Gir Cow Ghee jar by Vrushabha Farms" width={1024} height={1024} className="relative w-full max-w-md rounded-2xl shadow-warm-lg" />
              <div className="absolute -bottom-4 -left-4 bg-card px-4 py-3 rounded-xl shadow-warm border border-border">
                <p className="text-xs text-muted-foreground">Farm Fresh</p>
                <p className="font-display font-bold text-foreground">100% Pure A2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
