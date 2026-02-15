"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppFloating() {
  return (
    <a
      href="https://wa.me/6580176492?text=Hi%20SG%20Corp%20Uniforms%2C%20I%20saw%20your%20website%20and%20would%20like%20a%20quote."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-sm font-medium text-white shadow-lg transition-all hover:bg-[#1ebe57] hover:shadow-xl md:bottom-6 md:right-6 animate-whatsapp-pulse"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={20} />
      <span className="hidden sm:inline">WhatsApp Us</span>
    </a>
  );
}
