import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ARX Adaptive Resistance",
  description:
    "ARX (Adaptive Resistance Exercise) gives maximum muscle engagement in minimal time. Uplifted uses ARX Alpha and ARX Omni at Upper Buena Vista, Miami.",
};

const BOOK_URL = "https://upliftedmethod.as.me/schedule/550c1c04";

export default function ARXPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="section-heading">ARX Adaptive Resistance</h1>
      <p className="mt-4 text-lg text-neutral-600">
        ARX (Adaptive Resistance Exercise) adapts in real time so every rep is maximally effective. We use ARX Alpha and ARX Omni at our Upper Buena Vista studio—maximum results in minimal time.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-neutral">What is ARX?</h2>
        <p className="mt-2 text-neutral-600">
          ARX machines provide adaptive resistance: the load adjusts through the full range of motion so your muscles are under optimal tension the whole time. That means more muscle engagement in less time than traditional weights or fixed machines.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-neutral">At Upper Buena Vista</h2>
        <p className="mt-2 text-neutral-600">
          Our studio has ARX Alpha and ARX Omni. You get variety and intensity in one 270 sq ft space—no big gym, no commute. Clients from Key Biscayne, Coconut Grove, Coral Gables, Pinecrest, Miami Beach, Surfside, and Miami train here.
        </p>
      </section>

      <div className="mt-12">
        <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
          Try ARX – Book a Session
        </a>
        <span className="ml-4">
          <Link href="/services" className="font-medium text-primary hover:underline">
            See all services
          </Link>
        </span>
      </div>
    </div>
  );
}
