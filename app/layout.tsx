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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-W3DM5LZJ');`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W3DM5LZJ"
            title="Google Tag Manager"
            height={0}
            width={0}
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <LocalBusinessSchema />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
