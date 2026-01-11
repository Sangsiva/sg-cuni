import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { WhatsAppFloating } from "@/components/WhatsAppFloating";

export const metadata: Metadata = {
  title: "Singapore Corporate Uniforms & Sports T-Shirts | SG Corp Uniforms",
  description: "Singapore-based supplier of corporate uniforms and custom sports T-shirts, with fast, reliable production in India and 2–4 week delivery.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <header className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">SG Corp Uniforms</h1>
            <Navigation />
          </div>
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="bg-gray-200 p-4 text-center">
          <p>Contact: enquiry@sgcorpuniforms.com | © 2026 SG Corp Uniforms</p>
        </footer>
        <WhatsAppFloating />
      </body>
    </html>
  );
}
