"use client";

import { cn } from "@/lib/utils";

interface VisualSelectorOption {
  value: string;
  label: string;
  icon: string;
}

interface VisualSelectorProps {
  options: VisualSelectorOption[];
  value: string;
  onChange: (value: string) => void;
}

export default function VisualSelector({
  options,
  value,
  onChange,
}: VisualSelectorProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {options.map((option) => {
        const isSelected = value === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={cn(
              "flex flex-col items-center justify-center gap-2 rounded-xl p-4 transition-all cursor-pointer",
              isSelected
                ? "border-2 border-gold bg-gold/5"
                : "border border-slate-light/30 bg-white hover:border-slate-light/60"
            )}
          >
            <span className="text-2xl">{option.icon}</span>
            <span
              className={cn(
                "text-sm font-medium",
                isSelected ? "text-navy" : "text-slate"
              )}
            >
              {option.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
