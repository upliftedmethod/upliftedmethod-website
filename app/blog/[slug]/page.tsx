import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllSlugs,
  getPost,
} from "../posts";
import { postContents } from "../postContents";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const BodyComponent = postContents[slug];
  if (!BodyComponent) notFound();

  const bodyDate = new Date(post.date);
  const dateFormatted = bodyDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <header>
        <p className="text-sm font-medium text-neutral-500">{dateFormatted}</p>
        <h1 className="section-heading mt-1">{post.title}</h1>
      </header>
      <div className="mt-8">
        <BodyComponent />
      </div>
      <footer className="mt-12 border-t border-neutral-200 pt-8">
        <Link href="/blog" className="font-medium text-primary hover:underline">
          ← All posts
        </Link>
        <span className="mx-2">·</span>
        <Link href="/" className="font-medium text-primary hover:underline">
          Home
        </Link>
      </footer>
    </article>
  );
}
