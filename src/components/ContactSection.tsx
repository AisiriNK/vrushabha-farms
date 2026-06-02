import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";
const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "919036169033";
const WHATSAPP_MESSAGE = encodeURIComponent(
  import.meta.env.VITE_WHATSAPP_MESSAGE || "Hi! I'm interested in Vrushabha Farms A2 Gir Cow Ghee."
);

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const [sending, setSending] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSending(true);
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      toast({
        title: "Message Sent! ✅",
        description: "Thank you! We'll get back to you soon.",
        duration: 5000,
      });
      formRef.current.reset();
    } catch {
      toast({
        title: "Failed to Send ❌",
        description: "Please try again or reach out via WhatsApp.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="section-padding bg-muted">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm text-accent font-semibold uppercase tracking-wider mb-3">Get In Touch</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Contact Us</h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">Have questions or want to place a bulk order? We're here to help!</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className={`space-y-6 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
            <div className="bg-card rounded-2xl p-8 shadow-warm hover:shadow-warm-lg transition-shadow">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground mb-2">Email</h3>
                  <p className="text-muted-foreground">Info@vrushabhafarms.com</p>
                  <p className="text-base text-muted-foreground/70 mt-1">Response time: Within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-warm hover:shadow-warm-lg transition-shadow">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-[#25D366]/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone size={24} className="text-[#25D366]" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground mb-2">WhatsApp & Phone</h3>
                  <p className="text-muted-foreground">+91 90361 69033</p>
                  <p className="text-base text-muted-foreground/70 mt-1">Available 9 AM - 6 PM IST</p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#20BA61] transition-colors text-base font-semibold"
                  >
                    <MessageCircle size={18} />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-warm hover:shadow-warm-lg transition-shadow">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground mb-2">Address</h3>
                  <p className="text-muted-foreground">Shivamogga, Karnataka</p>
                  <p className="text-base text-muted-foreground/70 mt-1">India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={isVisible ? "animate-fade-up" : "opacity-0"} style={{ animationDelay: "0.2s" }}>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 bg-card rounded-2xl p-8 sm:p-10 shadow-warm">
              <div>
                <label htmlFor="user_name" className="block text-sm font-body font-semibold text-foreground mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  required
                  maxLength={100}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="user_email" className="block text-sm font-body font-semibold text-foreground mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  required
                  maxLength={255}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="user_phone" className="block text-sm font-body font-semibold text-foreground mb-3">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="user_phone"
                  name="user_phone"
                  maxLength={15}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                  placeholder="+91 90361 69033"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-body font-semibold text-foreground mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  maxLength={1000}
                  rows={5}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full bg-gradient-olive text-primary-foreground font-body font-semibold py-3.5 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {sending ? "Sending..." : "Send Message"}
              </button>

              <p className="text-sm text-muted-foreground text-center">
                We'll respond to your message within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
