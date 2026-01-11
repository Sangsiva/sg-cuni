import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Section from "@/components/Section";

const projects = [
  {
    title: "Corporate Polo Shirts",
    subtitle: "Office & Customer-Facing Staff",
    description:
      "Smart polo shirts for front-desk, sales, and customer-facing teams. Clean embroidery and consistent brand colours.",
    details: ["50–300 pcs", "Cotton / poly-cotton", "Embroidery logo on chest"],
    badge: "Corporate",
  },
  {
    title: "Team & Event T-Shirts",
    subtitle: "Sports Days, Hackathons, Company Events",
    description:
      "Lightweight dri-fit T-shirts for indoor and outdoor events. Ideal for company runs, sports days, and team shirts.",
    details: ["100–1,000+ pcs", "Dri-fit fabric", "Front logo + back text/number"],
    badge: "Sports / Events",
  },
  {
    title: "Uniform Sets",
    subtitle: "Industrial & Operations Teams",
    description:
      "Full uniform sets including shirts and pants for industrial, warehouse, or operations environments.",
    details: ["30–200 pcs", "Durable fabrics", "Name tags & department labels"],
    badge: "Uniform Sets",
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Section>
        <h1 className="text-3xl md:text-4xl font-semibold mb-3">Portfolio</h1>
        <p className="text-sm md:text-base text-muted-foreground max-w-2xl">
          Here are example categories of uniforms and sports T-shirts we produce
          for companies in Singapore. This page will be updated with more
          photos as we add new projects.
        </p>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, idx) => (
            <Card key={idx} className="flex flex-col overflow-hidden">
              {/* Image placeholder – replace with real images later */}
              <div className="h-40 bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center text-white text-sm">
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/25">
                  {project.badge}
                </span>
              </div>

              <CardHeader>
                <CardTitle className="text-lg md:text-xl">
                  {project.title}
                </CardTitle>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {project.subtitle}
                </p>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col justify-between">
                <p className="text-sm text-muted-foreground mb-3">
                  {project.description}
                </p>
                <ul className="text-xs md:text-sm space-y-1 list-disc list-inside">
                  {project.details.map((item, i) => (
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
          <p className="mb-2">
            Have a specific style or reference photo? Send it to us via the
            contact form or WhatsApp and we&apos;ll recommend fabrics and
            printing options for your budget.
          </p>
        </div>
      </Section>
    </div>
  );
}
