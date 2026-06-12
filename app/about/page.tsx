import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Uplifted | Studio at Upper Buena Vista, Miami",
  description:
    "Personal training and red light therapy at Upper Buena Vista, Miami. ARX, Shiftwave, supplements. Founded 2023. Key Biscayne, Coconut Grove, Coral Gables, Pinecrest, Miami Beach, Surfside.
  },
  alternates: { canonical: "/about" },
};

const BOOK_URL = "https://upliftedmethod.as.me/schedule/550c1c04";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="section-heading">About Uplifted</h1>
      <p className="mt-4 text-lg text-neutral-600">
        Uplifted started in early 2023 with ARX and recovery in Miami. We opened our studio at Upper Buena Vista in October 2024—one private space for ARX training, red light, Shiftwave, and the supplements we actually use. Strength, recovery, and the education to back it up.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-neutral">What we do</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-neutral-600">
          <li><strong>In-studio training (Upper Buena Vista):</strong> ARX Alpha and ARX Omni. Twenty minutes, real work.</li>
          <li><strong>Red light therapy:</strong> EnergyLounger full-body bed. Recovery, skin, or both.</li>
          <li><strong>Supplements:</strong> The specific products we use in-studio to support recovery and results. Ask us during your session.</li>
          <li><strong>Education:</strong> Guides on training, recovery, and nutrition so you can choose what fits.</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-neutral">Who we serve</h2>
        <p className="mt-2 text-neutral-600">
          Busy parents, professionals—anyone who wants results without the big-gym grind. Most of our clients drive in from the Key, Grove, Gables, Pinecrest, Beach, Surfside, and Miami.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-neutral">Your coaches</h2>
        <p className="mt-2 text-neutral-600">
          Every ARX session is guided by one of our certified trainers—one-on-one or semi-private. You get a coach who programs your session, watches your form, and adjusts the load. No crowded floor, no guessing. Same for red light and Shiftwave: we’re here to make sure you get the session you need. Boutique personal training in Miami, without the big-gym vibe.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-neutral">Why Uplifted</h2>
        <p className="mt-2 text-neutral-600">
          We put our money in one place: ARX, red light, and supplements we believe in. Training, recovery, and the education to back it up.
        </p>
      </section>

      <div className="mt-12">
        <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
          Complimentary ARX Personal Training Session
        </a>
        <span className="ml-4">
          <Link href="/contact" className="font-medium text-primary hover:underline">
            Get in touch
          </Link>
        </span>
      </div>
    </div>
  );
}
