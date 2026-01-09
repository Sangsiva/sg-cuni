import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SG Corp Uni",
  description: "Corporate uniforms and sports T-shirts",
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
            <h1 className="text-xl font-bold">SG Corp Uni</h1>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><a href="/portfolio" className="hover:underline">Portfolio</a></li>
                <li><a href="/how-it-works" className="hover:underline">How It Works</a></li>
                <li><a href="/products" className="hover:underline">Products</a></li>
                <li><a href="/contact" className="hover:underline">Contact</a></li>
                <li><a href="/faq" className="hover:underline">FAQ</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="bg-gray-200 p-4 text-center">
          <p>Contact: info@sgcorpuni.com | © 2026 SG Corp Uni</p>
        </footer>
      </body>
    </html>
  );
}
