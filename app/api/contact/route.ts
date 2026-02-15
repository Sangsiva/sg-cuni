import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendEmail } from "@/lib/email";
import { appendToSheet } from "@/lib/sheets";

const enquirySchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  contactName: z.string().min(1, "Contact name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  location: z.string().optional(),
  garmentType: z.string().min(1, "Garment type is required"),
  quantityEstimate: z.string().min(1, "Quantity estimate is required"),
  deadline: z.string().optional(),
  message: z.string().min(1, "Message is required"),
  // New optional fields from multi-step form
  fabric: z.string().optional(),
  colors: z.string().optional(),
  hasAttachment: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = enquirySchema.parse(body);

    console.log('Validated data:', validatedData);
    console.log('Calling sendEmail...');

    // Send email (critical)
    try {
      await sendEmail(validatedData);
    } catch (emailError) {
      console.error("Email send failed:", emailError);
      // Still proceed to sheet, but could return error if email is mandatory
    }

    // Append to sheet (nice-to-have)
    try {
      await appendToSheet(validatedData);
    } catch (sheetError) {
      console.error("Sheet append failed:", sheetError);
      // Log but don't fail the request
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: error.errors }, { status: 400 });
    }
    console.error("API error:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
