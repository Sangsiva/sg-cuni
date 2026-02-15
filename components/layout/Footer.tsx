import Link from "next/link";
import { Mail, Phone, MessageCircle } from "lucide-react";

const quickLinks = [
  { href: "/products", label: "Products" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-custom grid gap-12 py-16 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold text-white">SG Corp Uniforms</h3>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Singapore-based. Tirupur-made. Quality guaranteed.
          </p>
          <p className="mt-6 text-xs text-white/50">
            &copy; {new Date().getFullYear()} SG Corp Uniforms
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">
            Quick Links
          </h4>
          <nav className="mt-4 flex flex-col gap-2">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">
            Get in Touch
          </h4>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href="mailto:enquiry@sgcorpuniforms.com"
              className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-gold"
            >
              <Mail size={16} /> enquiry@sgcorpuniforms.com
            </a>
            <a
              href="tel:+6580176492"
              className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-gold"
            >
              <Phone size={16} /> +65 8017 6492
            </a>
            <a
              href="https://wa.me/6580176492?text=Hi%20SG%20Corp%20Uniforms%2C%20I%20saw%20your%20website%20and%20would%20like%20a%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-whatsapp"
            >
              <MessageCircle size={16} /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4">
        <p className="container-custom text-center text-xs text-white/40">
          Professional corporate uniforms &amp; sports T-shirts for Singapore businesses
        </p>
      </div>
    </footer>
  );
}
