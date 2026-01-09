"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const faqs = [
  {
    question: "What is your minimum order quantity?",
    answer: "Our minimum order quantity is 50 pieces per design. This allows us to maintain quality and efficiency in production. For smaller quantities, we recommend exploring our ready-made options or consulting with us for alternatives.",
  },
  {
    question: "How long does production and delivery take to Singapore?",
    answer: "Standard production time is 7-14 days from final artwork approval, plus 3-7 days for shipping and customs clearance. Total timeline is typically 2-4 weeks. Rush orders may be possible depending on production capacity and additional costs.",
  },
  {
    question: "Can you handle urgent orders?",
    answer: "We can accommodate urgent orders on a case-by-case basis. Our Tirupur facility has experience with expedited production, but availability depends on current workload. Please contact us early to discuss timelines and any premium charges.",
  },
  {
    question: "Do you provide design support or just printing?",
    answer: "We offer comprehensive design support, including mockup creation, color matching, and logo placement guidance. Our team works closely with you to ensure the final product meets your brand standards. If you have existing designs, we handle high-quality printing and embroidery.",
  },
  {
    question: "What information do you need to give a quote?",
    answer: "To provide an accurate quote, we need: garment type, quantity, sizes and quantities per size, fabric preferences, logo/artwork files, placement details, special requirements (e.g., pockets, zippers), and delivery deadline. The more details you provide, the more precise our quote will be.",
  },
  {
    question: "How do payment and invoicing work?",
    answer: "We accept payments in SGD via bank transfer or credit card. Invoicing is done in SGD for Singapore clients. We typically require 50% deposit to start production, with the balance due before shipping. All payments are processed securely, and we can accommodate your company's procurement processes.",
  },
];

export default function FAQ() {
  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>
      <p className="text-center text-lg text-gray-600 mb-12">
        Find answers to common questions about our corporate uniforms and sports T-shirts services.
        For specific inquiries, please{" "}
        <Link href="/contact" className="text-blue-600 hover:underline">
          contact us
        </Link>{" "}
        directly.
      </p>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
