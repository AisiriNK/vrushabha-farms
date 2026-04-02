import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useToast } from "@/hooks/use-toast";

const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

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
      toast({ title: "Message sent!", description: "We'll get back to you soon." });
      formRef.current.reset();
    } catch {
      toast({ title: "Failed to send", description: "Please try again or reach out via WhatsApp.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CartDrawer />
      <WhatsAppButton />

      <div className="pt-24 pb-16 section-padding">
        <div className="container-narrow mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <p className="text-sm text-accent font-semibold uppercase tracking-wider mb-3">Get In Touch</p>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">Contact Us</h1>
            <p className="font-body text-muted-foreground">Have a question or want to place a bulk order? We'd love to hear from you.</p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 bg-card rounded-2xl p-6 sm:p-10 shadow-warm">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="user_name" className="block text-sm font-body font-medium text-foreground mb-2">Name</label>
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
                <label htmlFor="user_email" className="block text-sm font-body font-medium text-foreground mb-2">Email</label>
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
            </div>

            <div>
              <label htmlFor="user_phone" className="block text-sm font-body font-medium text-foreground mb-2">Phone (optional)</label>
              <input
                type="tel"
                id="user_phone"
                name="user_phone"
                maxLength={15}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                placeholder="+91 98765 43210"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-body font-medium text-foreground mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                required
                maxLength={1000}
                rows={5}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition resize-none"
                placeholder="How can we help you?"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full bg-primary text-primary-foreground font-body font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>

          <div className="mt-12 grid sm:grid-cols-3 gap-6 text-center">
            <div className="bg-card rounded-2xl p-6 shadow-warm">
              <p className="font-display font-bold text-foreground mb-1">Email</p>
              <p className="text-sm text-muted-foreground">hello@vrushabha.farm</p>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-warm">
              <p className="font-display font-bold text-foreground mb-1">Phone</p>
              <p className="text-sm text-muted-foreground">+91 98765 43210</p>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-warm">
              <p className="font-display font-bold text-foreground mb-1">Location</p>
              <p className="text-sm text-muted-foreground">Gujarat, India</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
