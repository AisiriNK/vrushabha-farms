import { MessageCircle } from "lucide-react";
import { useState } from "react";

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "919036169033";
const WHATSAPP_MESSAGE = encodeURIComponent(
  import.meta.env.VITE_WHATSAPP_MESSAGE || "Hi! I'm interested in Vrushabha Farms A2 Gir Cow Ghee."
);

const WhatsAppButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col items-end gap-3">
      {isExpanded && (
        <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-xs animate-fade-up">
          <h3 className="font-display font-bold text-foreground mb-3">Chat with us!</h3>
          <p className="text-sm text-muted-foreground mb-4">Have questions? We're here to help. Message us on WhatsApp for instant response.</p>
          <div className="space-y-2">
            <p className="text-sm font-semibold text-foreground">📱 +91 90361 69033</p>
            <p className="text-xs text-muted-foreground">Available 9 AM - 6 PM IST</p>
          </div>
        </div>
      )}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        className="flex items-center justify-center w-20 h-20 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 hover:shadow-green-500/50 transition-all duration-300 hover:bg-[#20BA61]"
      >
        <MessageCircle size={40} fill="white" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
