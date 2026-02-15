import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloating from "@/components/layout/WhatsAppFloating";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Corporate Uniforms & Sports T-Shirts Singapore | SG Corp Uniforms",
  description:
    "Premium custom uniforms made in Tirupur, delivered to Singapore. Corporate polos, sports tees, workwear. Free design mockup, 2-4 week delivery. Get a quote today.",
  openGraph: {
    title: "Corporate Uniforms & Sports T-Shirts Singapore | SG Corp Uniforms",
    description:
      "Premium custom uniforms made in Tirupur, delivered to Singapore. Free design mockup, 2-4 week delivery.",
    url: "https://sgcorpuniforms.com",
    siteName: "SG Corp Uniforms",
    locale: "en_SG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppFloating />
      </body>
    </html>
  );
}
