import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBadges from "@/components/TrustBadges";
import ProductSection from "@/components/ProductSection";
import BenefitsSection from "@/components/BenefitsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ReviewsSection from "@/components/ReviewsSection";

import UrgencySection from "@/components/UrgencySection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CartDrawer />
      <HeroSection />
      <TrustBadges />
      <ProductSection />
      <BenefitsSection />
      <WhyChooseUs />
      <ReviewsSection />
      <OurStory />
      <UrgencySection />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
