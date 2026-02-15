"use client";

import { cn } from "@/lib/utils";

interface PillSelectorOption {
  value: string;
  label: string;
}

interface PillSelectorProps {
  options: PillSelectorOption[];
  value: string;
  onChange: (value: string) => void;
}

export default function PillSelector({
  options,
  value,
  onChange,
}: PillSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const isSelected = value === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-medium cursor-pointer transition-all",
              isSelected
                ? "bg-navy text-white"
                : "bg-off-white text-slate border border-slate-light/30 hover:border-slate-light/60"
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
