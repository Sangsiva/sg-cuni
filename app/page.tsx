import HeroSection from "@/components/HeroSection";
import ValuePropositionSection from "@/components/ValuePropositionSection";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <section className="max-w-4xl mx-auto px-6 py-12">
        <ValuePropositionSection />
      </section>
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">About SG Corp Uniforms</h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            If your company in Singapore needs corporate uniforms or custom sports T-shirts, we can help. 
            SG Corp Uniforms combines Singapore-based communication with India-based production to deliver 
            professional, customised uniforms at competitive prices.
          </p>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Corporate Uniforms in Singapore</h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            We provide corporate uniforms for offices, customer-facing staff, and events across Singapore. From polo shirts to full uniforms, we handle design, production, and delivery with Singapore-based support.
          </p>
        </div>
      </section>
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-lg md:text-xl font-semibold mb-2">
            Ready to plan your next uniform order?
          </h3>
          <p className="text-sm md:text-base text-muted-foreground mb-4">
            Share your requirements and we’ll get back with a customised quote.
          </p>
          <Link href="/contact">
            <Button size="lg">Get a Quote</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
