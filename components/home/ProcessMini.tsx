"use client";

import Link from "next/link";
import { MessageCircle, Pencil, Factory, Package } from "lucide-react";
import FadeInSection from "@/components/shared/FadeInSection";
import SectionHeader from "@/components/ui/section-header";

const steps = [
  {
    icon: MessageCircle,
    title: "Tell Us What You Need",
    duration: "1-2 days",
  },
  {
    icon: Pencil,
    title: "Review Your Design Mockup",
    duration: "1-2 days",
  },
  {
    icon: Factory,
    title: "We Produce in Tirupur",
    duration: "7-14 days",
  },
  {
    icon: Package,
    title: "Delivered to Your Door",
    duration: "3-7 days",
  },
];

export default function ProcessMini() {
  return (
    <section className="section-gap bg-off-white">
      <div className="container-custom">
        <FadeInSection>
          <SectionHeader
            eyebrow="SIMPLE PROCESS"
            title="From Enquiry to Delivery in 4 Steps"
          />
        </FadeInSection>

        <div className="relative mt-12">
          {/* Connecting line on desktop */}
          <div className="absolute left-0 right-0 top-7 hidden border-t-2 border-dashed border-slate-light md:block" />

          <div className="grid gap-10 md:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <FadeInSection key={step.title} delay={index * 0.15}>
                  <div className="relative flex flex-col items-center text-center">
                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-navy">
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="mt-4 font-medium text-navy">{step.title}</h3>
                    <p className="mt-1 text-sm text-slate">{step.duration}</p>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/how-it-works"
            className="font-medium text-navy transition-colors hover:text-gold"
          >
            See the full process &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
