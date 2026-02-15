"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past ~500px (past hero section)
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-light/20 bg-white px-4 py-3 shadow-nav md:hidden">
      <Link
        href="/contact"
        className="block w-full rounded-lg bg-navy py-3 text-center text-sm font-medium text-white transition-colors hover:bg-navy-light"
      >
        Get a Free Quote
      </Link>
    </div>
  );
}
