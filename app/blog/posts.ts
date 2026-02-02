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
    date: "2024-12-08",
    excerpt:
      "ARX adapts as you move—so you get serious strength work in about 20 minutes. Here’s what it is, how it works, and why it’s showing up in Miami studios.",
  },
  {
    slug: "red-light-therapy-benefits-recovery",
    title: "Red Light Therapy Benefits: How It Supports Recovery",
    description:
      "How red light therapy works, its benefits for muscle recovery and performance, and what to expect from sessions. Science and practice for athletes and active adults.",
    date: "2024-12-22",
    excerpt:
      "Red light therapy is showing up in recovery studios and gyms. How it works, what the research says, and how people use it for muscle recovery and performance.",
  },
  {
    slug: "shiftwave-recovery",
    title: "Shiftwave Recovery: What It Is and Why Recovery Studios Use It",
    description:
      "Shiftwave recovery uses whole-body vibration, breathwork, and audio to support nervous-system recovery. What it is, how it works, and why recovery studio Miami clients stack it with ARX and red light.",
    date: "2025-01-05",
    excerpt:
      "Shiftwave is showing up in recovery studios and gyms. What the chair does, how it fits with training and red light, and why people in Miami use it for recovery.",
  },
  {
    slug: "supplements-for-recovery",
    title: "Supplements for Recovery: What Actually Helps After Training",
    description:
      "Supplements for recovery and supplements for strength training—what the evidence says and what to consider. Best supplements for recovery Miami athletes and busy adults use, without the hype.",
    date: "2025-01-19",
    excerpt:
      "Recovery supplements can support training when you pick the right ones. What helps, what’s noise, and what we recommend for people who train hard.",
  },
  {
    slug: "red-light-therapy-miami",
    title: "Red Light Therapy in Miami: What to Expect and Where to Go",
    description:
      "Best red light therapy Miami options and what to expect from sessions. Full-body RLT, recovery studios, and how to choose. Upper Buena Vista and neighborhoods we serve.",
    date: "2025-02-02",
    excerpt:
      "Red light therapy in Miami is easier to find than it used to be. What to expect from a session, what to look for in a studio, and where we fit in.",
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
