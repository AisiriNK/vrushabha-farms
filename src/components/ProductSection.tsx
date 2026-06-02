import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import gheeHero from "@/assets/ghee-hero.jpg";
import { useCart } from "@/contexts/CartContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { initiatePayment } from "@/utils/razorpay";
import { toast } from "sonner";

const variants = [
  { id: "a2-ghee-500ml", weight: "500ml", price: 1250 },
  { id: "a2-ghee-1l", weight: "1 Litre", price: 2500 },
];

const ProductSection = () => {
  const [selected, setSelected] = useState(1);
  const [qty, setQty] = useState(1);
  const { addItem } = useCart();
  const { ref, isVisible } = useScrollAnimation();

  const variant = variants[selected];

  const handleAdd = () => {
    addItem({ id: variant.id, name: "A2 Bilona Gir Cow Ghee", price: variant.price, image: gheeHero, weight: variant.weight }, qty);
    toast.success("Added to cart!");
  };

  const handleBuyNow = () => {
    initiatePayment({
      amount: variant.price * qty,
      productName: `A2 Bilona Gir Cow Ghee - ${variant.weight} x${qty}`,
      onSuccess: () => toast.success("Payment Successful! 🎉"),
      onFailure: () => toast.error("Payment was cancelled."),
    });
  };

  return (
    <section id="product" ref={ref} className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          {/* Image */}
          <div className="relative flex justify-center">
            <div className="absolute -inset-6 bg-accent/5 rounded-3xl" />
            <img src={gheeHero} alt="A2 Bilona Gir Cow Ghee" loading="lazy" width={1024} height={1024} className="relative w-full max-w-sm rounded-2xl shadow-warm-lg" />
            <div className="absolute top-4 left-4 px-3 py-1.5 bg-accent text-accent-foreground text-xs font-bold rounded-full uppercase tracking-wider">
              Bestseller
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-accent font-semibold uppercase tracking-wider mb-2">Vrushabha Farms</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">A2 Bilona Gir Cow Ghee</h2>
            </div>

            <ul className="space-y-2 text-sm text-muted-foreground font-body">
              <li className="flex items-center gap-2"><span className="text-primary">✓</span> Made from pure A2 Gir Cow Milk</li>
              <li className="flex items-center gap-2"><span className="text-primary">✓</span> Traditional Bilona churning process</li>
              <li className="flex items-center gap-2"><span className="text-primary">✓</span> Rich, aromatic golden texture</li>
              <li className="flex items-center gap-2"><span className="text-primary">✓</span> No preservatives, no chemicals</li>
            </ul>

            {/* Variant selector */}
            <div>
              <p className="text-sm font-semibold text-foreground mb-3">Choose Size</p>
              <div className="flex gap-3">
                {variants.map((v, i) => (
                  <button
                    key={v.id}
                    onClick={() => { setSelected(i); setQty(1); }}
                    className={`px-4 py-2.5 rounded-lg border-2 text-sm font-semibold transition-all ${
                      i === selected
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border text-muted-foreground hover:border-primary/50"
                    }`}
                  >
                    {v.weight}
                  </button>
                ))}
              </div>
            </div>

            {/* Price + Qty */}
            <div className="flex items-end gap-6">
              <div>
                <p className="text-sm text-muted-foreground">Price</p>
                <p className="font-display text-3xl font-bold text-foreground">₹{variant.price}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Quantity</p>
                <div className="flex items-center gap-3 border border-border rounded-lg px-3 py-1.5">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} className="text-lg text-muted-foreground hover:text-foreground">−</button>
                  <span className="w-8 text-center font-semibold">{qty}</span>
                  <button onClick={() => setQty(qty + 1)} className="text-lg text-muted-foreground hover:text-foreground">+</button>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button onClick={handleAdd} className="flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <ShoppingCart size={18} /> Add to Cart
              </button>
              <button onClick={handleBuyNow} className="px-8 py-3 bg-gradient-olive text-primary-foreground font-semibold rounded-lg shadow-warm hover:shadow-warm-lg hover:scale-105 transition-all duration-300">
                Buy Now — ₹{(variant.price * qty).toLocaleString()}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
