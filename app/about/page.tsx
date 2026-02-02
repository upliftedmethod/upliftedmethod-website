import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Uplifted: in-studio ARX training, red light therapy, and supplements at Upper Buena Vista, Miami. Founded in 2023. Strength, recovery, education.",
};

const BOOK_URL = "https://upliftedmethod.as.me/schedule/550c1c04";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="section-heading">About Uplifted</h1>
      <p className="mt-4 text-lg text-neutral-600">
        Uplifted started in early 2023 with a focus on ARX adaptive resistance and recovery in Miami. Our studio at Upper Buena Vista opened in October 2024—270 sq ft of ARX Alpha, ARX Omni, red light therapy, and the supplements we trust. One place for strength, recovery, and education.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-neutral">What we do</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-neutral-600">
          <li><strong>In-studio training (Upper Buena Vista):</strong> ARX Alpha and ARX Omni. Maximum engagement in minimal time.</li>
          <li><strong>Red light therapy:</strong> EnergyLounger red light bed for recovery, skin, and wellness.</li>
          <li><strong>Supplements:</strong> Curated products to support performance and recovery—shop online or in-studio.</li>
          <li><strong>Education:</strong> Blog and guides on training, recovery, and nutrition so you can make informed choices.</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-neutral">Who we serve</h2>
        <p className="mt-2 text-neutral-600">
          Busy parents, professionals, and anyone who wants serious results without the hassle of a big gym. Clients from Key Biscayne, Coconut Grove, Coral Gables, Pinecrest, Miami Beach, Surfside, and Miami train and recover at our studio.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-neutral">Why Uplifted</h2>
        <p className="mt-2 text-neutral-600">
          We’ve invested in one space and one standard: ARX, red light, and supplements that actually support your goals. No fluff—just training, recovery, and the content to back it up.
        </p>
      </section>

      <div className="mt-12">
        <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
          Book a Session
        </a>
        <span className="ml-4">
          <Link href="/contact" className="font-medium text-primary hover:underline">
            Get in touch
          </Link>
        </span>
        <span className="ml-4">
          <Link href="/shop" className="font-medium text-primary hover:underline">
            Shop supplements
          </Link>
        </span>
      </div>
    </div>
  );
}
