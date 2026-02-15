import { Package, ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import FadeInSection from "@/components/shared/FadeInSection";

export default function FreeSampleBanner() {
  return (
    <FadeInSection>
      <section className="section-gap">
        <div className="container-custom">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy to-navy-light p-8 lg:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-5">
              {/* Content */}
              <div className="lg:col-span-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/20">
                    <Package className="h-6 w-6 text-gold" />
                  </div>
                  <p className="text-xs font-medium uppercase tracking-widest text-gold">
                    Try Before You Order
                  </p>
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
                  Request a Free Sample
                </h2>
                <p className="mt-3 text-white/70">
                  Not sure about the fabric or print quality? We&apos;ll send you a
                  sample piece so you can feel the material and see the craftsmanship
                  before committing to a bulk order. No payment, no obligation.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2 text-sm text-white/70">
                    <span className="text-gold">&#10003;</span>
                    Feel the fabric quality firsthand
                  </li>
                  <li className="flex items-center gap-2 text-sm text-white/70">
                    <span className="text-gold">&#10003;</span>
                    See the print &amp; embroidery up close
                  </li>
                  <li className="flex items-center gap-2 text-sm text-white/70">
                    <span className="text-gold">&#10003;</span>
                    Zero commitment — decide after you see it
                  </li>
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 lg:col-span-2">
                <Link
                  href="/contact?type=sample"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3.5 font-medium text-navy transition-colors hover:bg-gold-light"
                >
                  Request Free Sample
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="https://wa.me/6580176492?text=Hi%20SG%20Corp%20Uniforms%2C%20I%27d%20like%20to%20request%20a%20free%20sample%20to%20evaluate%20your%20fabric%20and%20print%20quality."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-3.5 font-medium text-white transition-colors hover:bg-white/10"
                >
                  <MessageCircle className="h-4 w-4" />
                  Request via WhatsApp
                </a>
                <p className="text-center text-xs text-white/50">
                  Shipping covered for Singapore addresses
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
