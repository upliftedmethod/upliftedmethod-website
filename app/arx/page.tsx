import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ARX Training Miami | In-Studio Adaptive Resistance | Upper Buena Vista",
  description:
    "In-studio ARX training Miami at Upper Buena Vista. ARX Alpha and ARX Omni—efficient strength training, 20-minute workouts. ARX training near me for Key Biscayne, Coconut Grove, Coral Gables, Pinecrest, Miami Beach, Surfside.",
  alternates: { canonical: "/arx" },
};

const BOOK_URL = "https://upliftedmethod.as.me/schedule/550c1c04";

const NEIGHBORHOODS = [
  "Upper Buena Vista",
  "Key Biscayne",
  "Coconut Grove",
  "Coral Gables",
  "Pinecrest",
  "Miami Beach",
  "Surfside",
];

export default function ARXPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="section-heading">ARX Adaptive Resistance</h1>
      <p className="mt-4 text-lg text-neutral-600">
        ARX (Adaptive Resistance Exercise) adapts in real time so every rep counts. We offer in-studio ARX at our Upper Buena Vista studio—ARX Alpha and ARX Omni in one space. You get serious results in less time, without the big-gym grind.
      </p>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-neutral">What&apos;s Included</h2>
        <p className="mt-2 text-neutral-600">
          Every ARX session at Uplifted is built around what you need.
        </p>
        <ul className="mt-4 list-inside list-disc space-y-2 text-neutral-600">
          <li><strong>ARX Alpha & ARX Omni access</strong> — Full range of adaptive resistance exercises; we select the right machine and protocol for your goals.</li>
          <li><strong>Personalized programming</strong> — Your coach designs and adjusts your ARX workout so each 20-minute block targets strength, hypertrophy, or endurance as needed.</li>
          <li><strong>Form and technique coaching</strong> — Real-time cues so you work the muscle fully and stay safe through the full range of motion.</li>
          <li><strong>Session length that fits life</strong> — Typical sessions run ~20 minutes of actual work; total time in-studio stays tight so you can train and go.</li>
          <li><strong>Optional add-ons</strong> — Pair ARX with red light therapy or Shiftwave recovery in the same visit when you want strength and recovery in one stop.</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-neutral">Common Problems We Solve</h2>
        <p className="mt-2 text-neutral-600">
          People come to us when traditional gyms or generic personal training Miami options aren&apos;t cutting it.
        </p>
        <ul className="mt-4 list-inside list-disc space-y-2 text-neutral-600">
          <li><strong>No time for long workouts.</strong> You want real strength gains without 60–90 minute sessions. ARX delivers a 20-minute workout that fits a busy schedule—same stimulus, fraction of the time.</li>
          <li><strong>Plateaued on fixed weights.</strong> Barbells and machines give the same load through the rep. ARX adapts through the entire range of motion so weak points get challenged and strong points don&apos;t coast.</li>
          <li><strong>Want personal training without the circus.</strong> You want a focused environment, not a crowded floor. Our private, boutique studio is built for one-on-one or small-group ARX.</li>
          <li><strong>Recovery matters as much as lifting.</strong> Many clients combine ARX with our red light therapy and Shiftwave so strength and recovery live under one roof.</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-neutral">Our Process</h2>
        <p className="mt-2 text-neutral-600">
          From first visit to ongoing training, we keep it clear and repeatable.
        </p>
        <ol className="mt-4 list-decimal list-inside space-y-3 text-neutral-600">
          <li><strong>Intro & assessment.</strong> We discuss your goals, injury history, and schedule. If you&apos;re new to ARX, we explain how adaptive resistance works and what to expect.</li>
          <li><strong>First session on the machines.</strong> You&apos;ll use ARX Alpha or ARX Omni (or both) with loads and exercises chosen for your level. We prioritize technique and effort over arbitrary numbers.</li>
          <li><strong>Program design.</strong> Based on that session, we build your ARX training plan—exercise selection, frequency, and progression—so each visit moves you toward your goals.</li>
          <li><strong>Ongoing sessions.</strong> You book at the frequency that works (e.g. 2–3x per week). We adjust as you get stronger or as life demands change.</li>
          <li><strong>Optional recovery.</strong> Add red light or Shiftwave before or after ARX when you want to double down on recovery without a second location.</li>
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-neutral">Why Choose Us</h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-neutral-600">
          <li><strong>Studio-first, no distractions.</strong> We&apos;re a recovery studio and strength studio in one—ARX Miami and red light under the same roof at Upper Buena Vista. No big gym, no commute between training and recovery.</li>
          <li><strong>Real equipment, real coaching.</strong> ARX Alpha and ARX Omni are the tools; our coaches make sure you use them correctly and progress consistently. This is in-studio ARX training Miami done right.</li>
          <li><strong>Built for busy adults.</strong> Our clients value time. The 20-minute model and central location put ARX within reach for Key Biscayne, Coconut Grove, Coral Gables, Pinecrest, Miami Beach, and Surfside.</li>
          <li><strong>Integrity over hype.</strong> We don&apos;t overpromise. We offer efficient strength training, clear programming, and the option to stack recovery—so you get results without the noise.</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-neutral">FAQs</h2>
        <dl className="mt-4 space-y-6">
          <div>
            <dt className="font-semibold text-neutral">What is ARX training?</dt>
            <dd className="mt-1 text-neutral-600">
              ARX is Adaptive Resistance Exercise. The machines adjust resistance in real time through the full range of motion, so your muscles are under optimal load at every point in the rep. That means more effective work in less time compared with fixed weights or standard machines.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-neutral">How long is an ARX session?</dt>
            <dd className="mt-1 text-neutral-600">
              The actual work is typically around 20 minutes. Total time in the studio depends on warm-up, cooldown, and any add-ons (e.g. red light). Most clients are in and out in 30–45 minutes for ARX alone.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-neutral">Do I need to be in shape to start?</dt>
            <dd className="mt-1 text-neutral-600">
              No. ARX adapts to your current level. We scale intensity and exercise selection so beginners and advanced lifters both get an appropriate challenge. Your coach will guide you from day one.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-neutral">Where are you located?</dt>
            <dd className="mt-1 text-neutral-600">
              Our studio is in Upper Buena Vista, Miami. Clients regularly come from Key Biscayne, Coconut Grove, Coral Gables, Pinecrest, Miami Beach, and Surfside. See our <Link href="/locations" className="font-medium text-primary hover:underline">Locations</Link> page for address and directions.
            </dd>
          </div>
        </dl>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-neutral">Service Area</h2>
        <p className="mt-2 text-neutral-600">
          Uplifted is based in <strong>Upper Buena Vista</strong>—our studio is here, and this is where all in-studio ARX happens. We serve clients from Miami and the surrounding neighborhoods: Key Biscayne, Coconut Grove, Coral Gables, Pinecrest, Miami Beach, and Surfside. One central location, easy to reach. Coach-led strength training, no big gym.
        </p>
        <p className="mt-4 text-neutral-600">
          For full address, driving directions, and neighborhood-specific info, visit <Link href="/locations" className="font-medium text-primary hover:underline">Locations</Link>.
        </p>
        <p className="mt-2 text-sm text-neutral-500">
          Neighborhoods we serve: {NEIGHBORHOODS.join(", ")}.
        </p>
      </section>

      <div className="mt-12">
        <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
          Try ARX – Book a Session
        </a>
        <span className="ml-4">
          <Link href="/services" className="font-medium text-primary hover:underline">
            See all services
          </Link>
        </span>
      </div>
    </div>
  );
}
