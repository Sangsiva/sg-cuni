import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Section from "@/components/Section";

const steps = [
  {
    title: "Step 1: Enquiry Received",
    description:
      "You discover us through our website, social media, or referrals and share your initial requirements.",
    bullets: [
      "Website contact form",
      "Social media enquiries",
      "Referrals from existing clients",
    ],
  },
  {
    title: "Step 2: Requirements & Consultation",
    description:
      "We collect detailed information so we can recommend the right garment and printing options for your use case.",
    bullets: [
      "Garment type and use case",
      "Fabric and colour preferences",
      "Logo files and branding guidelines",
    ],
  },
  {
    title: "Step 3: Design & Mockup",
    description:
      "Our team prepares a digital mockup so you can clearly visualise the final product before we go into production.",
    bullets: [
      "High-quality garment mockup",
      "Size chart and fit guidance",
      "Colour and logo placement review",
    ],
  },
  {
    title: "Step 4: Quotation & Approval",
    description:
      "You receive a clear quotation with pricing, lead times, and terms. Production only starts after your confirmation.",
    bullets: [
      "Transparent, itemised pricing",
      "Confirmed delivery timeline",
      "Written approval for design and costs",
    ],
  },
  {
    title: "Step 5: Production in India",
    description:
      "Your order is produced in Tirupur, India – a major garment manufacturing hub used by many international brands. This is where cutting, stitching, printing and embroidery all come together.",
    bullets: [
      "Bulk production capacity",
      "Consistent, vetted materials",
      "Skilled, experienced teams",
    ],
  },
  {
    title: "Step 6: Quality Check",
    description:
      "Every batch goes through quality control before shipping to ensure it matches what was approved.",
    bullets: [
      "Colour and print verification",
      "Logo clarity and positioning checks",
      "Quantity, size breakdown and packing checks",
    ],
  },
  {
    title: "Step 7: Shipping & Delivery",
    description:
      "Goods are shipped from India to Singapore and we coordinate final delivery to your office or chosen location.",
    bullets: [
      "Reliable logistics partners",
      "Customs and documentation handled",
      "On-time delivery tracking and updates",
    ],
  },
  {
    title: "Step 8: Post-Delivery Support & Feedback",
    description:
      "After delivery, we stay in touch to gather feedback and make re-orders even smoother.",
    bullets: [
      "Feedback on fit, quality and service",
      "Easy repeat ordering for new staff or events",
      "Ongoing support for future requirements",
    ],
  },
];

export default function HowItWorks() {
  return (
    <div>
      <Section>
        <h1 className="text-3xl md:text-4xl font-semibold text-center mb-4">How It Works</h1>
        <p className="text-sm md:text-base text-muted-foreground text-center max-w-2xl mx-auto">
          We are Singapore-based for seamless communication and support, with expert production handled in Tirupur, India.
          From enquiry to delivery, we ensure a smooth process tailored to your corporate needs.
        </p>
      </Section>

      <Section>
        <div className="space-y-6">
          {steps.map((step, index) => (
            <Card key={index} className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl font-semibold">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm md:text-base text-muted-foreground mb-4">{step.description}</CardDescription>
                {step.bullets && (
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    {step.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-xl md:text-2xl font-semibold text-center mb-4">Ready to Get Started?</h2>
        <p className="text-sm md:text-base text-muted-foreground text-center mb-6">
          Tell us about your corporate uniform or sports T-shirt requirements and we’ll guide you through the next steps.
        </p>
        <div className="text-center">
          <Link href="/contact">
            <Button size="lg">Start Your Order</Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
