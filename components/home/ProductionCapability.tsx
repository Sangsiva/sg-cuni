"use client";

import Image from "next/image";
import FadeInSection from "@/components/shared/FadeInSection";
import SectionHeader from "@/components/ui/section-header";

const capabilities = [
  {
    image: "/images/production/sewing-floor.jpg",
    title: "Dedicated Production Lines",
    description:
      "Our facility runs multiple sewing lines with skilled operators producing corporate uniforms, polos, and sportswear daily.",
    stat: "5,000+",
    statLabel: "pieces/month capacity",
  },
  {
    image: "/images/production/embroidery-machine.jpg",
    title: "Embroidery & Printing",
    description:
      "Industrial embroidery machines and screen printing setups for crisp logos, names, and branding on every garment.",
    stat: "4",
    statLabel: "branding methods",
  },
  {
    image: "/images/production/fabric-sorting.jpg",
    title: "Fabric Sourcing & Cutting",
    description:
      "Direct access to India's largest textile hub means we source premium cotton, poly-cotton, and dri-fit fabrics at factory prices.",
    stat: "50+",
    statLabel: "fabric options",
  },
  {
    image: "/images/production/quality-check.jpg",
    title: "Multi-Point Quality Control",
    description:
      "Every order goes through dimensional checks, print inspection, and photo verification before it leaves our facility.",
    stat: "100%",
    statLabel: "orders photo-verified",
  },
  {
    image: "/images/production/packing-shipping.jpg",
    title: "Packing & Shipping",
    description:
      "Carefully packed and shipped via air freight to Singapore. Full customs clearance and tracking handled by us.",
    stat: "2-4",
    statLabel: "weeks to your door",
  },
];

export default function ProductionCapability() {
  return (
    <section className="section-gap bg-off-white">
      <div className="container-custom">
        <FadeInSection>
          <SectionHeader
            eyebrow="OUR PRODUCTION"
            title="See How Your Uniforms Are Made"
            description="From fabric to finished garment — a transparent look inside our production facility."
          />
        </FadeInSection>

        <div className="mt-12 space-y-8">
          {capabilities.map((item, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <FadeInSection key={item.title} delay={index * 0.08}>
                <div
                  className={`flex flex-col overflow-hidden rounded-xl bg-white shadow-card md:flex-row ${
                    isReversed ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div className="relative h-64 w-full md:h-auto md:w-2/5">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                    <h3 className="text-lg font-medium text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate">
                      {item.description}
                    </p>
                    <div className="mt-4 inline-flex items-baseline gap-2">
                      <span className="text-2xl font-semibold text-gold">
                        {item.stat}
                      </span>
                      <span className="text-sm text-slate-light">
                        {item.statLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
