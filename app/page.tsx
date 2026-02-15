import HeroSection from "@/components/home/HeroSection";
import SocialProofBar from "@/components/home/SocialProofBar";
import ProductShowcase from "@/components/home/ProductShowcase";
import ValueProps from "@/components/home/ValueProps";
import ProductionCapability from "@/components/home/ProductionCapability";
import ProcessMini from "@/components/home/ProcessMini";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import TrustSection from "@/components/home/TrustSection";
import FreeSampleBanner from "@/components/shared/FreeSampleBanner";
import SEOContent from "@/components/home/SEOContent";
import CTABanner from "@/components/shared/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SocialProofBar />
      <ProductShowcase />
      <ValueProps />
      <ProductionCapability />
      <ProcessMini />
      <PortfolioPreview />
      <FreeSampleBanner />
      <TrustSection />
      <SEOContent />
      <CTABanner
        title="Ready to outfit your team?"
        subtitle="Get a free quote and design mockup. No commitment required."
      />
    </>
  );
}
