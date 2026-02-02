import Link from "next/link";

const BOOK_URL = "https://upliftedmethod.as.me/schedule/550c1c04";
const PHONE = "305-419-3133";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-dark px-4 py-20 text-white sm:px-6 sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Lift Your Energy
          </h1>
          <p className="mt-4 text-lg text-white/95 sm:text-xl">
            ARX training and red light therapy at Upper Buena Vista. In-studio strength, recovery, and supplements—one place in Miami.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent w-full sm:w-auto"
            >
              Book a Session
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
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="section-heading text-center">What We Offer</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-600">
          In-studio ARX adaptive resistance, red light therapy, and recovery at Upper Buena Vista—plus education and supplements to support your results.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-primary">In-Studio Training</h3>
            <p className="mt-2 text-neutral-600">
              ARX Alpha and ARX Omni at our 270 sq ft space in Upper Buena Vista. Maximum engagement in minimal time.
            </p>
            <Link href="/services#studio" className="mt-4 inline-block font-medium text-primary hover:underline">
              Learn more →
            </Link>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-primary">Red Light Therapy</h3>
            <p className="mt-2 text-neutral-600">
              EnergyLounger red light bed for recovery, skin, and wellness. Standalone or add-on to training.
            </p>
            <Link href="/services#red-light" className="mt-4 inline-block font-medium text-primary hover:underline">
              Learn more →
            </Link>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-primary">Supplements</h3>
            <p className="mt-2 text-neutral-600">
              Curated supplements to support performance and recovery. Shop online—same standards as the studio.
            </p>
            <Link href="/shop" className="mt-4 inline-block font-medium text-primary hover:underline">
              Shop →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="section-heading text-center">What Clients Say</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-600">
            Real results from real people. All reviews from Google—see more on our profile.
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
              href="https://maps.app.goo.gl/p3efA9a9p5QLzyiK9"
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
          Upper Buena Vista, Miami. Clients from Key Biscayne, Coconut Grove, Coral Gables, Pinecrest, Miami Beach, and Surfside train and recover here.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {["Key Biscayne", "Coconut Grove", "Coral Gables", "Pinecrest", "Miami Beach", "Surfside", "Miami"].map((area) => (
            <Link
              key={area}
              href={`/locations#${area.toLowerCase().replace(/\s+/g, "-")}`}
              className="rounded-full bg-neutral-100 px-5 py-2.5 text-sm font-medium text-neutral-700 hover:bg-primary hover:text-white"
            >
              {area}
            </Link>
          ))}
        </div>
        <p className="mt-8 text-center">
          <Link href="/locations" className="btn-primary">
            Studio address & directions
          </Link>
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="section-heading text-center">Learn & Shop</h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-neutral-600">
          Educational content on training, recovery, and supplements—and a shop for the products we trust. Built for SEO and for you.
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
