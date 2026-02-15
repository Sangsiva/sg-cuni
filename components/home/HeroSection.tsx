"use client";

import Link from "next/link";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import FadeInSection from "@/components/shared/FadeInSection";

const trustItems = [
  "50pc minimum",
  "2-4 week delivery",
  "Free design mockup",
];

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-navy to-navy-light min-h-[auto] lg:min-h-[80vh] py-16 lg:py-24">
      <div className="container-custom">
        <div className="grid items-center gap-12 md:grid-cols-5">
          {/* Text Column (60%) */}
          <div className="md:col-span-3">
            <FadeInSection>
              <p className="text-xs font-medium uppercase tracking-widest text-gold">
                CORPORATE UNIFORMS &amp; SPORTSWEAR
              </p>

              <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Premium Custom Uniforms.
                <br />
                Made in Tirupur.
                <br />
                Delivered to Singapore.
              </h1>

              <p className="mt-6 text-lg text-white/70">
                From corporate polos to sports jerseys — we handle design,
                production, and delivery. Starting from 50 pieces.
              </p>

              {/* CTA Row */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-gold px-8 py-3 font-medium text-navy transition-colors hover:bg-gold-light"
                >
                  Get a Free Quote
                </Link>
                <a
                  href="https://wa.me/6580176492"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-white px-8 py-3 font-medium text-white transition-colors hover:bg-white hover:text-navy"
                >
                  Chat on WhatsApp
                </a>
              </div>

              {/* Trust Bar */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
                {trustItems.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-white/60">
                    <CheckCircle size={16} />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>

          {/* Image Column (40%) */}
          <div className="md:col-span-2">
            <FadeInSection delay={0.2}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl sm:aspect-[4/3]">
                <Image
                  src="/images/hero/navy-polo-harsha.jpg"
                  alt="Navy corporate polo shirt with embroidered logo"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
}
