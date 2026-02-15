"use client";

import { DollarSign, Palette, Truck, Shield } from "lucide-react";
import FadeInSection from "@/components/shared/FadeInSection";
import SectionHeader from "@/components/ui/section-header";

const values = [
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    text: "Factory-direct from India's largest garment hub — where H&M, Zara, and Nike manufacture. Same quality, 30-50% savings.",
  },
  {
    icon: Palette,
    title: "Full Customization",
    text: "Logos, colors, fabrics, sizes — all tailored to your brand. Free design mockup included.",
  },
  {
    icon: Truck,
    title: "Reliable 2-4 Week Delivery",
    text: "Production to doorstep in Singapore. Tracked shipping with customs handled.",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    text: "Strict QC before dispatch. Photo verification for every order. Fix or redo if not right.",
  },
];

export default function ValueProps() {
  return (
    <section className="section-gap">
      <div className="container-custom">
        <FadeInSection>
          <SectionHeader
            eyebrow="WHY SG CORP UNIFORMS"
            title="Factory-Direct Pricing, Singapore Service"
          />
        </FadeInSection>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeInSection key={item.title} delay={index * 0.1}>
                <div className="p-6 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-soft-blue">
                    <Icon size={32} className="text-navy" />
                  </div>
                  <h3 className="mt-4 font-medium text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate">{item.text}</p>
                </div>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
