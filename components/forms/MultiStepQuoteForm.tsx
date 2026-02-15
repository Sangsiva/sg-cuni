"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import ProgressBar from "./ProgressBar";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const quoteFormSchema = z.object({
  garmentType: z.string().min(1, "Please select a garment type"),
  quantity: z.string().min(1, "Please select a quantity range"),
  fabric: z.string().optional(),
  colors: z.string().optional(),
  deadline: z.string().optional(),
  message: z.string().optional(),
  company: z.string().min(1, "Company name is required"),
  name: z.string().min(1, "Contact name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  location: z.string().optional(),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;

// Fields to validate per step
const stepFields: Record<number, (keyof QuoteFormData)[]> = {
  1: ["garmentType", "quantity"],
  2: [], // All optional
  3: ["company", "name", "email"],
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
  }),
};

export default function MultiStepQuoteForm() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [direction, setDirection] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const form = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      garmentType: "",
      quantity: "",
      fabric: "",
      colors: "",
      deadline: "",
      message: "",
      company: "",
      name: "",
      email: "",
      phone: "",
      location: "",
    },
    mode: "onTouched",
  });

  const goNext = async () => {
    const fields = stepFields[step];
    const valid = await form.trigger(fields);
    if (valid) {
      setDirection(1);
      setStep((prev) => Math.min(prev + 1, 3) as 1 | 2 | 3);
    }
  };

  const goBack = () => {
    setDirection(-1);
    setStep((prev) => Math.max(prev - 1, 1) as 1 | 2 | 3);
  };

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Map form fields to API schema
      const payload = {
        companyName: data.company,
        contactName: data.name,
        email: data.email,
        phone: data.phone || undefined,
        location: data.location || undefined,
        garmentType: data.garmentType,
        quantityEstimate: data.quantity,
        fabric: data.fabric || undefined,
        colors: data.colors || undefined,
        deadline: data.deadline || undefined,
        message: data.message || "No additional details provided",
        hasAttachment: uploadedFile ? uploadedFile.name : undefined,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitSuccess(true);
      } else {
        const errorData = await response.json();
        setSubmitError(errorData.message || "Something went wrong. Please try again.");
      }
    } catch {
      setSubmitError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="rounded-2xl border border-slate-light/20 bg-white p-8 text-center shadow-card">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
          <CheckCircle className="h-8 w-8 text-green-500" />
        </div>
        <h3 className="text-2xl font-semibold text-navy mb-2">Enquiry Received!</h3>
        <p className="text-slate mb-6">
          We&apos;ll get back to you within 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://wa.me/6580176492?text=Hi%20SG%20Corp%20Uniforms%2C%20I%20saw%20your%20website%20and%20would%20like%20a%20quote."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="whatsapp" size="md">
              Chat on WhatsApp
            </Button>
          </a>
          <Link href="/products">
            <Button variant="secondary" size="md">
              Browse Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-light/20 bg-white p-6 sm:p-8 shadow-card">
      <ProgressBar currentStep={step} />

      {submitError && (
        <div className="mb-4 rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-600">
          {submitError}
        </div>
      )}

      <form onSubmit={form.handleSubmit(onSubmit)}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            {step === 1 && <StepOne form={form} onNext={goNext} />}
            {step === 2 && <StepTwo form={form} onNext={goNext} onBack={goBack} onFileSelect={setUploadedFile} />}
            {step === 3 && (
              <StepThree form={form} onBack={goBack} isSubmitting={isSubmitting} />
            )}
          </motion.div>
        </AnimatePresence>
      </form>
    </div>
  );
}
