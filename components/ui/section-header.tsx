interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2
        className={`text-2xl font-semibold sm:text-3xl lg:text-4xl ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg ${
            light ? "text-white/70" : "text-slate"
          } ${align === "center" ? "mx-auto max-w-2xl" : ""}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
