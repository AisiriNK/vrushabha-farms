import { useCart } from "@/contexts/CartContext";
import gheeHero from "@/assets/ghee-hero.jpg";

const UrgencySection = () => {
  const { addItem } = useCart();

  const handleBuy = () => {
    addItem({
      id: "a2-ghee-500ml",
      name: "A2 Bilona Gir Cow Ghee",
      price: 899,
      image: gheeHero,
      weight: "500ml",
    });
  };

  return (
    <section className="section-padding bg-gradient-olive relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.2) 0%, transparent 60%)" }} />
      <div className="container-narrow mx-auto text-center relative">
        <p className="text-primary-foreground/80 text-sm uppercase tracking-widest mb-3 font-body">Don't Miss Out</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">Limited Stock Available</h2>
        <p className="text-primary-foreground/80 font-body max-w-lg mx-auto mb-8">
          Each batch of our A2 Bilona Ghee is handcrafted in small quantities. Once sold out, the next batch takes 2–3 weeks. Order now to secure yours.
        </p>
        <button onClick={handleBuy} className="px-10 py-4 bg-accent text-accent-foreground font-body font-bold rounded-lg shadow-warm-lg hover:scale-105 transition-all duration-300 text-lg">
          Order Now — ₹899
        </button>
      </div>
    </section>
  );
};

export default UrgencySection;
