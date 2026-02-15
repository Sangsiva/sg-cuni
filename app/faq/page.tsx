import { Metadata } from "next";
import FAQSection from "@/components/faq/FAQSection";
import CTABanner from "@/components/shared/CTABanner";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions | SG Corp Uniforms",
  description:
    "Common questions about ordering custom corporate uniforms and sports T-shirts. Minimum orders, pricing, production, delivery, and more.",
};

const faqSchemaItems = [
  { q: "What is your minimum order quantity?", a: "Our minimum order is 50 pieces per design. For mixed orders with different designs, each design requires a minimum of 30 pieces." },
  { q: "How do I get started?", a: "Simply fill out our quote form or message us on WhatsApp. Tell us what you need and we'll respond within 24 hours with a design mockup and pricing." },
  { q: "Where are the uniforms produced?", a: "All our garments are produced in Tirupur, Tamil Nadu, India — the country's largest knitwear hub known for quality craftsmanship at competitive prices." },
  { q: "What printing methods do you offer?", a: "We offer embroidery, screen printing, DTF digital transfer, and full sublimation printing." },
  { q: "How much do corporate uniforms cost?", a: "Basic cotton tees start from ~$8/pc, polo shirts from ~$12/pc, and uniform shirts from ~$15/pc for orders of 100+." },
  { q: "Are there any hidden costs?", a: "No hidden costs. Our quote includes production, printing/embroidery, quality checks, and shipping to Singapore including customs clearance." },
  { q: "How long does delivery take to Singapore?", a: "Standard delivery takes 2-4 weeks from order confirmation, including 7-14 days for production and 3-7 days for shipping." },
  { q: "What happens if there's a quality issue?", a: "We stand behind our work. If any items don't meet standards upon delivery, we'll redo the affected pieces at our cost." },
];

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqSchemaItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Section 1: Page Hero */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="container-custom text-center">
          <h1 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="text-white/70 text-lg mt-4 mx-auto max-w-2xl">
            Everything you need to know about ordering custom uniforms with us.
          </p>
        </div>
      </section>

      {/* Section 2: Tabbed FAQ */}
      <FAQSection />

      {/* Section 3: CTA */}
      <CTABanner
        title="Still have questions?"
        subtitle="Get in touch and we'll be happy to help."
      />
    </>
  );
}
