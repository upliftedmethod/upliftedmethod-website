import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema";

export const metadata: Metadata = {
  title: {
    default: "Uplifted | ARX Training, Red Light & Supplements | Upper Buena Vista, Miami",
    template: "%s | Uplifted",
  },
  description:
    "In-studio ARX training, red light therapy, and supplements at Upper Buena Vista, Miami. Key Biscayne, Coconut Grove, Coral Gables, Pinecrest, Miami Beach, Surfside. Strength, recovery, education.",
  keywords: [
    "ARX fitness Miami",
    "personal trainer Upper Buena Vista",
    "red light therapy Miami",
    "fitness studio Key Biscayne",
    "in-studio training Miami",
    "supplements Miami",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <LocalBusinessSchema />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
