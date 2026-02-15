import { Metadata } from "next";
import MultiStepQuoteForm from "@/components/forms/MultiStepQuoteForm";
import { Phone, Mail, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Get a Free Quote | Custom T-Shirt Printing Singapore",
  description:
    "Request a free quote for custom corporate t-shirts, polos, uniforms, and sports tees. Fast delivery from India to Singapore with no-obligation pricing.",
  keywords: [
    "free quote custom t-shirts",
    "corporate uniform quote Singapore",
    "bulk t-shirt printing quote",
    "custom polo shirt order",
    "uniform enquiry Singapore",
  ],
  openGraph: {
    title: "Get a Free Quote | Custom T-Shirt Printing Singapore",
    description:
      "Request a free quote for custom corporate t-shirts, polos, uniforms, and sports tees.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get a Free Quote | Custom T-Shirt Printing Singapore",
    description:
      "Request a free quote for custom corporate t-shirts, polos, and uniforms.",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy text-white py-16 lg:py-20">
        <div className="container-custom text-center">
          <p className="eyebrow mb-3">Free Quote</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4">
            Get a Free Quote
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Tell us what you need and we&apos;ll get back to you with a no-obligation quote
            within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-gap">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
            {/* Left: Form (3 cols) */}
            <div className="lg:col-span-3">
              <MultiStepQuoteForm />
            </div>

            {/* Right: Sidebar (2 cols) */}
            <div className="lg:col-span-2 space-y-6">
              {/* Card 1: What Happens Next */}
              <div className="rounded-2xl border border-slate-light/20 bg-white p-6 shadow-card">
                <h3 className="text-lg font-semibold text-navy mb-4">
                  What Happens Next?
                </h3>
                <ol className="space-y-3">
                  {[
                    "We review your requirements within 24 hours",
                    "You receive a detailed quote with fabric options",
                    "We create a free mockup for your approval",
                    "Production begins after your confirmation",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/10 text-gold text-xs font-semibold flex items-center justify-center">
                        {i + 1}
                      </span>
                      <span className="text-sm text-slate">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Card 2: Quick Facts */}
              <div className="rounded-2xl border border-slate-light/20 bg-white p-6 shadow-card">
                <h3 className="text-lg font-semibold text-navy mb-4">
                  Quick Facts
                </h3>
                <ul className="space-y-2.5">
                  {[
                    "50pc minimum order",
                    "Free mockup included",
                    "No obligation quote",
                    "2\u20134 weeks delivery",
                    "SGD payment accepted",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-slate">
                      <svg
                        className="w-4 h-4 text-green-500 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 3: Prefer to Chat */}
              <div className="rounded-2xl border border-slate-light/20 bg-white p-6 shadow-card">
                <h3 className="text-lg font-semibold text-navy mb-4">
                  Prefer to Chat?
                </h3>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/6580176492?text=Hi%20SG%20Corp%20Uniforms%2C%20I%20saw%20your%20website%20and%20would%20like%20a%20quote."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg bg-whatsapp/10 px-4 py-3 text-sm font-medium text-whatsapp hover:bg-whatsapp/20 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                  <a
                    href="mailto:enquiry@sgcorpuniforms.com"
                    className="flex items-center gap-3 px-4 py-2 text-sm text-slate hover:text-navy transition-colors"
                  >
                    <Mail className="w-4 h-4 text-slate-light" />
                    enquiry@sgcorpuniforms.com
                  </a>
                  <a
                    href="tel:+6580176492"
                    className="flex items-center gap-3 px-4 py-2 text-sm text-slate hover:text-navy transition-colors"
                  >
                    <Phone className="w-4 h-4 text-slate-light" />
                    +65 8017 6492
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
