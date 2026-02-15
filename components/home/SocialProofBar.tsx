import {
  Building2,
  Hotel,
  Factory,
  UtensilsCrossed,
  GraduationCap,
} from "lucide-react";

const industries = [
  { icon: Building2, label: "Tech" },
  { icon: Hotel, label: "Hospitality" },
  { icon: Factory, label: "Manufacturing" },
  { icon: UtensilsCrossed, label: "F&B" },
  { icon: GraduationCap, label: "Education" },
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
      </div>
    </section>
  );
}
