import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/site";

export default function MobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom)] bg-gradient-to-t from-background via-background/90 to-transparent">
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center gap-2 h-14 bg-accent text-accent-foreground text-[0.72rem] uppercase tracking-[0.2em] font-semibold shadow-lg"
      >
        <MessageCircle className="w-4 h-4" />
        WhatsApp Us
      </a>
    </div>
  );
}