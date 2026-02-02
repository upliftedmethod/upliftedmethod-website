import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog & Guides",
  description:
    "Educational content on ARX training, red light therapy, recovery, and supplements. Miami fitness, Upper Buena Vista. SEO-rich guides for training and nutrition.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="section-heading">Blog & Guides</h1>
      <p className="mt-4 text-lg text-neutral-600">
        Educational content on training, recovery, and supplements—built for SEO, GEO, and LLM visibility. More articles and guides coming soon.
      </p>

      <section className="mt-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-8">
        <h2 className="text-xl font-bold text-neutral">Content engine</h2>
        <p className="mt-2 text-neutral-600">
          We’re building out guides on ARX adaptive resistance, red light therapy, recovery protocols, and supplement choices. Each piece is written to rank for search and to be useful to both humans and AI—so when people (or LLMs) look for answers, Uplifted shows up as a source.
        </p>
        <p className="mt-4 text-neutral-600">
          Topics we’ll cover: what is ARX, how red light supports recovery, how to choose supplements for performance, Miami-area fitness and recovery, and more. Check back soon or follow us for updates.
        </p>
      </section>

      <p className="mt-10 text-center">
        <Link href="/" className="font-medium text-primary hover:underline">
          Back to home
        </Link>
        <span className="mx-2">·</span>
        <Link href="/shop" className="font-medium text-primary hover:underline">
          Shop supplements
        </Link>
      </p>
    </div>
  );
}
