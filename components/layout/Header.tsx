"use client";

import { useState } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { Menu } from "lucide-react";

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-white shadow-nav">
      <div className="container-custom flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-semibold text-navy">
          SG Corp Uniforms
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate transition-colors hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-lg bg-navy px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-navy-light"
          >
            Get a Quote
          </Link>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/contact"
            className="rounded-lg bg-navy px-4 py-2 text-sm font-medium text-white"
          >
            Quote
          </Link>
          <button
            onClick={() => setMobileOpen(true)}
            className="p-2 text-navy"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
      />
    </header>
  );
}
