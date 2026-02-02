import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const BOOK_URL = "https://upliftedmethod.as.me/schedule/550c1c04";
const PHONE = "305-419-3133";
const GBP_URL = "https://maps.app.goo.gl/Gs4SNHc7kvhpzEHz7";
const REVIEW_COUNT = 54;

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-dark px-4 py-20 text-white sm:px-6 sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Lift Your Energy
          </h1>
          <p className="mt-4 text-lg text-white/95 sm:text-xl">
            One studio in Upper Buena Vista: ARX training, red light, recovery, and the supplements we actually use. No franchise, no runaround.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent w-full sm:w-auto"
            >
              Try Your First Guided Session Free
            </a>
            <Link href="/shop" className="inline-flex items-center gap-2 rounded-lg border-2 border-white/80 bg-white/10 px-6 py-3 font-semibold backdrop-blur hover:bg-white/20">
              Shop Supplements
            </Link>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/80 bg-white/10 px-6 py-3 font-semibold backdrop-blur hover:bg-white/20"
            >
              {PHONE}
            </a>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm font-medium text-white/90">
            <span>20 minutes</span>
            <span>·</span>
            <span>Coach-led</span>
            <span>·</span>
            <span>One studio</span>
            <span>·</span>
            <span>Recovery included</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="section-heading text-center">What We Offer</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-600">
          One place: ARX for strength, Shiftwave and red light for recovery. The equipment and coaching we believe in—no big-box vibe, no sales pitch.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-primary">ARX</h3>
            <p className="mt-2 text-neutral-600">
              ARX Alpha and ARX Omni at our studio. Twenty minutes. Real work.
            </p>
            <Link href="/arx" className="mt-4 inline-block font-medium text-primary hover:underline">
              Learn more →
            </Link>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-primary">Shiftwave</h3>
            <p className="mt-2 text-neutral-600">
              Vibration and sound to settle your nervous system. Book it solo or stack it with ARX and red light the same day.
            </p>
            <Link href="/shiftwave" className="mt-4 inline-block font-medium text-primary hover:underline">
              Learn more →
            </Link>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-primary">Red Light Therapy</h3>
            <p className="mt-2 text-neutral-600">
              Full-body red light on the EnergyLounger. Recovery, skin, or both. Book it alone or right after a session.
            </p>
            <Link href="/red-light-therapy" className="mt-4 inline-block font-medium text-primary hover:underline">
              Learn more →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="section-heading text-center">Personal Training with ARX</h2>
          <p className="mt-4 text-center text-neutral-600">
            Yes—this is personal training. Every session is with one of our certified trainers—one-on-one or semi-private—so you get real attention, not a crowded floor. Certified guidance on the equipment, your goals, and how to keep you safe—no guessing. Twenty minutes, twice a week, is enough to get stronger and lift your energy. Same whether you&apos;re a busy parent, an executive with no time to waste, or someone who wants to stay strong for the long run and keep up with the grandkids. Safe for 50+; we work with clients who&apos;d rather not beat themselves up.
          </p>
          <p className="mt-4 text-center">
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Complimentary ARX Personal Training Session
            </a>
          </p>
        </div>
      </section>

      <section className="bg-neutral-50 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-center">
            <a
              href={GBP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-sm font-medium text-neutral-700 shadow-sm hover:border-primary hover:text-primary"
            >
              <span className="text-amber-500">★★★★★</span>
              <span>5.0 on Google</span>
              <span className="text-neutral-400">·</span>
              <span>{REVIEW_COUNT} five-star reviews</span>
            </a>
          </p>
          <h2 className="section-heading mt-10 text-center">What Clients Say</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-600">
            Kind words from those who train and recover here. More on Google.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <blockquote className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <p className="text-neutral-700">
                &ldquo;Uplifted has completely redefined my expectations of what a premium wellness center can be. The equipment is revolutionary, and the ShiftWave chairs alone are worth the visit—like a deep meditation and massage combined.&rdquo;
              </p>
              <footer className="mt-4 text-sm text-neutral-500">— Nick Mennell</footer>
            </blockquote>
            <blockquote className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <p className="text-neutral-700">
                &ldquo;I walked in by chance and found it life-changing. A full-body workout in 20 minutes, or the ShiftWave chair to relax and reset your nervous system in minutes. I only wish I could come every day!&rdquo;
              </p>
              <footer className="mt-4 text-sm text-neutral-500">— Kelly Phoenix</footer>
            </blockquote>
            <blockquote className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <p className="text-neutral-700">
                &ldquo;Red Light Therapy, ShiftWave, then a full workout on the Omni—all in one visit. I&apos;ve never felt so strong in just 20 minutes. This place is a game-changer for body and mind.&rdquo;
              </p>
              <footer className="mt-4 text-sm text-neutral-500">— Elisha Mercer</footer>
            </blockquote>
            <blockquote className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <p className="text-neutral-700">
                &ldquo;From red light therapy to ARX adaptive resistance and Shiftwave—you can walk out as a better version of yourself. So thankful for my first visit; I plan to be back regularly.&rdquo;
              </p>
              <footer className="mt-4 text-sm text-neutral-500">— William Kragie</footer>
            </blockquote>
            <blockquote className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <p className="text-neutral-700">
                &ldquo;A cozy, boutique gym in Upper Buena Vista. Perfect for quick, effective sessions that deliver noticeable results. Eric brings a positive, uplifting vibe; the community is friendly and welcoming.&rdquo;
              </p>
              <footer className="mt-4 text-sm text-neutral-500">— Lorena Quijano La Rotta</footer>
            </blockquote>
            <blockquote className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <p className="text-neutral-700">
                &ldquo;The chair&apos;s vibrations synchronized with guided meditation—immersive and deeply relaxing. I left feeling lighter, calmer, and more energized. Highly recommend for a unique wellness experience in Miami.&rdquo;
              </p>
              <footer className="mt-4 text-sm text-neutral-500">— Ihsan Colak</footer>
            </blockquote>
          </div>
          <p className="mt-10 text-center">
            <a
              href={GBP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              See all reviews on Google →
            </a>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="section-heading text-center">Where We Are</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-600">
          We’re in Upper Buena Vista. Most of our clients drive in from the Key, Grove, Gables, Pinecrest, Beach, and Surfside.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {["Key Biscayne", "Coconut Grove", "Coral Gables", "Pinecrest", "Miami Beach", "Surfside", "Miami"].map((area) => (
            <Link
              key={area}
              href={`/locations/fl/miami#${area.toLowerCase().replace(/\s+/g, "-")}`}
              className="rounded-full bg-neutral-100 px-5 py-2.5 text-sm font-medium text-neutral-700 hover:bg-primary hover:text-white"
            >
              {area}
            </Link>
          ))}
        </div>
        <p className="mt-8 text-center">
          <Link href="/locations/fl/miami" className="btn-primary">
            Studio address & directions
          </Link>
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="section-heading text-center">FAQs</h2>
        <dl className="mt-8 space-y-6">
          <div>
            <dt className="font-semibold text-neutral-900">Is this personal training?</dt>
            <dd className="mt-2 text-neutral-600">
              Yes. Every ARX session is guided by one of our certified trainers—one-on-one or semi-private. You work with a coach who programs your session, watches your form, and adjusts the load. It&apos;s personal training with adaptive resistance, not a class or a solo gym hour.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-neutral-900">How is ARX different from traditional personal training?</dt>
            <dd className="mt-2 text-neutral-600">
              ARX machines adapt to you rep by rep, so you get the right resistance at every point in the movement. That means efficient, safe strength work in about 20 minutes—no plates to load, no guesswork. You still get a personal trainer guiding the session; the tech just makes the work more precise and time-efficient.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-neutral-900">Safe for injuries or aging?</dt>
            <dd className="mt-2 text-neutral-600">
              ARX is low-impact and adjustable. We work with clients who have had injuries, joint limits, or just want to train without beating themselves up. If you&apos;re not sure, we can talk through it before your first session—or come in for a complimentary session and see how it feels.
            </dd>
          </div>
        </dl>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="section-heading text-center">Learn & Shop</h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-neutral-600">
          Guides on how we train and recover—and a shop for the same supplements we use in-studio.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link href="/blog" className="btn-primary">
            Blog & Guides
          </Link>
          <Link href="/shop" className="rounded-lg border-2 border-neutral-300 px-6 py-3 font-semibold text-neutral-700 hover:border-primary hover:text-primary">
            Shop Supplements
          </Link>
          <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="rounded-lg border-2 border-neutral-300 px-6 py-3 font-semibold text-neutral-700 hover:border-primary hover:text-primary">
            Book a Session
          </a>
        </div>
      </section>
    </>
  );
}
