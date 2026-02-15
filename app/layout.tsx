import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL("https://sgcorpuniforms.com"),
  title: "Corporate Uniforms & Sports T-Shirts Singapore | SG Corp Uniforms",
  description:
    "Premium custom uniforms made in Tirupur, delivered to Singapore. Corporate polos, sports tees, workwear. Free design mockup, 2-4 week delivery. Get a quote today.",
  keywords: [
    "corporate uniforms Singapore",
    "custom t-shirts Singapore",
    "company polo shirts",
    "sports t-shirts Singapore",
    "bulk t-shirt printing Singapore",
    "corporate polo Singapore",
    "custom workwear Singapore",
    "team uniforms Singapore",
    "embroidery polo shirt",
    "Tirupur t-shirt manufacturer",
    "office uniforms Singapore",
    "event t-shirts Singapore",
    "dri-fit t-shirt printing",
    "corporate apparel Singapore",
    "uniform supplier Singapore",
  ],
  verification: {
    google: "b98_8foltEIsG6G-AfY1WrEo2ZPRgSs_7vWLLhFlgZw",
  },
  openGraph: {
    title: "Corporate Uniforms & Sports T-Shirts Singapore | SG Corp Uniforms",
    description:
      "Premium custom uniforms made in Tirupur, delivered to Singapore. Free design mockup, 2-4 week delivery.",
    url: "https://sgcorpuniforms.com",
    siteName: "SG Corp Uniforms",
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Uniforms & Sports T-Shirts Singapore | SG Corp Uniforms",
    description:
      "Premium custom uniforms made in Tirupur, delivered to Singapore. Free design mockup, 2-4 week delivery.",
  },
  other: {
    "theme-color": "#1B2A4A",
  },
  alternates: {
    canonical: "https://sgcorpuniforms.com",
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JLH7CYN402"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JLH7CYN402');
          `}
        </Script>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppFloating />
      </body>
    </html>
  );
}
