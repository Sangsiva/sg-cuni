import {
  Building2,
  Hotel,
  Factory,
  UtensilsCrossed,
  GraduationCap,
  BadgeCheck,
} from "lucide-react";

const industries = [
  { icon: Building2, label: "Tech" },
  { icon: Hotel, label: "Hospitality" },
  { icon: Factory, label: "Manufacturing" },
  { icon: UtensilsCrossed, label: "F&B" },
  { icon: GraduationCap, label: "Education" },
];

const globalBrands = [
  "H&M",
  "Zara",
  "GAP",
  "Tommy Hilfiger",
  "Polo Ralph Lauren",
  "Levi's",
  "Nike",
  "Adidas",
];

export default function SocialProofBar() {
  return (
    <section className="bg-off-white py-12">
      <div className="container-custom text-center">
        <p className="text-slate text-sm font-medium">
          Serving companies across industries in Singapore
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {industries.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <Icon size={28} className="text-slate" />
              <span className="text-sm text-slate">{label}</span>
            </div>
          ))}
        </div>

        {/* Global Brand Credibility */}
        <div className="mt-8 border-t border-slate-light/20 pt-8">
          <div className="flex items-center justify-center gap-2">
            <BadgeCheck size={16} className="text-gold" />
            <p className="text-xs font-medium uppercase tracking-wider text-slate-light">
              Made at the same Indian facilities that produce for
            </p>
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
            {globalBrands.map((brand) => (
              <span
                key={brand}
                className="rounded-full border border-slate-light/30 bg-white px-3 py-1 text-xs font-medium text-navy"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
