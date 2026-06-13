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

/** The 12 consolidated blog posts. These replace the previous overlapping set. Add new posts here and register body in postContents. */
export const posts: PostMeta[] = [
  {
    slug: "what-is-arx-training",
    title: "What Is ARX Training? Efficient Strength That Actually Fits Real Life",
    description: "ARX (Adaptive Resistance Exercise) matches resistance to your force output in real time. What it is, how the machines work, research on results, and why busy adults in Miami use short coach-led sessions. Part of our consolidated guide to time-efficient strength training.",
    date: "2024-11-01",
    excerpt: "ARX adapts resistance to your exact strength output on every rep. Here is how the machines work, what the research shows, and why short sessions fit Miami schedules for busy professionals and parents.",
  },
  {
    slug: "shiftwave-recovery",
    title: "Shiftwave Recovery: What It Is and How It Fits With Training",
    description: "Shiftwave uses pulsed pressure waves, guided breathwork, and real-time biofeedback to regulate the nervous system. What the technology does, why it matters after strength sessions, and how Miami clients stack it with ARX and red light.",
    date: "2025-03-15",
    excerpt: "Shiftwave gives the nervous system a direct signal to settle after hard training or high-stress days. Here is what it does, the mechanisms, and how it fits into practical routines for busy people in Miami.",
  },
  {
    slug: "efficient-strength-training-miami",
    title: "Efficient Strength Training in Miami (Without Wasting Hours)",
    description: "Strength training in Miami that fits tight schedules. How short, high-tension sessions with adaptive resistance build real progress for busy professionals and parents without long gym hours.",
    date: "2025-05-12",
    excerpt: "You do not need hours in the gym to get stronger. Here is how focused strength sessions work and where to find them in Miami.",
  },
  {
    slug: "20-minute-workouts-busy-parents",
    title: "20-Minute Workouts That Work for Busy Parents",
    description: "20-minute workouts that work for busy parents: short, focused strength sessions designed around real parent schedules in Miami.",
    date: "2025-10-03",
    excerpt: "Parents don’t have hours for the gym. Short sessions deliver real progress when designed right—here’s how and where in Miami.",
  },
  {
    slug: "personal-training-busy-professionals-miami",
    title: "Personal Training for Busy Professionals in Miami",
    description: "High-impact, time-efficient training for executives and busy professionals in Miami. ARX sessions built around demanding schedules.",
    date: "2025-12-20",
    excerpt: "Busy professionals need training that delivers results without stealing hours from work and family. Here is how focused sessions work in Miami.",
  },
  {
    slug: "personal-training-for-beginners-miami",
    title: "Personal Training for Beginners in Miami: What to Expect",
    description: "Personal training for beginners in Miami: what to expect from coach-led sessions, how adaptive resistance removes intimidation, and practical first steps for new trainees.",
    date: "2025-09-09",
    excerpt: "Starting strength training feels uncertain at first. A coach makes the process clear and safe. Here is what beginners can expect in Miami sessions built around focused guidance.",
  },
  {
    slug: "safe-strength-training-miami",
    title: "Safe Strength Training in Miami When You Have Injuries or Limitations",
    description: "Safe strength training in Miami when you have injuries or limitations. How ARX adaptive resistance and coaching let you build strength safely, avoid setbacks, and progress without reinjury.",
    date: "2025-08-16",
    excerpt: "Injuries or limitations do not have to stop strength training. Here is how adaptive resistance and smart coaching keep sessions safe and effective for Miami clients.",
  },
  {
    slug: "fitness-over-50-miami",
    title: "Fitness Over 50 in Miami: Staying Strong and Capable",
    description: "Strength training for longevity, joint health, and maintaining independence in Miami. How ARX and smart programming support clients over 50.",
    date: "2025-11-05",
    excerpt: "Staying strong as you age does not require long gym sessions. Practical strength work for Miami adults focused on capability and independence.",
  },
  {
    slug: "recovery-studio-miami-what-to-look-for",
    title: "How to Choose a Recovery Studio in Miami (What Actually Matters)",
    description: "What to look for in equipment, protocols, and environment when choosing a recovery studio in Miami. Focus on real results over marketing.",
    date: "2025-11-15",
    excerpt: "Not every recovery studio delivers the same value. Here is what actually matters when you evaluate options in Miami.",
  },
  {
    slug: "how-red-light-therapy-works",
    title: "How Red Light Therapy Works + What It Actually Does for Recovery",
    description: "How red light therapy works, the mechanisms behind recovery benefits, and real-world application for training clients in Miami.",
    date: "2025-12-10",
    excerpt: "Red light therapy supports recovery through specific biological pathways. What the evidence shows and how we use it with ARX clients.",
  },
  {
    slug: "red-light-therapy-miami",
    title: "Red Light Therapy in Miami: What to Expect and How to Use It Well",
    description: "Red light therapy in Miami: what to expect from sessions, how to time it with training, and practical ways to stack it with strength work. Local context from clients across Key Biscayne, Coconut Grove and surrounding areas.",
    date: "2025-02-05",
    excerpt: "Red light therapy appears at more spots in Miami. What a session actually feels like, what to look for when choosing a place, and how clients stack it with ARX training in real schedules.",
  },
  {
    slug: "best-supplements-for-recovery",
    title: "Best Supplements for Recovery (Without the Hype)",
    description: "Best supplements for recovery in Miami: what actually helps after training, what’s noise, and how to choose without the hype.",
    date: "2025-07-23",
    excerpt: "Recovery supplements can help when you pick the right ones. Here’s what the evidence says and what we recommend.",
  },
];

// Blog helper functions used by /blog, /blog/[slug], and sitemap
export function getAllPosts() {
  return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllSlugs() {
  return posts.map((post) => post.slug);
}

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
