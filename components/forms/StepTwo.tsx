"use client";

import { UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import FileUpload from "@/components/ui/file-upload";
import type { QuoteFormData } from "./MultiStepQuoteForm";

interface StepTwoProps {
  form: UseFormReturn<QuoteFormData>;
  onNext: () => void;
  onBack: () => void;
  onFileSelect: (file: File | null) => void;
}

const fabricOptions = [
  { value: "", label: "Select fabric (optional)" },
  { value: "cotton", label: "Cotton" },
  { value: "poly-cotton", label: "Poly-cotton" },
  { value: "dri-fit", label: "Dri-fit" },
  { value: "not-sure", label: "Not sure" },
];

export default function StepTwo({ form, onNext, onBack, onFileSelect }: StepTwoProps) {
  const { register } = form;

  const inputClasses =
    "w-full rounded-lg border border-slate-light/30 bg-white px-4 py-3 text-sm text-navy placeholder:text-slate-light focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all";

  return (
    <div className="space-y-5">
      <div>
        <label htmlFor="fabric" className="block text-sm font-semibold text-navy mb-1.5">
          Preferred Fabric
        </label>
        <select
          id="fabric"
          {...register("fabric")}
          className={inputClasses}
        >
          {fabricOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="colors" className="block text-sm font-semibold text-navy mb-1.5">
          Preferred Colors
        </label>
        <input
          id="colors"
          type="text"
          {...register("colors")}
          placeholder="e.g., Navy blue with white accents"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="deadline" className="block text-sm font-semibold text-navy mb-1.5">
          Deadline
        </label>
        <input
          id="deadline"
          type="text"
          {...register("deadline")}
          placeholder="e.g., March 2026"
          className={inputClasses}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-navy mb-1.5">
          Logo / Artwork
        </label>
        <FileUpload onFileSelect={onFileSelect} />
        <p className="text-xs text-slate-light mt-1">
          Optional — you can also send via WhatsApp later
        </p>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-navy mb-1.5">
          Additional Details
        </label>
        <textarea
          id="message"
          {...register("message")}
          placeholder="Any additional details..."
          rows={4}
          className={inputClasses}
        />
      </div>

      <div className="flex gap-3 pt-2">
        <Button
          type="button"
          variant="secondary"
          size="lg"
          onClick={onBack}
        >
          Back
        </Button>
        <Button
          type="button"
          variant="primary"
          size="lg"
          className="flex-1 sm:flex-none"
          onClick={onNext}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
