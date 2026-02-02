import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Supplements Miami | Recovery & Wellness | Uplifted",
  description:
    "Wellness and recovery supplements Miami. Performance and recovery at Upper Buena Vista. Same standards as our in-studio. Shop online or in-studio.",
  alternates: { canonical: "/shop" },
};

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="section-heading">Shop Supplements</h1>
      <p className="mt-4 text-lg text-neutral-600">
        Supplements we stand behind for performance and recovery—the same products we use at the studio. Online ordering will be available soon.
      </p>

      <section className="mt-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-8">
        <h2 className="text-xl font-bold text-neutral">Store coming soon</h2>
        <p className="mt-2 text-neutral-600">
          We’re adding an online shop so you can order the same supplements we recommend in-studio, with secure checkout.
        </p>
        <p className="mt-4 text-neutral-600">
          Until then: book a session or red light at the studio and we’ll point you to the products we use and trust. Or get in touch for recommendations.
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
        Secure checkout when the store launches.
      </p>
    </div>
  );
}
