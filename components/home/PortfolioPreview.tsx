"use client";

import Link from "next/link";
import FadeInSection from "@/components/shared/FadeInSection";
import SectionHeader from "@/components/ui/section-header";

const projects = [
  {
    category: "Corporate",
    title: "Tech Startup Polo Shirts",
  },
  {
    category: "Sports",
    title: "Company Sports Day Jerseys",
  },
  {
    category: "F&B",
    title: "Restaurant Staff Uniforms",
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
                {/* Image placeholder */}
                <div className="aspect-square bg-soft-blue" />

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
