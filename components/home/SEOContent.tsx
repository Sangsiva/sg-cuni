import FadeInSection from "@/components/shared/FadeInSection";

export default function SEOContent() {
  return (
    <section className="section-gap">
      <div className="container-custom">
        <FadeInSection>
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-navy sm:text-3xl">
                About SG Corp Uniforms
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate">
                If your company in Singapore needs corporate uniforms or custom
                sports T-shirts, we can help. SG Corp Uniforms combines
                Singapore-based communication with India-based production to
                deliver professional, customised uniforms at competitive prices.
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-navy sm:text-3xl">
                Corporate Uniforms in Singapore
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate">
                We provide corporate uniforms for offices, customer-facing
                staff, and events across Singapore. From polo shirts to full
                uniforms, we handle design, production, and delivery with
                Singapore-based support. Our factory-direct pricing means you
                get the same quality as global brands at the most competitive
                rates in the market.
              </p>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
