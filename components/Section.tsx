import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Section({ children, className }: SectionProps) {
  return (
    <section className={cn("max-w-4xl mx-auto px-6 py-12", className)}>
      {children}
    </section>
  );
}
