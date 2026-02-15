"use client";

import Link from "next/link";
import { X } from "lucide-react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

export default function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white">
      <div className="container-custom flex h-16 items-center justify-between">
        <span className="text-xl font-semibold text-navy">SG Corp Uniforms</span>
        <button onClick={onClose} className="p-2 text-navy" aria-label="Close menu">
          <X size={24} />
        </button>
      </div>
      <nav className="container-custom flex flex-col gap-1 pt-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="rounded-lg px-4 py-3 text-lg font-medium text-navy transition-colors hover:bg-off-white"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={onClose}
          className="mt-4 rounded-lg bg-navy px-4 py-3 text-center text-lg font-medium text-white"
        >
          Get a Free Quote
        </Link>
      </nav>
    </div>
  );
}
