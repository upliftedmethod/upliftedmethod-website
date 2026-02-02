import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shop Supplements",
  description:
    "Curated supplements for performance and recovery. Uplifted Method—same standards as our Upper Buena Vista studio. Headless Shopify storefront.",
};

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="section-heading">Shop Supplements</h1>
      <p className="mt-4 text-lg text-neutral-600">
        Curated supplements to support performance and recovery—the same products we trust at the studio. Our storefront is powered by Shopify and will be fully connected soon.
      </p>

      <section className="mt-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-8">
        <h2 className="text-xl font-bold text-neutral">Store coming soon</h2>
        <p className="mt-2 text-neutral-600">
          We’re building a headless Shopify storefront so you can shop supplements on upliftedmethod.com with a seamless checkout experience. Same quality we recommend in-studio—available online.
        </p>
        <p className="mt-4 text-neutral-600">
          In the meantime: book a session or red light at the studio, and we’ll point you to the products we use and trust. Or get in touch for recommendations.
        </p>
      </section>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="https://upliftedmethod.as.me/schedule/550c1c04"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Book a Session
        </a>
        <Link href="/contact" className="rounded-lg border-2 border-neutral-300 px-6 py-3 font-semibold text-neutral-700 hover:border-primary hover:text-primary">
          Contact Us
        </Link>
      </div>

      <p className="mt-8 text-center text-sm text-neutral-500">
        Checkout will be at checkout.upliftedmethod.com (secure, PCI-compliant) when the store launches.
      </p>
    </div>
  );
}
