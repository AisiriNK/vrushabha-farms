import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919876543210"; // Replace with actual number (country code + number, no +)
const WHATSAPP_MESSAGE = encodeURIComponent("Hi! I'm interested in Vrushabha Farms A2 Gir Cow Ghee.");

const WhatsAppButton = () => {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform duration-200"
    >
      <MessageCircle size={28} fill="white" />
    </a>
  );
};

export default WhatsAppButton;
