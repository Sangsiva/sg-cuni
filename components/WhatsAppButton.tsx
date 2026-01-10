"use client";

import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "6580176492"; // TODO: replace with your real Singapore number (digits only, no +)

const DEFAULT_MESSAGE =
  "Hi SG Corp Uniforms, I saw your website and would like a quote for 50 pcs of corporate T-shirts.";

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  DEFAULT_MESSAGE
)}`;

interface WhatsAppButtonProps {
  label?: string;
  className?: string;
}

export function WhatsAppButton({
  label = "WhatsApp Us",
  className,
}: WhatsAppButtonProps) {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <Button
        variant="outline"
        className="border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white"
      >
        {label}
      </Button>
    </a>
  );
}
