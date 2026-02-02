import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ARX + Red Light Miami | Strength & Recovery in One Visit | Upper Buena Vista",
  description:
    "ARX training and red light therapy Miami in one session at Upper Buena Vista. Twenty minutes of strength, twenty minutes of RLT. Key Biscayne, Coconut Grove, Coral Gables, Pinecrest, Miami Beach, Surfside.",
  alternates: { canonical: "/arx-and-red-light" },
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

export default function ARXAndRedLightPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="section-heading">ARX + Red Light</h1>
      <p className="mt-4 text-lg text-neutral-600">
        Strength and recovery in one visit. You do your ARX session on Alpha or Omni—twenty minutes, coach-led—then lie on the EnergyLounger for full-body red light. No second stop. No second drive. Upper Buena Vista.
      </p>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-neutral">What You Get</h2>
        <p className="mt-2 text-neutral-600">
          Two modalities, one block. Most clients do ARX first, then red light. Order can flip if you prefer.
        </p>
        <ul className="mt-4 list-inside list-disc space-y-2 text-neutral-600">
          <li><strong>Full ARX session</strong> — Personal training on ARX Alpha and/or ARX Omni. Adaptive resistance, real work, about 20 minutes. Your coach programs and cues; you leave nothing on the table.</li>
          <li><strong>Full red light session</strong> — EnergyLounger full-body LED. Typically 20 minutes. Recovery, skin support, photobiomodulation. You relax; we set the timer.</li>
          <li><strong>One check-in, one visit</strong> — Book the combo and we block the time. No running across town. Plenty of clients from Key Biscayne, the Grove, Gables, Pinecrest, Beach, Surfside do this weekly.</li>
          <li><strong>Flexible order</strong> — ARX then red light is the usual. Some like red light first to warm up. We can do either.</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-neutral">Who It’s For</h2>
        <p className="mt-2 text-neutral-600">
          People who already want both—and don’t want to chase them in two places.
        </p>
        <ul className="mt-4 list-inside list-disc space-y-2 text-neutral-600">
          <li><strong>You’re time-crunched.</strong> One trip, one block. Train and recover in under an hour total. No “I’ll do red light next week.”</li>
          <li><strong>You’ve tried stacking elsewhere.</strong> Maybe you lift at a gym and hit a spa another day. Here it’s the same roof. Same coach. Same studio.</li>
          <li><strong>You care about recovery as much as strength.</strong> ARX gives you the stimulus; red light supports repair and soreness. Doing both the same day keeps the habit simple.</li>
          <li><strong>You want a clear routine.</strong> ARX + red light, same day, same place. Repeat. No mental overhead.</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-neutral">How It Works</h2>
        <ol className="mt-4 list-decimal list-inside space-y-3 text-neutral-600">
          <li><strong>Book the combo.</strong> When you schedule, choose ARX + red light. We reserve time for both. First time? We’ll walk you through what to expect.</li>
          <li><strong>Check in at the studio.</strong> Upper Buena Vista. We’ll confirm order: ARX first or red light first. Most do ARX first.</li>
          <li><strong>ARX.</strong> Your coach runs your 20-minute session on Alpha or Omni. Form, load, progression—all handled.</li>
          <li><strong>Red light.</strong> You move to the EnergyLounger. We set the protocol; you lie back for about 20 minutes. No hands-on; just light.</li>
          <li><strong>Done.</strong> You’re out with strength and recovery checked off. Optional: add <Link href="/shiftwave" className="font-medium text-primary hover:underline">Shiftwave</Link> for a full recovery stack the same day.</li>
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-neutral">Why Stack Them</h2>
        <p className="mt-2 text-neutral-600">
          ARX and red light do different jobs. ARX builds strength and muscle; red light supports tissue repair and recovery. Doing both in one visit doesn’t dilute either—it makes the habit stick.
        </p>
        <p className="mt-4 text-neutral-600">
          We don’t overclaim. We offer the combo because clients asked for it and because it fits how busy people actually live. One location. One block. Results come from consistency, and consistency is easier when the routine is simple.
        </p>
        <p className="mt-4 text-neutral-600">
          If you’re new to <Link href="/arx" className="font-medium text-primary hover:underline">ARX</Link> or <Link href="/red-light-therapy" className="font-medium text-primary hover:underline">red light therapy</Link>, read those pages for the full picture. This page is for the combo: same day, same studio, no extra logistics.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-neutral">FAQs</h2>
        <dl className="mt-4 space-y-6">
          <div>
            <dt className="font-semibold text-neutral">How long does ARX + red light take?</dt>
            <dd className="mt-1 text-neutral-600">
              Plan for about 45–50 minutes total: ~20 minutes ARX, ~20 minutes red light, plus a short transition. Some clients are in and out in under an hour.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-neutral">Can I do red light before ARX?</dt>
            <dd className="mt-1 text-neutral-600">
              Yes. Most do ARX first, then red light. If you’d rather warm up with red light first, we can do that. Tell us when you book or at check-in.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-neutral">Do you offer packages?</dt>
            <dd className="mt-1 text-neutral-600">
              We have options for repeat visits. Ask at the studio or when you book—we’ll match you to what makes sense for your schedule and goals.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-neutral">Where are you located?</dt>
            <dd className="mt-1 text-neutral-600">
              Our studio is in Upper Buena Vista, Miami. Clients come from Key Biscayne, Coconut Grove, Coral Gables, Pinecrest, Miami Beach, and Surfside. Full address and directions: <Link href="/locations/fl/miami" className="font-medium text-primary hover:underline">Locations</Link>.
            </dd>
          </div>
        </dl>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-neutral">Service Area</h2>
        <p className="mt-2 text-neutral-600">
          One studio in <strong>Upper Buena Vista</strong>. All ARX and red light sessions happen here. If you’re in Miami or the surrounding neighborhoods—Key Biscayne, Grove, Gables, Pinecrest, Beach, Surfside—you’re in range. <Link href="/locations/fl/miami" className="font-medium text-primary hover:underline">Locations</Link> for address and directions.
        </p>
        <p className="mt-2 text-sm text-neutral-500">
          Neighborhoods we serve: {NEIGHBORHOODS.join(", ")}.
        </p>
      </section>

      <div className="mt-12">
        <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
          Book ARX + Red Light
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
