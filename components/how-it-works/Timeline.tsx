"use client";

import { useState } from "react";
import {
  MessageCircle,
  Users,
  Pencil,
  FileCheck,
  Factory,
  CheckCircle,
  Truck,
  Package,
  ChevronDown,
} from "lucide-react";
import FadeInSection from "@/components/shared/FadeInSection";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const iconMap: Record<string, React.ElementType> = {
  MessageCircle,
  Users,
  Pencil,
  FileCheck,
  Factory,
  CheckCircle,
  Truck,
  Package,
};

const steps = [
  {
    number: 1,
    icon: "MessageCircle",
    title: "Enquiry Received",
    duration: "1 day",
    description:
      "Reach out via our contact form or WhatsApp. We respond within 24 hours with initial guidance.",
    details: [
      "Submit via website form, WhatsApp, or email",
      "Tell us about your team size and requirements",
      "No commitment at this stage",
    ],
  },
  {
    number: 2,
    icon: "Users",
    title: "Requirements Discussion",
    duration: "1-2 days",
    description:
      "We discuss garment type, fabric preferences, colors, logo placement, and quantity to understand your needs.",
    details: [
      "Video call or WhatsApp chat",
      "We'll recommend the best options",
      "Share your logo and brand guidelines",
    ],
  },
  {
    number: 3,
    icon: "Pencil",
    title: "Design Mockup",
    duration: "1-2 days",
    description:
      "We create a professional digital mockup showing your logo on the garment. Revisions are free.",
    details: [
      "Professional digital mockup",
      "Unlimited revisions at this stage",
      "See exactly how your uniforms will look",
    ],
  },
  {
    number: 4,
    icon: "FileCheck",
    title: "Quote & Approval",
    duration: "1 day",
    description:
      "Transparent pricing with no hidden costs. Review and approve to start production.",
    details: [
      "Price includes production, printing, and shipping",
      "50% deposit to begin production",
      "Detailed invoice with breakdown",
    ],
  },
  {
    number: 5,
    icon: "Factory",
    title: "Production Begins",
    duration: "7-14 days",
    description:
      "Your order is manufactured at our dedicated facility with strict quality standards.",
    details: [
      "Fabric sourcing and cutting",
      "Printing or embroidery application",
      "Stitching and assembly",
    ],
  },
  {
    number: 6,
    icon: "CheckCircle",
    title: "Quality Check",
    duration: "1-2 days",
    description:
      "Multi-point quality control with photo verification sent to you before shipping.",
    details: [
      "Dimensional checks on every piece",
      "Print/embroidery quality inspection",
      "Photos sent for your approval",
    ],
  },
  {
    number: 7,
    icon: "Truck",
    title: "Shipping to Singapore",
    duration: "3-7 days",
    description:
      "Tracked shipping with customs and documentation handled entirely by us.",
    details: [
      "Air freight for standard orders",
      "Full customs clearance handled",
      "Real-time tracking provided",
    ],
  },
  {
    number: 8,
    icon: "Package",
    title: "Delivery & Follow-up",
    duration: "Same day",
    description:
      "Delivered to your office. We follow up to ensure complete satisfaction.",
    details: [
      "Delivery to your specified address",
      "Satisfaction check within 48 hours",
      "Easy reorder process for repeat orders",
    ],
  },
];

const faqItems = [
  {
    question: "Can you handle urgent orders?",
    answer:
      "Yes, we can expedite production for rush orders. Contact us to discuss timeline and pricing for urgent requirements.",
  },
  {
    question: "What is the minimum order?",
    answer:
      "Our minimum order quantity is 50 pieces per design. For mixed orders with different designs, each design requires a minimum of 30 pieces.",
  },
  {
    question: "What happens if there's a quality issue?",
    answer:
      "We stand behind our work. If there's a quality issue, we'll redo the affected pieces at our cost. Every order goes through quality check with photo verification before shipping.",
  },
];

