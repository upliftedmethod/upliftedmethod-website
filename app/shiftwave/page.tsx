import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shiftwave Recovery Miami | Vibration & Sound | Upper Buena Vista",
  description:
    "Shiftwave recovery Miami at Upper Buena Vista. Vibration and sound for nervous-system recovery in-studio. Pairs with ARX and red light therapy.",
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

export default function ShiftwavePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="section-heading">Shiftwave Recovery</h1>
      <p className="mt-4 text-lg text-neutral-600">
        Shiftwave uses whole-body vibration, breathwork, and audio (plus optional light) to settle your nervous system—so you can recover and reset. At our Upper Buena Vista studio you sit in the chair, we set the protocol, you recover. Same visit as ARX and red light. One place.
      </p>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-neutral">What&apos;s Included</h2>
        <p className="mt-2 text-neutral-600">
          Every Shiftwave session is built for clarity and results.
        </p>
        <ul className="mt-4 list-inside list-disc space-y-2 text-neutral-600">
          <li><strong>Shiftwave chair session</strong> — Full access to our Shiftwave recovery chair at the studio. You sit or recline while the system runs; typical sessions are in the 15–30 minute range depending on your goals and schedule.</li>
          <li><strong>Protocol selection</strong> — We choose the right intensity and duration for you—recovery after training, general wellness, or both. We tailor to your needs.</li>
          <li><strong>Standalone or stacked</strong> — Book Shiftwave only or pair it with ARX and red light in the same visit. One location for strength and recovery.</li>
          <li><strong>Quiet, focused environment</strong> — Our recovery studio is the same space as our ARX and red light setup—calm, private, no crowded gym or spa noise.</li>
          <li><strong>Education on how Shiftwave works</strong> — We explain what the chair does, how it fits with training and red light, and how to use it for ongoing recovery.</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-neutral">Common Problems We Solve</h2>
        <p className="mt-2 text-neutral-600">
          Clients come to us when they want recovery that matches their training and lifestyle.
        </p>
        <ul className="mt-4 list-inside list-disc space-y-2 text-neutral-600">
          <li><strong>Recovery doesn&apos;t keep up with training.</strong> You&apos;re doing ARX or other strength work but soreness and fatigue linger. Shiftwave can help circulation and relaxation so you train consistently without burning out.</li>
          <li><strong>Too many stops for one routine.</strong> You want strength, red light, and nervous-system recovery but don&apos;t want to drive to three places. We offer Shiftwave Miami alongside ARX and red light in one studio—one trip.</li>
          <li><strong>Stress and tension outside the gym.</strong> Shiftwave isn&apos;t just for athletes. Many use it for general relaxation—sit in the chair, let the protocol run, walk out feeling reset.</li>
          <li><strong>Unclear what &quot;recovery&quot; actually means.</strong> We spell it out: how Shiftwave works, how it fits with training and red light, and what to expect.</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-neutral">Our Process</h2>
        <p className="mt-2 text-neutral-600">
          From first visit to regular use, we keep the path simple.
        </p>
        <ol className="mt-4 list-decimal list-inside space-y-3 text-neutral-600">
          <li><strong>Book your session.</strong> Choose Shiftwave only or combine with ARX and/or red light. If you&apos;re new, we&apos;ll confirm what to expect and how to prepare (comfortable clothing, no metal implants in the treatment area if applicable—we&apos;ll guide you).</li>
          <li><strong>Check-in at the studio.</strong> You&apos;ll get a short orientation to the Shiftwave chair and our protocol options. We answer any questions about how it works.</li>
          <li><strong>Session in the chair.</strong> You sit or recline; we set the protocol and start the session. You relax while the system runs—typically 15–30 minutes.</li>
          <li><strong>Done.</strong> After your session you can leave or add ARX/red light. Many clients do Shiftwave after ARX or before red light to round out their visit.</li>
          <li><strong>Ongoing use.</strong> Shiftwave recovery benefits often compound with consistency. We can set up a recurring schedule or package so Shiftwave Miami and Shiftwave Upper Buena Vista fit your routine.</li>
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-neutral">Why Choose Us</h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-neutral-600">
          <li><strong>Recovery studio, not a side offering.</strong> We&apos;re built for people who train and recover. Shiftwave is part of that—not a spa add-on.</li>
          <li><strong>One place.</strong> ARX, red light, and Shiftwave in one studio. No driving between gym, red light spot, and recovery chair.</li>
          <li><strong>Real equipment, clear protocol.</strong> We use the Shiftwave chair as intended and tailor sessions to your goals. No gimmicks.</li>
          <li><strong>Honest positioning.</strong> We don&apos;t overpromise. Shiftwave is a tool for circulation, relaxation, and recovery—protocol and consistency, not hype.</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-neutral">FAQs</h2>
        <dl className="mt-4 space-y-6">
          <div>
            <dt className="font-semibold text-neutral">What is Shiftwave?</dt>
            <dd className="mt-1 text-neutral-600">
              Shiftwave is a recovery system that uses whole-body vibration, guided breathwork, and audio (and optional light) to help regulate the nervous system. You sit or recline in a chair while the system runs; it can support circulation, relaxation, and recovery—often in combination with training and red light therapy.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-neutral">How long is a Shiftwave session?</dt>
            <dd className="mt-1 text-neutral-600">
              Typical sessions are 15–30 minutes, depending on your goals and what we pair with it (e.g. ARX or red light). We’ll set the duration when you book or at check-in.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-neutral">Can I do Shiftwave with ARX and red light?</dt>
            <dd className="mt-1 text-neutral-600">
              Yes. Many clients do ARX, then red light, then Shiftwave—or any order that fits. We can schedule back-to-back so you get strength and full recovery in one visit.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-neutral">Where are you located?</dt>
            <dd className="mt-1 text-neutral-600">
              Our studio is in Upper Buena Vista, Miami. We serve clients from Key Biscayne, Coconut Grove, Coral Gables, Pinecrest, Miami Beach, and Surfside. See our <Link href="/locations/fl/miami" className="font-medium text-primary hover:underline">Locations</Link> page for address and directions.
            </dd>
          </div>
        </dl>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-neutral">Service Area</h2>
        <p className="mt-2 text-neutral-600">
          We&apos;re in <strong>Upper Buena Vista</strong>. All Shiftwave sessions happen here. Clients drive in from Miami and the surrounding areas—Key Biscayne, Grove, Gables, Pinecrest, Beach, Surfside. One place: ARX, red light, Shiftwave in one visit. Address and directions: <Link href="/locations/fl/miami" className="font-medium text-primary hover:underline">Locations</Link>.
        </p>
        <p className="mt-2 text-sm text-neutral-500">
          Neighborhoods we serve: {NEIGHBORHOODS.join(", ")}.
        </p>
      </section>

      <div className="mt-12">
        <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
          Book Shiftwave
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
