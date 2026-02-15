"use client";

import { UseFormReturn } from "react-hook-form";
import VisualSelector from "@/components/ui/visual-selector";
import PillSelector from "@/components/ui/pill-selector";
import { Button } from "@/components/ui/button";
import type { QuoteFormData } from "./MultiStepQuoteForm";

const garmentOptions = [
  { value: "polo", label: "Corporate Polo", icon: "\uD83D\uDC54" },
  { value: "tshirt", label: "Corporate T-Shirt", icon: "\uD83D\uDC55" },
  { value: "sports", label: "Sports/Event Tee", icon: "\uD83C\uDFC3" },
  { value: "uniform", label: "Uniform Shirt/Set", icon: "\uD83D\uDC54" },
  { value: "apron", label: "Apron/Accessory", icon: "\uD83C\uDF73" },
  { value: "other", label: "Other", icon: "\uD83D\uDCE6" },
];

const quantityOptions = [
  { value: "<50", label: "<50" },
  { value: "50-100", label: "50-100" },
  { value: "100-300", label: "100-300" },
  { value: "300+", label: "300+" },
];

interface StepOneProps {
  form: UseFormReturn<QuoteFormData>;
  onNext: () => void;
}

export default function StepOne({ form, onNext }: StepOneProps) {
  const { watch, setValue, formState: { errors } } = form;
  const garmentType = watch("garmentType") || "";
  const quantity = watch("quantity") || "";

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-navy mb-3">
          What type of garment do you need?
        </label>
        <VisualSelector
          options={garmentOptions}
          value={garmentType}
          onChange={(val) => setValue("garmentType", val, { shouldValidate: true })}
        />
        {errors.garmentType && (
          <p className="text-red-500 text-sm mt-2">{errors.garmentType.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-semibold text-navy mb-3">
          Estimated quantity
        </label>
        <PillSelector
          options={quantityOptions}
          value={quantity}
          onChange={(val) => setValue("quantity", val, { shouldValidate: true })}
        />
        {errors.quantity && (
          <p className="text-red-500 text-sm mt-2">{errors.quantity.message}</p>
        )}
      </div>

      <div className="pt-2">
        <Button
          type="button"
          variant="primary"
          size="lg"
          className="w-full sm:w-auto"
          onClick={onNext}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
