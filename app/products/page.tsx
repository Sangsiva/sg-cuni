// app/products/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Section from "@/components/Section";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const productGroups = [
  {
    title: "Corporate Polo Shirts",
    subtitle: "For office & customer-facing staff",
    description:
      "Smart, comfortable polo shirts suitable for office wear, reception, sales, and customer-facing roles.",
    bullets: [
      "Fabric: Cotton or poly–cotton blends",
      "Branding: Embroidery or print on chest and/or sleeve",
      "Colours: Match to your company brand palette",
      "Ideal quantity: 30–300 pcs",
    ],
  },
  {
    title: "Corporate T-Shirts",
    subtitle: "Casual office & team tees",
    description:
      "Crew neck T-shirts for casual Fridays, internal teams, or company swag packs.",
    bullets: [
      "Fabric: Cotton / cotton-rich",
      "Branding: Front logo + back text or artwork",
      "Fit: Unisex and ladies’ cut available",
      "Ideal quantity: 50–500 pcs",
    ],
  },
  {
    title: "Sports & Event T-Shirts",
    subtitle: "Runs, sports days, and events",
    description:
      "Lightweight dri-fit T-shirts for outdoor events, company runs, and sports teams.",
    bullets: [
      "Fabric: Moisture-wicking dri-fit",
      "Branding: Full-colour prints front & back",
      "Options: Names, numbers, or team labels",
      "Ideal quantity: 100–1,000+ pcs",
    ],
  },
  {
    title: "Uniform Shirts & Sets",
    subtitle: "Operations, warehouse & industrial",
    description:
      "Full uniform sets including shirts and pants for operational and industrial environments.",
    bullets: [
      "Fabric: Durable, easy-care materials",
      "Branding: Name tags, department labels, logos",
      "Options: Long-sleeve or short-sleeve",
      "Ideal quantity: 20–200 pcs",
    ],
  },
  {
    title: "Aprons & Accessories",
    subtitle: "F&B, retail & support teams",
    description:
      "Aprons and supporting items for F&B, retail, and service teams.",
    bullets: [
      "Types: Waist, bib, and cross-back aprons",
      "Branding: Embroidery or print",
      "Add-ons: Caps, buckets hats, tote bags",
    ],
  },
];

const options = [
  {
    title: "Fabric Options",
    items: [
      "Cotton, cotton-rich, and poly–cotton blends",
      "Dri-fit / performance fabrics for sports",
      "Heavier weight fabrics for industrial wear",
    ],
  },
  {
    title: "Branding & Printing",
    items: [
      "Embroidery for logos and name tags",
      "Silkscreen printing for solid colours",
      "DTF / digital printing for full-colour artwork",
    ],
  },
  {
    title: "Customisation",
    items: [
      "Names and numbers for teamwear",
      "Department or role labels",
      "Multiple colourways for different teams",
    ],
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <Section>
        <h1 className="text-3xl md:text-4xl font-semibold mb-3">Products</h1>
        <p className="text-sm md:text-base text-muted-foreground max-w-2xl">
          We supply a focused range of corporate uniforms, sports T-shirts, and
          related apparel for companies in Singapore. Below are our main
          product categories and customisation options.
        </p>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {productGroups.map((group, idx) => (
            <Card key={idx} className="flex flex-col transition-shadow hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">
                  {group.title}
                </CardTitle>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {group.subtitle}
                </p>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>{group.description}</p>
                <ul className="list-disc list-inside space-y-1">
                  {group.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">
          Fabrics, Printing & Customisation
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {options.map((opt, idx) => (
            <Card key={idx} className="transition-shadow hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-base md:text-lg">
                  {opt.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <ul className="list-disc list-inside space-y-1">
                  {opt.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
          <p className="mb-4">
            Not sure which product fits your needs best? Share your use case,
            quantity, and budget with us via the contact form or WhatsApp, and
            we&apos;ll recommend a suitable combination of fabrics and printing.
          </p>
          <Link href="/contact">
            <Button variant="outline">Get a Quote</Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
