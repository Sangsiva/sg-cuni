"use client";

import { cn } from "@/lib/utils";

interface ProgressBarProps {
  currentStep: 1 | 2 | 3;
}

const steps = [
  { number: 1, label: "Requirements" },
  { number: 2, label: "Details" },
  { number: 3, label: "Contact" },
];

export default function ProgressBar({ currentStep }: ProgressBarProps) {
  return (
    <div className="flex items-center w-full mb-8">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center flex-1 last:flex-none">
          {/* Step circle */}
          <div className="flex flex-col items-center">
            <div
              className={cn(
                "w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-all",
                step.number <= currentStep
                  ? "bg-gold text-white"
                  : "bg-slate-light/20 text-slate-light"
              )}
            >
              {step.number <= currentStep - 1 ? (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                step.number
              )}
            </div>
            <span
              className={cn(
                "mt-1.5 text-xs font-medium whitespace-nowrap",
                step.number <= currentStep ? "text-navy" : "text-slate-light"
              )}
            >
              {step.label}
            </span>
          </div>

          {/* Connector line */}
          {index < steps.length - 1 && (
            <div className="flex-1 mx-3 mt-[-18px]">
              <div className="h-0.5 w-full bg-slate-light/20 rounded-full overflow-hidden">
                <div
                  className={cn(
                    "h-full bg-gold transition-all duration-300",
                    step.number < currentStep ? "w-full" : "w-0"
                  )}
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
