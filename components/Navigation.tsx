"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative">
      {/* Desktop Nav */}
      <ul className="hidden md:flex space-x-4">
        <li><a href="/" className="hover:underline">Home</a></li>
        <li><a href="/portfolio" className="hover:underline">Portfolio</a></li>
        <li><a href="/how-it-works" className="hover:underline">How It Works</a></li>
        <li><a href="/products" className="hover:underline">Products</a></li>
        <li><a href="/contact" className="hover:underline">Contact</a></li>
        <li><a href="/faq" className="hover:underline">FAQ</a></li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white text-slate-900 border border-gray-200 rounded-md shadow-lg z-50 md:hidden">
          <ul className="py-2">
            <li><a href="/" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="/portfolio" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Portfolio</a></li>
            <li><a href="/how-it-works" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsOpen(false)}>How It Works</a></li>
            <li><a href="/products" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Products</a></li>
            <li><a href="/contact" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Contact</a></li>
            <li><a href="/faq" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsOpen(false)}>FAQ</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
