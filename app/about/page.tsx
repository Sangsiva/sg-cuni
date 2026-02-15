import { Metadata } from "next";
import Image from "next/image";
import { Award, DollarSign, Truck } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";
import FadeInSection from "@/components/shared/FadeInSection";
import CTABanner from "@/components/shared/CTABanner";

export const metadata: Metadata = {
  title: "About Us - Our Story | SG Corp Uniforms",
  description:
    "Singapore-based, Tirupur-made. Learn how SG Corp Uniforms bridges India's garment hub with Singapore businesses for quality custom uniforms.",
  keywords: [
    "SG Corp Uniforms",
    "Tirupur garment manufacturer",
    "Singapore uniform supplier",
    "custom uniform company",
    "India to Singapore uniforms",
  ],
  openGraph: {
    title: "About Us - Our Story | SG Corp Uniforms",
    description:
      "Singapore-based, Tirupur-made. Quality custom uniforms bridging India's garment hub with Singapore businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Our Story | SG Corp Uniforms",
    description:
      "Singapore-based, Tirupur-made. Quality custom uniforms for Singapore businesses.",
  },
  alternates: {
    canonical: "/about",
  },
};

const teamMembers = [
  {
    initials: "SK",
    role: "Founder & Director",
    description: "Singapore-based. Handles strategy, branding, and technology.",
  },
  {
    initials: "SK",
    role: "Founder & Director",
    description:
      "Singapore-based. Manages customer relationships and order coordination.",
  },
];

const values = [
  {
    icon: Award,
    title: "Quality First",
    description:
      "Every order goes through multi-point quality checks before shipping. We send photo verification so you see your order before it arrives.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description:
      "No hidden fees. Your quote covers everything from production to delivery. What we quote is what you pay.",
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    description:
      "We've built logistics partnerships to ensure on-time delivery, every time. Track your order from Tirupur to your door.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Section 1: Page Hero */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">
            Our Story
          </h1>
          <p className="mt-4 text-xl text-white/70">
            Singapore service. Tirupur craftsmanship.
          </p>
        </div>
      </section>

      {/* Section 2: The Story */}
      <FadeInSection>
        <section className="container-custom section-gap">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-lg leading-relaxed text-slate">
                SG Corp Uniforms was founded with a simple idea: bring the
                quality and value of Tirupur&apos;s garment industry directly to
                Singapore businesses.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-slate">
                Tirupur, in Tamil Nadu, India, is the country&apos;s largest
                knitwear hub — producing garments for international brands
                worldwide. Our production partner has years of experience serving
                corporate clients across India.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-slate">
                We bridge the gap: you get Singapore-based support,
                consultation, and delivery, with the pricing advantage and
                production expertise of Tirupur.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-soft-blue">
              <Image
                src="/images/hero/white-polo-allied.jpg"
                alt="White corporate polo shirt with embroidered logo"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Section 3: The Team */}
      <FadeInSection>
        <section className="bg-off-white section-gap">
          <div className="container-custom">
            <SectionHeader
              eyebrow="OUR TEAM"
              title="The People Behind Your Uniforms"
            />
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-white p-8 text-center shadow-card"
                >
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-navy/10">
                    <span className="text-2xl font-semibold text-navy">
                      {member.initials}
                    </span>
                  </div>
                  <h3 className="mt-4 font-medium text-navy">{member.role}</h3>
                  <p className="mt-2 text-sm text-slate">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-slate">
              Backed by an experienced production team in Tirupur, India.
            </p>
          </div>
        </section>
      </FadeInSection>

      {/* Section 4: Our Values */}
      <FadeInSection>
        <section className="container-custom section-gap">
          <SectionHeader
            eyebrow="OUR VALUES"
            title="What We Stand For"
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="rounded-xl bg-white p-8 text-center shadow-card"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-soft-blue">
                    <Icon className="text-navy" size={32} />
                  </div>
                  <h3 className="mt-4 font-medium text-navy">{value.title}</h3>
                  <p className="mt-2 text-sm text-slate">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </FadeInSection>

      {/* Section 5: CTA */}
      <CTABanner
        title="Want to work with us?"
        subtitle="Get a free quote and design mockup. No commitment required."
      />
    </>
  );
}
