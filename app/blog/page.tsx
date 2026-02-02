import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "./posts";

export const metadata: Metadata = {
  title: "Blog & Guides | ARX, Red Light & Recovery | Miami",
  description:
    "Guides on what is ARX training, red light therapy benefits, Shiftwave recovery, supplements for recovery. Efficient strength training and wellness. Upper Buena Vista, Miami.",
  alternates: { canonical: "/blog" },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="section-heading">Blog & Guides</h1>
      <p className="mt-4 text-lg text-neutral-600">
        Guides on how we train and recover—and how to choose supplements that fit.
      </p>

      <section className="mt-12 space-y-10">
        {posts.length === 0 ? (
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8">
            <h2 className="text-xl font-bold text-neutral">What’s coming</h2>
            <p className="mt-2 text-neutral-600">
              We’re adding guides on ARX, red light therapy, recovery, and supplements that fit your goals.
            </p>
            <p className="mt-4 text-neutral-600">
              Topics we’ll cover: what ARX is, how red light supports recovery, supplement basics for performance, and Miami-area fitness and recovery. Check back soon or follow us for updates.
            </p>
          </div>
        ) : (
          <ul className="space-y-8">
            {posts.map((post) => (
              <li key={post.slug} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8">
                <p className="text-sm font-medium text-neutral-500">
                  {formatDate(post.date)}
                </p>
                <h2 className="mt-1 text-xl font-bold text-neutral">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-primary hover:underline"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 text-neutral-600">{post.excerpt}</p>
                <p className="mt-3">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-medium text-primary hover:underline"
                  >
                    Read more →
                  </Link>
                </p>
              </li>
            ))}
          </ul>
        )}
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
