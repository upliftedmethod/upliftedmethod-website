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

/** All posts, spread across ~15 months (Nov 2024 – Feb 2026). Add new posts here and register body in postContents. */
export const posts: PostMeta[] = [
  {
    slug: "what-is-arx-training",
    title: "What Is ARX Training? Strength That Matches Your Effort in Real Life",
    description: "ARX (Adaptive Resistance Exercise) matches resistance to your force output in real time. What it is, how the machines work, research on results, and why busy adults in Miami use short coach-led sessions.",
    date: "2024-11-01",
    excerpt: "ARX adapts resistance to your exact strength output on every rep. Here is how the machines work, what the research shows, and why short sessions fit Miami schedules.",
  },
  {
    slug: "red-light-therapy-benefits-recovery",
    title: "Red Light Therapy Benefits: How It Supports Recovery",
    description: "How red light therapy works, its benefits for muscle recovery and performance, and what to expect from sessions. Science and practice for athletes and active adults.",
    date: "2024-11-25",
    excerpt: "Red light therapy is showing up in recovery studios and gyms. How it works, what the research says, and how people use it for muscle recovery and performance.",
  },
  {
    slug: "shiftwave-recovery",
    title: "Shiftwave Recovery: What It Is and Why Recovery Studios Use It",
    description: "Shiftwave recovery uses whole-body vibration, breathwork, and audio to support nervous-system recovery. What it is, how it works, and why recovery studio Miami clients stack it with ARX and red light.",
    date: "2024-12-19",
    excerpt: "Shiftwave is showing up in recovery studios and gyms. What the chair does, how it fits with training and red light, and why people in Miami use it for recovery.",
  },
  {
    slug: "supplements-for-recovery",
    title: "Supplements for Recovery: What Actually Helps After Training",
    description: "Supplements for recovery and supplements for strength training—what the evidence says and what to consider. Best supplements for recovery Miami athletes and busy adults use, without the hype.",
    date: "2025-01-12",
    excerpt: "Recovery supplements can support training when you pick the right ones. What helps, what’s noise, and what we recommend for people who train hard.",
  },
  {
    slug: "red-light-therapy-miami",
    title: "Red Light Therapy in Miami: What to Expect and Where to Go",
    description: "Best red light therapy Miami options and what to expect from sessions. Full-body RLT, recovery studios, and how to choose. Upper Buena Vista and neighborhoods we serve.",
    date: "2025-02-05",
    excerpt: "Red light therapy in Miami is easier to find than it used to be. What to expect from a session, what to look for in a studio, and where we fit in.",
  },
  // --- 15 priority posts ---
  {
    slug: "how-does-red-light-therapy-work",
    title: "How Does Red Light Therapy Work?",
    description: "How red light therapy works: wavelengths, photobiomodulation, and what happens in a session. Straight answers for Miami clients considering RLT.",
    date: "2025-03-01",
    excerpt: "Red light therapy uses specific wavelengths to support recovery and wellness. Here’s how it works and what to expect from a session.",
  },
  {
    slug: "red-light-vs-infrared",
    title: "Red Light vs Infrared: What's the Difference?",
    description: "Red light vs infrared: wavelength ranges, what each does, and why many devices use both. Clear breakdown for anyone choosing RLT in Miami.",
    date: "2025-03-25",
    excerpt: "Red and near-infrared sit next to each other on the spectrum but behave a bit differently. Here’s the difference and why it matters.",
  },
  {
    slug: "red-light-therapy-after-workout",
    title: "Red Light Therapy After a Workout",
    description: "Using red light therapy after a workout: timing, benefits, and how to fit it into your routine. For Miami athletes and busy trainees.",
    date: "2025-04-18",
    excerpt: "Red light after training can support recovery. When to do it, what to expect, and how people in Miami stack it with strength work.",
  },
  {
    slug: "efficient-strength-training-miami",
    title: "Efficient Strength Training in Miami",
    description: "Efficient strength training in Miami: less time, real results. How ARX and studio training fit busy professionals and parents.",
    date: "2025-05-12",
    excerpt: "You don’t need hours in the gym to get stronger. Here’s how efficient strength training works and where to find it in Miami.",
  },
  {
    slug: "20-minute-workouts-that-work",
    title: "20-Minute Workouts That Actually Work",
    description: "20-minute workouts that deliver: how short, intense sessions build strength and why Miami studios use ARX for time-crunched clients.",
    date: "2025-06-05",
    excerpt: "Twenty minutes can be enough when the work is targeted. What makes a short workout effective and where to find it in Miami.",
  },
  {
    slug: "red-light-therapy-muscle-recovery",
    title: "Red Light Therapy for Muscle Recovery",
    description: "Red light therapy for muscle recovery: how it works, what the evidence says, and how to use it after training. For Miami athletes and active adults.",
    date: "2025-06-29",
    excerpt: "Red light is showing up in recovery routines for a reason. How it supports muscle recovery and how to fit it into yours.",
  },
  {
    slug: "best-supplements-for-recovery",
    title: "Best Supplements for Recovery (Without the Hype)",
    description: "Best supplements for recovery in Miami: what actually helps after training, what’s noise, and how to choose without the hype.",
    date: "2025-07-23",
    excerpt: "Recovery supplements can help when you pick the right ones. Here’s what the evidence says and what we recommend.",
  },
  {
    slug: "safe-strength-training-miami",
    title: "Safe Strength Training in Miami (Injury-Friendly)",
    description: "Safe strength training in Miami for people with injuries or limitations. How ARX and coaching keep you strong without reinjury.",
    date: "2025-08-16",
    excerpt: "Training with an injury or limitation doesn’t mean skipping strength work. Here’s how to do it safely in Miami.",
  },
  {
    slug: "personal-training-for-beginners-miami",
    title: "Personal Training for Beginners in Miami",
    description: "Personal training for beginners in Miami: what to expect, how to start, and where to find coach-led sessions that fit new trainees.",
    date: "2025-09-09",
    excerpt: "Starting strength training with a coach makes the first steps safer and clearer. Here’s what beginners can expect in Miami.",
  },
  {
    slug: "20-minute-workouts-busy-parents",
    title: "20-Minute Workouts for Busy Parents",
    description: "20-minute workouts for busy parents: strength training that fits around kids. How Miami parents get in real work in minimal time.",
    date: "2025-10-03",
    excerpt: "Parents don’t have hours for the gym. Short, effective sessions are possible—here’s how and where in Miami.",
  },
  {
    slug: "red-light-therapy-for-athletes",
    title: "Red Light Therapy for Athletes",
    description: "Red light therapy for athletes in Miami: recovery between sessions, what the research says, and how to stack it with training.",
    date: "2025-10-27",
    excerpt: "Athletes use red light to recover faster and stay consistent. How it fits into a training week and where to find it in Miami.",
  },
  {
    slug: "fitness-over-50-miami",
    title: "Fitness Over 50 in Miami",
    description: "Fitness over 50 in Miami: strength, recovery, and staying capable. Personal training and modalities that fit older adults.",
    date: "2025-11-20",
    excerpt: "Staying strong after 50 is about consistency and smart training. Here’s what works and where to find it in Miami.",
  },
  {
    slug: "recovery-studio-miami-what-to-look-for",
    title: "Recovery Studio Miami: What to Look For",
    description: "Recovery studio Miami: what to look for in a recovery lounge or studio. Equipment, protocol, and fit with your training.",
    date: "2025-12-14",
    excerpt: "Not all recovery spots are the same. Here’s what matters when you’re choosing a recovery studio in Miami.",
  },
  {
    slug: "photobiomodulation-explained",
    title: "Photobiomodulation Explained",
    description: "Photobiomodulation explained: the science behind red light therapy. Wavelengths, mechanisms, and what it means for Miami clients.",
    date: "2026-01-07",
    excerpt: "Photobiomodulation is the term for how red and near-infrared light affect cells. Here’s a clear breakdown.",
  },
  {
    slug: "personal-training-busy-professionals-miami",
    title: "Personal Training for Busy Professionals in Miami",
    description: "Personal training for busy professionals in Miami: executive fitness, short sessions, and training that fits a packed schedule.",
    date: "2026-02-02",
    excerpt: "Busy professionals need training that fits. Here’s how coach-led, time-efficient sessions work in Miami.",
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
