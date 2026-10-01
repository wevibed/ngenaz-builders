import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/site";

export default function MobileCTA() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Ngenaz Builders on WhatsApp"
      className="whatsapp-float"
    >
      <span className="whatsapp-pulse" />
      <MessageCircle className="relative z-10 w-6 h-6" strokeWidth={2.3} />
      <span className="absolute -top-2 -right-1 w-3 h-3 rounded-full bg-[#25D366] border-2 border-white/80" />
    </a>
  );
}
