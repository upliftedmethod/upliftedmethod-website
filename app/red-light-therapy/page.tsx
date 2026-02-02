import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Red Light Therapy Miami | RLT & Recovery | Upper Buena Vista",
  description:
    "Red light therapy Miami and red light therapy near me—we're in Upper Buena Vista. LED RLT for recovery, skin, wellness. Best red light therapy Upper Buena Vista.",
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

export default function RedLightTherapyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="section-heading">Red Light Therapy</h1>
      <p className="mt-4 text-lg text-neutral-600">
        Red light therapy (RLT)—photobiomodulation—uses specific wavelengths of light to support recovery, skin, and wellness. We&apos;re in Upper Buena Vista on the EnergyLounger full-body bed. Train with us or elsewhere; RLT fits either way.
      </p>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-neutral">What&apos;s Included</h2>
        <p className="mt-2 text-neutral-600">
          Sessions are straightforward. Full-body exposure, about twenty minutes.
        </p>
        <ul className="mt-4 list-inside list-disc space-y-2 text-neutral-600">
          <li><strong>EnergyLounger full-body session</strong> — LED red light on a dedicated bed so you get full-body exposure in one block (typically 20 minutes). We target systemic recovery and skin.</li>
          <li><strong>Session length that works</strong> — Twenty minutes is our standard. Enough for meaningful photobiomodulation; you can pair it with ARX or Shiftwave in the same visit.</li>
          <li><strong>Standalone or add-on</strong> — Book red light only, or add it before or after ARX or Shiftwave. Same studio.</li>
          <li><strong>Clean, private environment</strong> — Our red light setup is in the same studio as our strength and Shiftwave equipment—calm, professional, no crowded spa vibe.</li>
          <li><strong>Education on use</strong> — We explain how red light therapy works, red light vs infrared (and when they&apos;re used together), and how RLT fits with your training and recovery goals.</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-neutral">Common Problems We Solve</h2>
        <p className="mt-2 text-neutral-600">
          Clients come to us when they want recovery that fits real training and lifestyle.
        </p>
        <ul className="mt-4 list-inside list-disc space-y-2 text-neutral-600">
          <li><strong>Recovery lags behind training.</strong> You&apos;re doing strength or ARX but don&apos;t have a consistent recovery habit. RLT can help reduce soreness and support tissue repair so you can train again sooner.</li>
          <li><strong>Skin and wellness in one stop.</strong> You want full-body and skin benefits without a separate spa trip. Our RLT sessions cover both in the same studio where you train.</li>
          <li><strong>Athletes who need more than ice and rest.</strong> RLT fits into a serious training schedule. Stack it with strength work the same day.</li>
          <li><strong>Confusion about red light vs infrared.</strong> We clarify how RLT works and the difference between red light and infrared so you know what you&apos;re getting.</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-neutral">Our Process</h2>
        <p className="mt-2 text-neutral-600">
          From first visit to regular sessions, we keep it simple.
        </p>
        <ol className="mt-4 list-decimal list-inside space-y-3 text-neutral-600">
          <li><strong>Book your session.</strong> Choose red light only or combine with ARX or Shiftwave. If you&apos;re new, we&apos;ll confirm what to expect and how to prepare (e.g. comfortable clothing, no lotions that block light).</li>
          <li><strong>Check-in at the studio.</strong> You&apos;ll get a quick orientation to the EnergyLounger and our 20-minute protocol. We answer any questions about how RLT works or red light vs infrared.</li>
          <li><strong>Session on the bed.</strong> You lie on the EnergyLounger; we set the timer and leave you to relax. Full-body LED—no hands-on treatment, just light.</li>
          <li><strong>Done.</strong> After your session you can leave or add ARX or Shiftwave. Many clients do RLT after a workout or before to round out their visit.</li>
          <li><strong>Ongoing use.</strong> Best results come with consistency. We offer packages so repeat visits are easy to book.</li>
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-neutral">Why Choose Us</h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-neutral-600">
          <li><strong>Built for people who train.</strong> We&apos;re a personal training and recovery studio—RLT for athletes and anyone doing strength work. Not a generic spa.</li>
          <li><strong>Full-body, real equipment.</strong> The EnergyLounger delivers proper intensity and coverage. Recovery and skin in one session.</li>
          <li><strong>One location.</strong> ARX, RLT, and Shiftwave at our Upper Buena Vista studio. No driving all over town.</li>
          <li><strong>Honest positioning.</strong> We don&apos;t overclaim. RLT as part of a serious recovery offering—protocol and consistency, not hype.</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-neutral">FAQs</h2>
        <dl className="mt-4 space-y-6">
          <div>
            <dt className="font-semibold text-neutral">How does red light therapy work?</dt>
            <dd className="mt-1 text-neutral-600">
              Red light therapy uses specific wavelengths of red and near-infrared light (photobiomodulation) that penetrate skin and soft tissue. The light is thought to support cellular energy production and reduce inflammation, which can aid recovery, skin health, and general wellness. It&apos;s non-invasive—you simply lie under the lights for a set time (we use about 20 minutes).
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-neutral">What&apos;s the difference between red light and infrared?</dt>
            <dd className="mt-1 text-neutral-600">
              Red light is visible; near-infrared is just beyond the visible spectrum. Both are used in photobiomodulation; many devices (including ours) use both. Our full-body LED setup includes appropriate wavelengths for recovery and skin.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-neutral">Can I do red light therapy after a workout?</dt>
            <dd className="mt-1 text-neutral-600">
              Yes. Many clients do RLT right after ARX or strength training—recovery and soreness support. We can schedule back-to-back so you get training and red light in one visit.
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
          We&apos;re in <strong>Upper Buena Vista</strong>. All RLT happens here. Clients drive in from Miami and the surrounding areas—Key Biscayne, Grove, Gables, Pinecrest, Beach, Surfside. Address and directions: <Link href="/locations/fl/miami" className="font-medium text-primary hover:underline">Locations</Link>.
        </p>
        <p className="mt-2 text-sm text-neutral-500">
          Neighborhoods we serve: {NEIGHBORHOODS.join(", ")}.
        </p>
      </section>

      <div className="mt-12">
        <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
          Book Red Light Therapy
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
