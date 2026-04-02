import { useState } from "react";
import { toast } from "sonner";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { ref, isVisible } = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      toast.error("Please enter a valid email.");
      return;
    }
    toast.success("Welcome to the Vrushabha Farms community! 🌿");
    setEmail("");
  };

  return (
    <section ref={ref} className="section-padding bg-muted">
      <div className={`container-narrow mx-auto max-w-2xl text-center ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
        <p className="text-sm text-accent font-semibold uppercase tracking-wider mb-3">Stay Connected</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">Join Our Organic Community</h2>
        <p className="text-muted-foreground font-body mb-8">Get updates on new batches, health tips, and exclusive offers delivered to your inbox.</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg border border-border bg-card text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <button type="submit" className="px-6 py-3 bg-gradient-olive text-primary-foreground font-body font-semibold rounded-lg hover:opacity-90 transition-opacity">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
