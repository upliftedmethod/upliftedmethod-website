import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema";

export const metadata: Metadata = {
  metadataBase: new URL("https://upliftedmethod.com"),
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
    verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
  }),
  title: {
    default: "ARX Personal Training Miami | Red Light & Recovery | Upper Buena Vista",
    template: "%s | Uplifted",
  },
  description:
    "ARX personal training Miami at Upper Buena Vista. Red light therapy, Shiftwave recovery, supplements. Key Biscayne, Coconut Grove, Coral Gables, Pinecrest, Miami Beach, Surfside.",
  keywords: [
    "ARX fitness Miami",
    "personal trainer Upper Buena Vista",
    "personal training Miami",
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
