import { Metadata } from "next";
import FadeInSection from "@/components/shared/FadeInSection";
import CTABanner from "@/components/shared/CTABanner";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio - Recent Projects | SG Corp Uniforms",
  description:
    "Browse our recent corporate uniform and custom T-shirt projects. Corporate polos, sports jerseys, workwear, and more.",
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      {/* Section 1: Page Hero */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="container-custom text-center">
          <FadeInSection>
            <h1 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
              Our Work
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
              Browse recent projects. Have a specific style in mind? Send us a
              reference photo and we&apos;ll match it.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Section 2: Filter Tabs + Project Grid + Reference Photo CTA */}
      <PortfolioGrid />

      {/* Section 4: CTA Banner */}
      <CTABanner
        title="Like what you see?"
        subtitle="Let's create something for your team."
      />
    </div>
  );
}
