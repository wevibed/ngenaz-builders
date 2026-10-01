import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/site";
export default function FloatingWhatsApp(){return <a className="floating-whatsapp" href={WHATSAPP_LINK} target="_blank" rel="noreferrer" aria-label="Chat with Ngenaz Builders on WhatsApp"><span className="whatsapp-ping"/><MessageCircle size={29}/></a>}