function StepCard({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const IconComponent = iconMap[step.icon];

  return (
    <div className="rounded-xl border border-slate-light/30 bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover">
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold font-semibold text-navy">
          {step.number}
        </div>
        {IconComponent && (
          <IconComponent className="h-5 w-5 text-navy" />
        )}
        <h3 className="font-medium text-navy">{step.title}</h3>
      </div>
      <div className="mb-3 inline-block">
        <span className="rounded-full bg-gold/10 px-3 py-1 text-xs text-gold">
          {step.duration}
        </span>
      </div>
      <p className="text-sm text-slate">{step.description}</p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-3 flex items-center gap-1 text-sm font-medium text-navy transition-colors hover:text-gold"
      >
        {expanded ? "Hide details" : "View details"}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            expanded ? "rotate-180" : ""
          }`}
        />
      </button>
      {expanded && (
        <ul className="mt-3 space-y-1.5 border-t border-slate-light/20 pt-3">
          {step.details.map((detail, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-slate"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              {detail}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Timeline() {
  return (
    <>
      {/* Section 2: Timeline */}
      <section className="section-gap">
        <div className="container-custom">
          <FadeInSection>
            <div className="mb-12 text-center">
              <p className="eyebrow mb-3">Our Process</p>
              <h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl text-navy">
                8 Simple Steps
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate">
                A proven process refined over hundreds of orders, designed to
                make your experience seamless.
              </p>
            </div>
          </FadeInSection>

          {/* Desktop: Alternating timeline */}
          <div className="relative hidden lg:block">
            {/* Vertical center line */}
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-slate-light/30" />

            <div className="space-y-12">
              {steps.map((step, index) => {
                const isLeft = step.number % 2 !== 0;
                return (
                  <FadeInSection
                    key={step.number}
                    delay={index * 0.08}
                  >
                    <div className="relative flex items-start">
                      {/* Left side card */}
                      {isLeft ? (
                        <>
                          <div className="w-1/2 pr-12">
                            <StepCard step={step} index={index} />
                          </div>
                          <div className="absolute left-1/2 top-4 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-gold text-xs font-bold text-navy">
                            {step.number}
                          </div>
                          <div className="w-1/2" />
                        </>
                      ) : (
                        <>
                          <div className="w-1/2" />
                          <div className="absolute left-1/2 top-4 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-gold text-xs font-bold text-navy">
                            {step.number}
                          </div>
                          <div className="w-1/2 pl-12">
                            <StepCard step={step} index={index} />
                          </div>
                        </>
                      )}
                    </div>
                  </FadeInSection>
                );
              })}
            </div>
          </div>

          {/* Mobile: Vertical timeline with left line */}
          <div className="relative lg:hidden">
            {/* Left vertical line */}
            <div className="absolute left-5 top-0 h-full w-0.5 bg-slate-light/30" />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <FadeInSection key={step.number} delay={index * 0.06}>
                  <div className="relative flex items-start">
                    {/* Circle on the line */}
                    <div className="relative z-10 mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-white bg-gold text-xs font-bold text-navy">
                      {step.number}
                    </div>
                    {/* Card */}
                    <div className="flex-1">
                      <StepCard step={step} index={index} />
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>

          {/* Section 3: Timeline Summary Bar */}
          <FadeInSection>
            <div className="mt-16 rounded-xl bg-off-white p-8">
              <h3 className="mb-6 text-center text-lg font-medium text-navy">
                Timeline Overview
              </h3>
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-0 overflow-hidden rounded-lg">
                <div className="flex-[3] bg-gold/20 px-4 py-4 text-center sm:rounded-l-lg">
                  <p className="text-sm font-medium text-navy">
                    Design & Approval
                  </p>
                  <p className="mt-1 text-xs text-navy/70">1-3 days</p>
                </div>
                <div className="flex-[7] bg-navy px-4 py-4 text-center">
                  <p className="text-sm font-medium text-white">Production</p>
                  <p className="mt-1 text-xs text-white/70">7-14 days</p>
                </div>
                <div className="flex-[3] bg-gold px-4 py-4 text-center sm:rounded-r-lg">
                  <p className="text-sm font-medium text-navy">Shipping</p>
                  <p className="mt-1 text-xs text-navy/70">3-7 days</p>
                </div>
              </div>
              <p className="mt-4 text-center text-sm font-medium text-slate">
                Total: 2-4 weeks from approval to delivery
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Section 4: Mini FAQ */}
      <section className="section-gap bg-off-white">
        <div className="container-custom">
          <FadeInSection>
            <div className="mb-10 text-center">
              <p className="eyebrow mb-3">FAQ</p>
              <h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl text-navy">
                Common Questions
              </h2>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <div className="mx-auto max-w-2xl">
              <Accordion type="single" collapsible>
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="border-b border-slate-light/30"
                  >
                    <AccordionTrigger className="text-left font-medium text-navy hover:no-underline hover:text-gold">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}
