import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const reviews = [
  { name: "Priya Sharma", location: "Mumbai", rating: 5, text: "Best ghee I've ever tasted! The aroma is incredible and you can tell it's pure. My family loves it." },
  { name: "Rajesh Patel", location: "Ahmedabad", rating: 5, text: "Tastes exactly like homemade ghee my grandmother used to make. Finally found authentic Bilona ghee!" },
  { name: "Dr. Ananya Reddy", location: "Bangalore", rating: 5, text: "As a nutritionist, I recommend A2 ghee to all my clients. Vrushabha Farms delivers the real deal." },
  { name: "Suresh Kumar", location: "Delhi", rating: 5, text: "The golden color and rich taste speaks for its quality. Worth every rupee. Will keep ordering!" },
  { name: "Meena Iyer", location: "Chennai", rating: 4, text: "Amazing quality ghee. My kids love the taste in everything. Delivery was prompt too." },
  { name: "Amit Joshi", location: "Pune", rating: 5, text: "Switched from store-bought ghee and the difference is night and day. Pure, aromatic, and healthy." },
];

const ReviewsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="reviews" ref={ref} className="section-padding bg-muted">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm text-accent font-semibold uppercase tracking-wider mb-3">Customer Love</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">What Our Customers Say</h2>
        </div>

        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ${isVisible ? "" : "opacity-0"}`}>
          {reviews.map((r, i) => (
            <div
              key={i}
              className={`bg-card rounded-xl p-6 shadow-warm hover:shadow-warm-lg transition-shadow duration-300 ${isVisible ? "animate-fade-up" : ""}`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="flex text-accent text-sm mb-3">
                {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 italic">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-display font-bold text-primary text-sm">{r.name[0]}</span>
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
