import HeroSection from "@/components/HeroSection";
import ValuePropositionSection from "@/components/ValuePropositionSection";

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
            If you are a company in Singapore looking for corporate uniforms or custom sports T-shirts, we can help. We provide professional corporate uniforms and custom sports T-shirts for companies in Singapore, with production in India.
          </p>
        </div>
      </section>
    </div>
  );
}
