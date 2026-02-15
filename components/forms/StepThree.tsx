"use client";

import { UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import type { QuoteFormData } from "./MultiStepQuoteForm";

interface StepThreeProps {
  form: UseFormReturn<QuoteFormData>;
  onBack: () => void;
  isSubmitting: boolean;
}

export default function StepThree({ form, onBack, isSubmitting }: StepThreeProps) {
  const { register, formState: { errors } } = form;

  const inputClasses =
    "w-full rounded-lg border border-slate-light/30 bg-white px-4 py-3 text-sm text-navy placeholder:text-slate-light focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all";

  return (
    <div className="space-y-5">
      <div>
        <label htmlFor="company" className="block text-sm font-semibold text-navy mb-1.5">
          Company Name <span className="text-red-500">*</span>
        </label>
        <input
          id="company"
          type="text"
          {...register("company")}
          placeholder="Your company name"
          className={inputClasses}
        />
        {errors.company && (
          <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-navy mb-1.5">
          Contact Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          type="text"
          {...register("name")}
          placeholder="Your name"
          className={inputClasses}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-navy mb-1.5">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          placeholder="you@company.com"
          className={inputClasses}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-1.5">
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          {...register("phone")}
          placeholder="+65 XXXX XXXX"
          className={inputClasses}
        />
        <p className="text-xs text-slate-light mt-1">For faster response via WhatsApp</p>
      </div>

      <div>
        <label htmlFor="location" className="block text-sm font-semibold text-navy mb-1.5">
          Location
        </label>
        <input
          id="location"
          type="text"
          {...register("location")}
          placeholder="e.g., Singapore, Jurong East"
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
          type="submit"
          variant="gold"
          size="lg"
          className="flex-1 sm:flex-none"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <svg
                className="animate-spin h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Submitting...
            </span>
          ) : (
            "Submit Enquiry"
          )}
        </Button>
      </div>
    </div>
  );
}
