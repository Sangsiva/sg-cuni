import HeroSection from "@/components/home/HeroSection";
import SocialProofBar from "@/components/home/SocialProofBar";
import ProductShowcase from "@/components/home/ProductShowcase";
import ValueProps from "@/components/home/ValueProps";
import ProcessMini from "@/components/home/ProcessMini";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import TrustSection from "@/components/home/TrustSection";
import FreeSampleBanner from "@/components/shared/FreeSampleBanner";
import CTABanner from "@/components/shared/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SocialProofBar />
      <ProductShowcase />
      <ValueProps />
      <ProcessMini />
      <PortfolioPreview />
      <FreeSampleBanner />
      <TrustSection />
      <CTABanner
        title="Ready to outfit your team?"
        subtitle="Get a free quote and design mockup. No commitment required."
      />
    </>
  );
}
