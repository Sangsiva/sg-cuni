import Link from "next/link";

interface CTABannerProps {
  title: string;
  subtitle: string;
  variant?: "gold" | "navy";
}

export default function CTABanner({
  title,
  subtitle,
  variant = "gold",
}: CTABannerProps) {
  const bg = variant === "gold" ? "bg-gold" : "bg-navy";
  const text = variant === "gold" ? "text-navy" : "text-white";
  const btnBg =
    variant === "gold"
      ? "bg-navy text-white hover:bg-navy-light"
      : "bg-gold text-navy hover:bg-gold-light";
  const btnOutline =
    variant === "gold"
      ? "border-navy text-navy hover:bg-navy hover:text-white"
      : "border-white text-white hover:bg-white hover:text-navy";

  return (
    <section className={`${bg} py-16`}>
      <div className={`container-custom text-center ${text}`}>
        <h2 className={`text-2xl font-semibold sm:text-3xl ${text}`}>{title}</h2>
        <p className={`mt-3 text-lg ${variant === "gold" ? "text-navy/70" : "text-white/70"}`}>
          {subtitle}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className={`rounded-lg px-8 py-3 font-medium transition-colors ${btnBg}`}
          >
            Get a Free Quote
          </Link>
          <a
            href="https://wa.me/6580176492?text=Hi%20SG%20Corp%20Uniforms%2C%20I%20saw%20your%20website%20and%20would%20like%20a%20quote."
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-lg border px-8 py-3 font-medium transition-colors ${btnOutline}`}
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
