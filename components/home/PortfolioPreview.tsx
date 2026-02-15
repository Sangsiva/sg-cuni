"use client";

import Link from "next/link";
import Image from "next/image";
import FadeInSection from "@/components/shared/FadeInSection";
import SectionHeader from "@/components/ui/section-header";

const projects = [
  {
    category: "Corporate",
    title: "Tech Startup Polo Shirts",
    image: "/images/portfolio/toradex-metro-polos.jpg",
  },
  {
    category: "Sports",
    title: "Company Sports Day Jerseys",
    image: "/images/portfolio/ngi-striped-polo.jpg",
  },
  {
    category: "F&B",
    title: "Restaurant Staff Uniforms",
    image: "/images/portfolio/zomato-swiggy-polos.jpg",
  },
];

export default function PortfolioPreview() {
  return (
    <section className="section-gap">
      <div className="container-custom">
        <FadeInSection>
          <SectionHeader eyebrow="OUR WORK" title="Recent Projects" />
        </FadeInSection>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <FadeInSection key={project.title} delay={index * 0.1}>
              <div className="group relative overflow-hidden rounded-xl">
                <div className="relative aspect-square bg-soft-blue">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-navy/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-xs font-medium uppercase tracking-widest text-gold">
                    {project.category}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    {project.title}
                  </p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/portfolio"
            className="font-medium text-navy transition-colors hover:text-gold"
          >
            See full portfolio &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
