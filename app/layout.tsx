import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema";

export const metadata: Metadata = {
  metadataBase: new URL("https://upliftedmethod.com"),
  title: {
    default: "Fitness Studio Miami | ARX, Red Light & Supplements | Upper Buena Vista",
    template: "%s | Uplifted",
  },
  description:
    "Fitness studio and gym at Upper Buena Vista, Miami. ARX training, red light therapy, recovery studio. Key Biscayne, Coconut Grove, Coral Gables, Pinecrest, Miami Beach, Surfside.",
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
