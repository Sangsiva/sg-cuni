import HeroSection from "@/components/HeroSection";
import ValuePropositionSection from "@/components/ValuePropositionSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <section className="max-w-4xl mx-auto px-6 py-12">
        <ValuePropositionSection />
      </section>
    </div>
  );
}
