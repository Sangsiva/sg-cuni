"use client";

import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "6580176492"; // same number
const DEFAULT_MESSAGE =
  "Hi SG Corp Uniforms, I saw your website and would like a quote.";

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  DEFAULT_MESSAGE
)}`;

export function WhatsAppFloating() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-medium text-white shadow-lg hover:bg-[#1ebe57]"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp Us</span>
    </a>
  );
}
