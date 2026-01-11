import Link from "next/link";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">Professional Corporate Uniforms & Sports T-Shirts</h1>
        <p className="text-xl mb-8">Singapore-based supplier of corporate uniforms and custom sports T-shirts for teams, offices, and events.</p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/contact">
            <Button size="lg">Get a Quote</Button>
          </Link>
          <WhatsAppButton label="Chat on WhatsApp" className="hidden sm:inline-flex" />
        </div>
      </div>
    </section>
  );
}
