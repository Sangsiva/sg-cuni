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
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "SG Corp Uniforms",
    description:
      "Premium custom uniforms made in Tirupur, delivered to Singapore. Corporate polos, sports tees, workwear.",
    url: "https://sgcorpuniforms.com",
    telephone: "+6580176492",
    email: "enquiry@sgcorpuniforms.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "SG",
      addressLocality: "Singapore",
    },
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col font-sans">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppFloating />
      </body>
    </html>
  );
}
