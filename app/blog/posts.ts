/**
 * Blog post metadata. Body is rendered by the [slug] page via postContents.
 */
export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO date for display and sitemap
  excerpt: string;
};

/** All posts, newest first. Add new posts here and register body in postContents. */
export const posts: PostMeta[] = [
  {
    slug: "what-is-arx-training",
    title: "What Is ARX Training? Efficient Strength in Less Time",
    description:
      "ARX (Adaptive Resistance Exercise) adapts to your movement so every rep counts. What it is, how it works, and why Miami athletes and busy adults use it for efficient strength training.",
    date: "2025-02-02",
    excerpt:
      "ARX adapts as you move—so you get serious strength work in about 20 minutes. Here’s what it is, how it works, and why it’s showing up in Miami studios.",
  },
  {
    slug: "red-light-therapy-benefits-recovery",
    title: "Red Light Therapy Benefits: How It Supports Recovery",
    description:
      "How red light therapy works, its benefits for muscle recovery and performance, and what to expect from sessions. Science and practice for athletes and active adults.",
    date: "2025-02-02",
    excerpt:
      "Red light therapy is showing up in recovery studios and gyms. How it works, what the research says, and how people use it for muscle recovery and performance.",
  },
];

export function getAllPosts(): PostMeta[] {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPost(slug: string): PostMeta | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}
