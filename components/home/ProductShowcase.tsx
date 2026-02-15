"use client";

import Link from "next/link";
import Image from "next/image";
import FadeInSection from "@/components/shared/FadeInSection";
import SectionHeader from "@/components/ui/section-header";

const products = [
  {
    category: "CORPORATE POLO SHIRTS",
    title: "Classic Polos with Embroidered Logos",
    description:
      "Professional polos in cotton and poly-cotton blends. Perfect for daily office wear.",
    price: "From ~$12/pc for 100+ pieces",
    image: "/images/products/white-polo-tuv.jpg",
  },
  {
    category: "CORPORATE T-SHIRTS",
    title: "Branded T-Shirts for Your Team",
    description:
      "Round-neck and V-neck options with screen print or DTF printing.",
    price: "From ~$8/pc for 100+ pieces",
    image: "/images/products/maroon-white-polo-concor-mahindra.jpg",
  },
  {
    category: "SPORTS & EVENT T-SHIRTS",
    title: "Performance Tees for Every Event",
    description:
      "Dri-fit and moisture-wicking fabrics. Full sublimation printing available.",
    price: "From ~$10/pc for 100+ pieces",
    image: "/images/products/blue-polo-steelbird.jpg",
  },
  {
    category: "UNIFORM SHIRTS & WORKWEAR",
    title: "Professional Workwear Solutions",
    description:
      "Button-down shirts, chef coats, and industrial workwear.",
    price: "From ~$15/pc for 100+ pieces",
    image: "/images/products/maroon-polo-oodu.jpg",
  },
];

export default function ProductShowcase() {
  return (
    <section className="section-gap">
      <div className="container-custom">
        <FadeInSection>
          <SectionHeader
            eyebrow="WHAT WE MAKE"
            title="Uniforms for Every Team"
          />
        </FadeInSection>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {products.map((product, index) => (
            <FadeInSection key={product.title} delay={index * 0.1}>
              <div className="group">
                <div className="relative aspect-[3/2] overflow-hidden rounded-xl bg-soft-blue">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <p className="mt-4 text-xs font-medium uppercase tracking-widest text-gold">
                  {product.category}
                </p>
                <h3 className="mt-2 text-lg font-medium text-navy">
                  {product.title}
                </h3>
                <p className="mt-1 text-sm text-slate">
                  {product.description}
                </p>
                <p className="mt-2 text-sm font-medium text-gold">
                  {product.price}
                </p>
                <Link
                  href="/products"
                  className="mt-2 inline-block text-sm font-medium text-navy transition-colors hover:text-gold"
                >
                  View options &rarr;
                </Link>
              </div>
            </FadeInSection>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/products"
            className="font-medium text-navy transition-colors hover:text-gold"
          >
            See all products &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
