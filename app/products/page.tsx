import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Scissors, Palette, PenTool, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";
import FadeInSection from "@/components/shared/FadeInSection";
import CTABanner from "@/components/shared/CTABanner";
import StickyMobileCTA from "@/components/shared/StickyMobileCTA";

export const metadata: Metadata = {
  title: "Corporate Uniforms & Custom T-Shirts | SG Corp Uniforms",
  description:
    "Corporate polos, sports tees, workwear, and accessories. All customizable with your logo. Starting from 50 pieces. Free design mockup.",
  keywords: [
    "corporate polo shirts Singapore",
    "custom t-shirt printing",
    "sports event t-shirts",
    "uniform shirts Singapore",
    "embroidery services Singapore",
    "dri-fit t-shirts bulk",
    "company workwear",
    "branded aprons Singapore",
  ],
  openGraph: {
    title: "Corporate Uniforms & Custom T-Shirts | SG Corp Uniforms",
    description:
      "Corporate polos, sports tees, workwear, and accessories. Starting from 50 pieces. Free design mockup.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Uniforms & Custom T-Shirts | SG Corp Uniforms",
    description:
      "Corporate polos, sports tees, workwear, and accessories. Starting from 50 pieces.",
  },
  alternates: {
    canonical: "/products",
  },
};

const products = [
  {
    category: "CORPORATE POLO SHIRTS",
    title: "Classic Polos with Embroidered Logos",
    description:
      "Professional polos in cotton and poly-cotton blends. Perfect for daily office wear with embroidered company logos.",
    fabric: "Cotton, poly-cotton blends",
    branding: "Embroidery, screen print",
    moq: "50-300 pieces",
    price: "From ~$12/pc",
    image: "/images/products/white-polo-tuv.jpg",
    href: "/contact?type=polo",
  },
  {
    category: "CORPORATE T-SHIRTS",
    title: "Branded T-Shirts for Your Team",
    description:
      "Round-neck and V-neck options in various fabrics. Screen print or DTF printing for vibrant, long-lasting logos.",
    fabric: "Cotton, poly-cotton, dri-fit",
    branding: "Screen print, DTF digital",
    moq: "50-500 pieces",
    price: "From ~$8/pc",
    image: "/images/products/maroon-white-polo-concor-mahindra.jpg",
    href: "/contact?type=tshirt",
  },
  {
    category: "SPORTS & EVENT T-SHIRTS",
    title: "Performance Tees for Every Event",
    description:
      "Dri-fit and moisture-wicking fabrics designed for comfort during sports days, marathons, and corporate events.",
    fabric: "Dri-fit, moisture-wicking",
    branding: "Sublimation, screen print",
    moq: "50-1000 pieces",
    price: "From ~$10/pc",
    image: "/images/products/blue-polo-steelbird.jpg",
    href: "/contact?type=sports",
  },
  {
    category: "UNIFORM SHIRTS & SETS",
    title: "Professional Workwear Solutions",
    description:
      "Button-down shirts, chef coats, and industrial workwear. Customizable with embroidered names and company branding.",
    fabric: "Cotton, poly-cotton, twill",
    branding: "Embroidery, print",
    moq: "30-200 pieces",
    price: "From ~$15/pc",
    image: "/images/products/maroon-polo-oodu.jpg",
    href: "/contact?type=uniform",
  },
  {
    category: "APRONS & ACCESSORIES",
    title: "Custom Aprons & Branded Accessories",
    description:
      "Kitchen aprons, caps, tote bags, and other branded accessories for F&B businesses and corporate events.",
    fabric: "Canvas, cotton, polyester",
    branding: "Embroidery, screen print",
    moq: "30-500 pieces",
    price: "From ~$8/pc",
    image: "/images/portfolio/bnew-black-pink-polo.jpg",
    href: "/contact?type=apron",
  },
];

const customizationOptions = [
  {
    icon: Scissors,
    title: "Fabrics & Materials",
    description:
      "Cotton, poly-cotton, dri-fit, performance blends. We'll recommend the best fabric for your use case.",
  },
  {
    icon: Palette,
    title: "Printing & Branding",
    description:
      "Embroidery, silkscreen, DTF digital printing. Logos, names, numbers, department labels.",
  },
  {
    icon: PenTool,
    title: "Design Support",
    description:
      "Send us your logo and we'll create a professional mockup within 24 hours. Free of charge.",
  },
];

export default function ProductsPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Corporate Uniforms & Custom T-Shirts",
    description: "Custom corporate uniforms and T-shirts made in Tirupur, delivered to Singapore.",
    url: "https://sgcorpuniforms.com/products",
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.title,
        description: product.description,
        brand: { "@type": "Brand", name: "SG Corp Uniforms" },
        offers: {
          "@type": "Offer",
          priceCurrency: "SGD",
          price: product.price.replace(/[^0-9.]/g, ""),
          availability: "https://schema.org/InStock",
          url: `https://sgcorpuniforms.com${product.href}`,
        },
      },
    })),
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {/* Section 1: Page Hero */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="container-custom text-center">
          <h1 className="text-white text-4xl sm:text-5xl font-semibold">
            Our Products
          </h1>
          <p className="text-white/70 text-lg mt-4 max-w-2xl mx-auto">
            Corporate uniforms, sports tees, workwear, and accessories. All
            customizable to your brand.
          </p>
        </div>
      </section>

      {/* Section 2: Product Cards */}
      <section className="container-custom section-gap">
        <FadeInSection>
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="relative bg-soft-blue h-56">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="eyebrow">{product.category}</p>
                  <h3 className="text-xl font-medium text-navy mt-2">
                    {product.title}
                  </h3>
                  <p className="text-slate text-sm mt-3">
                    {product.description}
                  </p>

                  {/* Details grid */}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-4">
                    <div>
                      <p className="text-xs text-slate-light font-medium uppercase">
                        Fabric
                      </p>
                      <p className="text-sm text-navy">{product.fabric}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-light font-medium uppercase">
                        Branding
                      </p>
                      <p className="text-sm text-navy">{product.branding}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-light font-medium uppercase">
                        MOQ
                      </p>
                      <p className="text-sm text-navy">{product.moq}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-light font-medium uppercase">
                        Starting Price
                      </p>
                      <p className="text-sm text-navy">{product.price}</p>
                    </div>
                  </div>

                  {/* CTA link */}
                  <Link
                    href={product.href}
                    className="text-gold font-medium text-sm mt-4 inline-flex items-center gap-1 hover:underline"
                  >
                    Enquire about this
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>
      </section>

      {/* Section 3: Customization Options */}
      <section className="bg-off-white section-gap">
        <div className="container-custom">
          <SectionHeader
            title="Make It Yours"
            description="Every order is fully customizable to your brand requirements."
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {customizationOptions.map((option, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 text-center shadow-card"
              >
                <div className="w-16 h-16 rounded-full bg-soft-blue flex items-center justify-center mx-auto">
                  <option.icon className="text-navy" size={32} />
                </div>
                <h3 className="mt-4 font-medium text-navy">{option.title}</h3>
                <p className="mt-2 text-sm text-slate">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: CTA */}
      <CTABanner
        title="Not sure which product is right?"
        subtitle="We'll help you choose the perfect uniform for your team."
      />
      <StickyMobileCTA />
    </div>
  );
}
