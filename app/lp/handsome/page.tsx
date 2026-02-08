import type { Metadata } from "next";
import { HandsomeCohortForm } from "@/components/HandsomeCohortForm";

export const metadata: Metadata = {
  title: "Handsome Cohort | 6-Week MMW Peak | Uplifted Miami",
  description:
    "6-week cohort for Miami Beach: ARX + Shiftwave + Red Light. 12 sessions, Animal Bulk Blueprint, private Handsome Cohort WhatsApp. Starts Feb 16. Partnership pricing: Private Performer, Lab Partner, or Full Barter.",
  alternates: { canonical: "/lp/handsome" },
};

// Replace with your cohort application link (Typeform, WhatsApp, etc.) when ready.
const APPLY_URL = "https://upliftedmethod.as.me/schedule/550c1c04";

export default function HandsomeLpPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      {/* Hook */}
      <header className="text-center">
        <h1 className="section-heading">
          I Thought This Technology Was Total Bullshit.
        </h1>
        <p className="mt-4 text-xl font-semibold text-neutral-600">
          Then I gained 25 lbs of muscle and qualified for the Ironman World
          Championships in Kona by training 15 minutes a week.
        </p>
      </header>

      {/* Story */}
      <section className="mt-12 space-y-4 text-neutral-600">
        <p>
          Look, I&apos;ve been a &quot;performance&quot; guy since my first
          cross-country meet in 6th grade. I finished my first Ironman at 19.
          For ten years, I believed that elite results required an elite amount
          of suffering—meaning more volume, more miles, and more grinding hours
          in the gym.
        </p>
        <p>
          By 29, I was falling apart. I was 165 lbs soaking wet, constantly
          dealing with injuries, and walking around with testosterone levels in
          the 300s. I had the cardiovascular engine of an athlete, but the
          internal biology of a 70-year-old man.
        </p>
      </section>

      {/* Skeptic's Discovery */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-neutral">
          The Skeptic&apos;s Discovery
        </h2>
        <div className="mt-4 space-y-4 text-neutral-600">
          <p>
            In January 2020, I found ARX. I was hyper-skeptical. I&apos;d only
            ever done cardio and had zero interest in strength training. The
            idea that a 15-minute &quot;computer workout&quot; once a week could
            build actual tissue sounded like a total scam to me.
          </p>
          <p>
            I spent the next two years trying to prove it wrong. I failed.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>June 2021:</strong> I qualified for Kona (the Ironman
              World Championships).
            </li>
            <li>
              <strong>February 2022:</strong> I ran a 2:59 marathon.
            </li>
            <li>
              <strong>Today:</strong> I&apos;m 35, living here in Miami, and
              I&apos;m 190 lbs of actual, functional muscle. My bloodwork&apos;s
              optimal now—testosterone more than doubled.
            </li>
          </ul>
          <p>
            I didn&apos;t get here by grinding. I got here by doing less—better.
          </p>
        </div>
      </section>

      {/* Why Colorado Experiment stalls */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-neutral">
          Why the &quot;Colorado Experiment&quot; DIY Plan Usually Stalls
        </h2>
        <p className="mt-4 text-neutral-600">
          I saw the chat talking about running the Colorado Experiment and the
          4-Hour Body protocol. It&apos;s a legendary protocol, but 1970s iron
          has a massive flaw: <strong>Neural Inefficiency</strong>.
        </p>
        <p className="mt-4 text-neutral-600">
          If you walk into a gym stressed from work or a flight, your nervous
          system is &quot;clamped.&quot; You can&apos;t recruit the muscle
          fibers necessary to actually trigger the 34 lb muscle-gain signal
          Ferriss talks about.
        </p>
        <p className="mt-4 text-neutral-600">
          The Uplifted Method is how we solve the Neural Bottleneck:
        </p>
      </section>

      {/* The Method */}
      <section className="mt-10 space-y-8">
        <div>
          <h3 className="text-lg font-bold text-neutral">
            The Prime (Shiftwave)
          </h3>
          <p className="mt-2 text-neutral-600">
            We don&apos;t start with the workout. We start on the Shiftwave. It
            uses pulsed pressure waves to regulate your nervous system and
            &quot;prime&quot; your neural pathways before you touch the machine.
            This tells your brain it is safe to output 100% of your strength.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-neutral">
            The Stimulus (ARX)
          </h3>
          <p className="mt-2 text-neutral-600">
            Now that you&apos;re primed, we hit absolute muscle failure in one
            set. The machine fights you back with the exact force you&apos;re
            capable of producing. No momentum. No wasted reps.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-neutral">
            The Fuel (Red Light & Sunlight)
          </h3>
          <p className="mt-2 text-neutral-600">
            We flood your cells with light to clear lactic acid and accelerate
            repair while you follow our Animal-Based Bulk.
          </p>
        </div>
      </section>

      {/* Cohort offer */}
      <section className="mt-14 rounded-xl bg-cream/50 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-neutral">
          The Feb 16 &quot;MMW Peak&quot; Cohort
        </h2>
        <p className="mt-4 text-neutral-600">
          I&apos;m opening the lab for a 6-week cohort to get the &quot;Andreses
          South Beach&quot; crew ready for Miami Music Week.
        </p>
        <ul className="mt-6 space-y-3 text-neutral-600">
          <li className="flex gap-3">
            <span className="font-semibold text-neutral">12 Lab Sessions:</span>
            2× per week. 20 minutes each.
          </li>
          <li className="flex gap-3">
            <span className="font-semibold text-neutral">
              Neurological Priming:
            </span>
            Shiftwave session before every workout for maximum force production.
          </li>
          <li className="flex gap-3">
            <span className="font-semibold text-neutral">
              Unlimited Recovery Pass:
            </span>
            Use the Red Light lab whenever you&apos;re feeling fried.
          </li>
          <li className="flex gap-3">
            <span className="font-semibold text-neutral">
              The Animal Bulk Blueprint:
            </span>
            My exact shopping list (80/20 beef, whole milk, eggs, tallow) to hit
            4,000–6,000 calories.
          </li>
          <li className="flex gap-3">
            <span className="font-semibold text-neutral">
              The Handsome Cohort:
            </span>
            Private WhatsApp group for the crew—session coordination, force
            data, and accountability.
          </li>
        </ul>
      </section>

      {/* Pricing */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-neutral">
          The Investment: Partnership Pricing
        </h2>
        <p className="mt-4 text-neutral-600">
          I want results, not just customers. I&apos;m offering this cohort on
          a sliding scale based on how much you want to help me document the
          method.
        </p>
        <ul className="mt-6 space-y-6">
          <li className="border-l-4 border-primary pl-4">
            <strong className="text-neutral">
              The &quot;Private Performer&quot; ($1,450)
            </strong>
            <p className="mt-1 text-neutral-600">
              You want the results, but you want to stay off the radar. You show
              up, you get jacked, and we keep the data between us.
            </p>
          </li>
          <li className="border-l-4 border-primary pl-4">
            <strong className="text-neutral">
              The &quot;Lab Partner&quot; ($450–$850)
            </strong>
            <p className="mt-1 text-neutral-600">
              You&apos;re already planning to document your journey. In lieu of
              the full fee, you commit to a weekly content series
              (stories/reels) tagging the lab and showcasing your ARX force
              data.
            </p>
          </li>
          <li className="border-l-4 border-primary pl-4">
            <strong className="text-neutral">The &quot;Full Barter&quot;</strong>
            <p className="mt-1 text-neutral-600">
              If you have a significant audience and want to go &quot;all-in&quot;
              on high-production content for the method, let&apos;s talk.
            </p>
          </li>
        </ul>
      </section>

      {/* Guarantee */}
      <section className="mt-12 rounded-xl border-2 border-primary/20 bg-white p-6 sm:p-8">
        <h2 className="text-xl font-bold text-neutral">
          The &quot;Kona&quot; Guarantee
        </h2>
        <p className="mt-4 text-neutral-600">
          I&apos;ve trained over 1,000 people. I don&apos;t do hype. If you show
          up for your 12 sessions, follow the bulk, and your ARX strength data
          doesn&apos;t show a significant jump, I&apos;ll refund your fee.
        </p>
      </section>

      {/* CTA + Form capture */}
      <section className="mt-14 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8">
        <h2 className="text-xl font-bold text-neutral">Apply for the cohort</h2>
        <p className="mt-2 text-neutral-600">
          Starts Feb 16, 2026. Fill out the form below and we&apos;ll be in touch.
        </p>
        <div className="mt-6">
          <HandsomeCohortForm />
        </div>
      </section>
    </article>
  );
}
