import Navbar from "@/components/Navbar";
import OurStory from "@/components/OurStory";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

const OurStoryPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CartDrawer />
      <div className="pt-20">
        <OurStory />
      </div>
      <Footer />
    </div>
  );
};

export default OurStoryPage;
