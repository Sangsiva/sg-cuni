"use client";

import { CheckCircle, DollarSign, Shield } from "lucide-react";
import FadeInSection from "@/components/shared/FadeInSection";
import SectionHeader from "@/components/ui/section-header";

const cards = [
  {
    icon: CheckCircle,
    title: "Free Design Mockup",
    description:
      "We create a professional mockup before you commit to anything.",
  },
  {
    icon: DollarSign,
    title: "No Hidden Costs",
    description:
      "Your quote includes production, printing, and shipping to Singapore.",
  },
  {
    icon: Shield,
    title: "Quality or We Fix It",
    description:
      "Not satisfied? We'll redo the order at our cost.",
  },
];

export default function TrustSection() {
  return (
    <section className="section-gap bg-navy">
      <div className="container-custom">
        <FadeInSection>
          <SectionHeader light title="Our Commitment to You" />
        </FadeInSection>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <FadeInSection key={card.title} delay={index * 0.1}>
                <div className="rounded-xl bg-white/10 p-8 text-center">
                  <Icon size={40} className="mx-auto text-gold" />
                  <h3 className="mt-4 font-semibold text-white">{card.title}</h3>
                  <p className="mt-2 text-sm text-white/70">
                    {card.description}
                  </p>
                </div>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
