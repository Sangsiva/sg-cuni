"use client";

import { useState } from "react";
import FadeInSection from "@/components/shared/FadeInSection";
import { MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const categories = ["All", "Corporate", "Sports & Events", "Workwear", "F&B"];

const projects = [
  {
    title: "Tech Startup Team Polos",
    category: "Corporate",
    description:
      "120 embroidered dri-fit polo shirts for a Singapore tech company.",
  },
  {
    title: "Annual Sports Day Jerseys",
    category: "Sports & Events",
    description:
      "200 full-sublimation sports jerseys for a corporate sports day event.",
  },
  {
    title: "Restaurant Chain Staff Uniforms",
    category: "F&B",
    description:
      "80 custom aprons and polo shirts for a local restaurant chain.",
  },
  {
    title: "Hotel Front Desk Uniforms",
    category: "Corporate",
    description:
      "60 premium cotton shirts with embroidered hotel logo.",
  },
  {
    title: "Marathon Event T-Shirts",
    category: "Sports & Events",
    description:
      "500 dri-fit event tees with full-color sublimation prints.",
  },
  {
    title: "Construction Workwear",
    category: "Workwear",
    description:
      "150 high-visibility polo shirts with reflective strips and company branding.",
  },
  {
    title: "Co-Working Space Merch",
    category: "Corporate",
    description:
      "100 premium cotton tees for a co-working space's brand merchandise.",
  },
  {
    title: "School Sports Team Kits",
    category: "Sports & Events",
    description:
      "300 jerseys and shorts set for school inter-house sports competition.",
  },
  {
    title: "F&B Staff Polos",
    category: "F&B",
    description:
      "90 breathable polo shirts for caf\u00e9 and bakery staff across 3 outlets.",
  },
];

export default function PortfolioGrid() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <>
      {/* Filter Tabs + Project Grid */}
      <section className="section-gap">
        <div className="container-custom">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  activeTab === cat
                    ? "bg-navy text-white"
                    : "bg-off-white text-slate hover:bg-slate-light/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid gap-6 md:grid-cols-3">
            {filtered.map((project, idx) => (
              <FadeInSection key={project.title} delay={idx * 0.05}>
                <div className="rounded-xl overflow-hidden relative group cursor-pointer shadow-card hover:shadow-card-hover transition-shadow">
                  {/* Image Placeholder */}
                  <div className="bg-soft-blue h-64 relative">
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-navy/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-gold text-sm font-medium uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="text-white text-lg font-semibold mt-2 text-center px-4">
                        {project.title}
                      </span>
                    </div>
                  </div>

                  {/* Card Info (always visible) */}
                  <div className="p-4 bg-white">
                    <h3 className="font-medium text-navy">{project.title}</h3>
                    <p className="text-sm text-slate mt-1">
                      {project.description}
                    </p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Reference Photo CTA */}
      <section className="container-custom">
        <FadeInSection>
          <div className="bg-off-white rounded-xl p-8 lg:p-12 mt-12">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              {/* Left */}
              <div>
                <h3 className="text-2xl font-semibold text-navy">
                  Have a Reference Photo?
                </h3>
                <p className="text-slate mt-3">
                  Send us a photo of a style you like via WhatsApp or our contact
                  form. We&apos;ll recommend fabrics, printing methods, and give
                  you a quote.
                </p>
              </div>

              {/* Right */}
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy px-6 py-3 font-medium text-white transition-colors hover:bg-navy-light"
                >
                  Upload via Contact Form
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="https://wa.me/6580176492?text=Hi%20SG%20Corp%20Uniforms%2C%20I%20have%20a%20reference%20photo%20for%20a%20uniform%20order."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-whatsapp px-6 py-3 font-medium text-white transition-colors hover:bg-whatsapp/90"
                >
                  <MessageCircle className="h-4 w-4" />
                  Send via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
