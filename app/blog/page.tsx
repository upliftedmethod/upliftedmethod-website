import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog & Guides",
  description:
    "Guides and articles on ARX training, red light therapy, recovery, and supplements. Miami fitness at Upper Buena Vista.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="section-heading">Blog & Guides</h1>
      <p className="mt-4 text-lg text-neutral-600">
        Practical guides on training, recovery, and supplements. More articles coming soon.
      </p>

      <section className="mt-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-8">
        <h2 className="text-xl font-bold text-neutral">What’s coming</h2>
        <p className="mt-2 text-neutral-600">
          We’re adding guides on ARX adaptive resistance, red light therapy, recovery, and how to choose supplements that support your goals.
        </p>
        <p className="mt-4 text-neutral-600">
          Topics we’ll cover: what is ARX, how red light supports recovery, supplement basics for performance, and Miami-area fitness and recovery. Check back soon or follow us for updates.
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
