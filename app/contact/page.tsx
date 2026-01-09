"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const enquirySchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  contactName: z.string().min(1, "Contact name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  location: z.string().optional(),
  garmentType: z.enum(["Sports T-Shirts", "Corporate T-Shirts", "Corporate Uniforms", "Others"]),
  quantityEstimate: z.enum(["<50", "50–100", "100–300", "300+"]),
  deadline: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

type EnquiryFormData = z.infer<typeof enquirySchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
  });

  const onSubmit = async (data: EnquiryFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        reset();
      } else {
        const errorData = await response.json();
        setSubmitError(errorData.message || "Submission failed");
      }
    } catch (error) {
      setSubmitError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-center mb-8">Contact Us</h1>
        {submitSuccess && <p className="text-green-600 text-center mb-4">Enquiry submitted successfully!</p>}
        {submitError && <p className="text-red-600 text-center mb-4">{submitError}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium">Company Name *</label>
              <input
                id="companyName"
                {...register("companyName")}
                className="w-full p-2 border rounded"
                type="text"
              />
              {errors.companyName && <p className="text-red-500 text-sm">{errors.companyName.message}</p>}
            </div>
            <div>
              <label htmlFor="contactName" className="block text-sm font-medium">Contact Name *</label>
              <input
                id="contactName"
                {...register("contactName")}
                className="w-full p-2 border rounded"
                type="text"
              />
              {errors.contactName && <p className="text-red-500 text-sm">{errors.contactName.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email *</label>
              <input
                id="email"
                {...register("email")}
                className="w-full p-2 border rounded"
                type="email"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium">Phone</label>
              <input
                id="phone"
                {...register("phone")}
                className="w-full p-2 border rounded"
                type="tel"
              />
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-medium">Location</label>
              <input
                id="location"
                {...register("location")}
                className="w-full p-2 border rounded"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="garmentType" className="block text-sm font-medium">Garment Type *</label>
              <select id="garmentType" {...register("garmentType")} className="w-full p-2 border rounded">
                <option value="Sports T-Shirts">Sports T-Shirts</option>
                <option value="Corporate T-Shirts">Corporate T-Shirts</option>
                <option value="Corporate Uniforms">Corporate Uniforms</option>
                <option value="Others">Others</option>
              </select>
              {errors.garmentType && <p className="text-red-500 text-sm">{errors.garmentType.message}</p>}
            </div>
            <div>
              <label htmlFor="quantityEstimate" className="block text-sm font-medium">Quantity Estimate *</label>
              <select id="quantityEstimate" {...register("quantityEstimate")} className="w-full p-2 border rounded">
                <option value="<50">&lt;50</option>
                <option value="50–100">50–100</option>
                <option value="100–300">100–300</option>
                <option value="300+">300+</option>
              </select>
              {errors.quantityEstimate && <p className="text-red-500 text-sm">{errors.quantityEstimate.message}</p>}
            </div>
            <div>
              <label htmlFor="deadline" className="block text-sm font-medium">Deadline</label>
              <input
                id="deadline"
                {...register("deadline")}
                className="w-full p-2 border rounded"
                type="text"
                placeholder="e.g. Within 2 weeks"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">Message *</label>
              <textarea
                id="message"
                {...register("message")}
                className="w-full p-2 border rounded"
                rows={4}
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Submit Enquiry"}
            </button>
          </form>
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Why Contact Us?</h2>
            <ul className="space-y-2 mb-6">
              <li className="text-sm md:text-base text-muted-foreground">Custom designs tailored to your brand</li>
              <li className="text-sm md:text-base text-muted-foreground">Competitive pricing from India manufacturing</li>
              <li className="text-sm md:text-base text-muted-foreground">Fast delivery to Singapore</li>
              <li className="text-sm md:text-base text-muted-foreground">High-quality fabrics and printing</li>
            </ul>
            <h3 className="text-xl md:text-2xl font-semibold mb-2">FAQ</h3>
            <p className="text-sm md:text-base text-muted-foreground">What is the minimum order? 50 pieces.</p>
            <p className="text-sm md:text-base text-muted-foreground">How long does it take? 2-4 weeks from approval.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
