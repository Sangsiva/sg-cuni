"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FadeInSection from "@/components/shared/FadeInSection";

const faqData = [
  // Ordering
  {
    category: "Ordering",
    question: "What is your minimum order quantity?",
    answer:
      "Our minimum order is 50 pieces per design. For mixed orders with different designs, each design requires a minimum of 30 pieces. This allows us to maintain competitive pricing through efficient production runs.",
  },
  {
    category: "Ordering",
    question: "How do I get started?",
    answer:
      "Simply fill out our quote form or message us on WhatsApp. Tell us what you need — garment type, quantity, and any design ideas. We'll respond within 24 hours with a design mockup and pricing.",
  },
  {
    category: "Ordering",
    question: "Can I order different sizes in one batch?",
    answer:
      "Absolutely! Most corporate orders include a range of sizes from XS to 3XL. Just provide us with your size distribution and we'll produce accordingly. We can also accommodate custom sizing.",
  },
  {
    category: "Ordering",
    question: "Do you provide design support?",
    answer:
      "Yes, we offer free design support. Send us your logo and brand guidelines, and we'll create a professional digital mockup showing how your uniforms will look. Revisions are unlimited at the mockup stage.",
  },
  // Production
  {
    category: "Production",
    question: "Where are the uniforms produced?",
    answer:
      "All our garments are produced in Tirupur, Tamil Nadu, India — the country's largest knitwear hub. Tirupur produces garments for major international brands and is known for quality craftsmanship at competitive prices.",
  },
  {
    category: "Production",
    question: "What printing methods do you offer?",
    answer:
      "We offer embroidery (best for logos on polos), screen printing (ideal for large orders), DTF digital transfer (great for complex multi-color designs), and full sublimation printing (for all-over prints on performance fabrics).",
  },
  {
    category: "Production",
    question: "Can you match specific Pantone colors?",
    answer:
      "Yes, we can match specific Pantone colors for both fabric and printing. Provide your Pantone references and we'll ensure accurate color matching. We'll send physical color samples for approval before production.",
  },
  {
    category: "Production",
    question: "Can you handle urgent orders?",
    answer:
      "Yes, we can expedite production for rush orders with a typical turnaround of 2-3 weeks (vs standard 3-4 weeks). Contact us to discuss timeline and any additional costs for expedited production.",
  },
  // Pricing & Payment
  {
    category: "Pricing & Payment",
    question: "How much do corporate uniforms cost?",
    answer:
      "Pricing varies by garment type, fabric, quantity, and printing method. As a guide: basic cotton tees start from ~$8/pc, polo shirts from ~$12/pc, and uniform shirts from ~$15/pc for orders of 100+. Request a quote for exact pricing.",
  },
  {
    category: "Pricing & Payment",
    question: "What information do you need for a quote?",
    answer:
      "To provide an accurate quote, we need: garment type, approximate quantity, preferred fabric, printing/embroidery requirements, and your logo. The more details you provide, the more accurate the quote will be.",
  },
  {
    category: "Pricing & Payment",
    question: "How do payment and invoicing work?",
    answer:
      "We typically require a 50% deposit to begin production, with the remaining 50% due before shipping. We accept bank transfer in SGD. A formal invoice is provided at each stage.",
  },
  {
    category: "Pricing & Payment",
    question: "Are there any hidden costs?",
    answer:
      "No hidden costs. Our quote includes production, printing/embroidery, quality checks, and shipping to Singapore including customs clearance. The only variable is if you request changes after production begins.",
  },
  // Delivery
  {
    category: "Delivery",
    question: "How long does delivery take to Singapore?",
    answer:
      "Standard delivery takes 2-4 weeks from order confirmation. This includes 7-14 days for production and 3-7 days for shipping. We'll provide a detailed timeline with your quote.",
  },
  {
    category: "Delivery",
    question: "Do you ship to other countries?",
    answer:
      "While our primary market is Singapore, we can ship to other Southeast Asian countries. Contact us for shipping options and pricing to your specific location.",
  },
  {
    category: "Delivery",
    question: "How is shipping and customs handled?",
    answer:
      "We handle all shipping logistics including customs documentation and clearance. Orders are shipped via air freight with full tracking. You don't need to worry about import procedures.",
  },
  {
    category: "Delivery",
    question: "What happens if there's a quality issue?",
    answer:
      "We stand behind our work. Every order goes through quality checks with photo verification before shipping. If any items don't meet standards upon delivery, we'll redo the affected pieces at our cost.",
  },
];

const categories = ["Ordering", "Production", "Pricing & Payment", "Delivery"];

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("Ordering");

  const filteredFaqs = faqData.filter(
    (faq) => faq.category === activeCategory
  );

  return (
    <section className="section-gap">
      <div className="container-custom">
        <FadeInSection>
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-navy text-white"
                    : "bg-off-white text-slate hover:bg-slate-light/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="w-full">
            {filteredFaqs.map((faq, index) => (
              <AccordionItem
                key={`${activeCategory}-${index}`}
                value={`item-${index}`}
                className="border-b border-slate-light/20"
              >
                <AccordionTrigger className="py-5 text-left font-medium text-navy hover:text-gold w-full flex justify-between items-center hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-slate text-sm leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeInSection>
      </div>
    </section>
  );
}
