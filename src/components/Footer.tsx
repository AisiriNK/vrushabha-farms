const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-narrow mx-auto section-padding pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="font-display text-xl font-bold mb-4">Vrushabha <span className="text-accent">Farms</span></h3>
            <p className="text-sm text-background/60 leading-relaxed">
              Premium A2 Gir Cow Ghee made with love using the traditional Bilona method. Pure, natural, farm-direct.
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li><a href="#hero" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#product" className="hover:text-accent transition-colors">Products</a></li>
              <li><a href="#benefits" className="hover:text-accent transition-colors">Benefits</a></li>
              <li><a href="/our-story" className="hover:text-accent transition-colors">Our Story</a></li>
              <li><a href="/contact" className="hover:text-accent transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold mb-4 uppercase tracking-wider">Policies</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li>hello@vrushabha.farm</li>
              <li>+91 98765 43210</li>
              <li>Gujarat, India</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/10 pt-6 text-center text-xs text-background/40">
          © {new Date().getFullYear()} Vrushabha Farms. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
