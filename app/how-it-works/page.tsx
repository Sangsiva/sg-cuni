import { Metadata } from "next";
import Timeline from "@/components/how-it-works/Timeline";
import CTABanner from "@/components/shared/CTABanner";
import StickyMobileCTA from "@/components/shared/StickyMobileCTA";

export const metadata: Metadata = {
  title: "How It Works - Order Process | SG Corp Uniforms",
  description:
    "From enquiry to delivery in 2-4 weeks. See our simple 8-step process for ordering custom corporate uniforms and sports T-shirts.",
};

export default function HowItWorksPage() {
  return (
    <div>
      {/* Section 1: Page Hero */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="container-custom text-center">
          <h1 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            How It Works
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            From your first enquiry to delivery at your door. Here&apos;s
            exactly what to expect.
          </p>
        </div>
      </section>

      {/* Sections 2-4: Timeline, Summary, FAQ (client component) */}
      <Timeline />

      {/* Section 5: CTA */}
      <CTABanner
        title="Ready to get started?"
        subtitle="Get a free quote and design mockup within 24 hours."
      />
      <StickyMobileCTA />
    </div>
  );
}
