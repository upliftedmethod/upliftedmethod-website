import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Recovery Stack Miami | Shiftwave + Red Light | Upper Buena Vista",
  description:
    "Full recovery stack at Upper Buena Vista: Shiftwave and red light therapy in one visit. Nervous system + tissue. Add ARX the same day. Miami, Key Biscayne, Coconut Grove, Coral Gables, Pinecrest.",
  alternates: { canonical: "/recovery-stack" },
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

export default function RecoveryStackPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="section-heading">Recovery Stack</h1>
      <p className="mt-4 text-lg text-neutral-600">
        Shiftwave and red light in one visit. Nervous-system recovery plus full-body photobiomodulation. No second location. No “I’ll do recovery later.” You sit in the Shiftwave chair, then lie on the EnergyLounger. Same studio at Upper Buena Vista. Optional: add ARX the same day and you’ve got strength and full recovery in one block.
      </p>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-neutral">What’s in the Stack</h2>
        <p className="mt-2 text-neutral-600">
          Two modalities that play well together. Shiftwave first or red light first—we can do either. Most clients do Shiftwave, then red light.
        </p>
        <ul className="mt-4 list-inside list-disc space-y-2 text-neutral-600">
          <li><strong>Shiftwave</strong> — Whole-body vibration, breathwork, and audio in the recovery chair. Settles the nervous system. Circulation, relaxation. Typically 15–30 minutes. You sit or recline; we set the protocol.</li>
          <li><strong>Red light therapy</strong> — EnergyLounger full-body LED. About 20 minutes. Tissue repair, skin support, photobiomodulation. You relax; we run the timer.</li>
          <li><strong>One visit</strong> — Book the stack and we block time for both. Plenty of clients from Key Biscayne, the Grove, Gables, Pinecrest, Beach, Surfside do this weekly or after heavy training days.</li>
          <li><strong>Optional ARX</strong> — Want strength the same day? Add <Link href="/arx" className="font-medium text-primary hover:underline">ARX</Link> before the stack. Train, then recover. One trip.</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-neutral">Who It’s For</h2>
        <p className="mt-2 text-neutral-600">
          People who take recovery seriously and don’t want to chase it in three different places.
        </p>
        <ul className="mt-4 list-inside list-disc space-y-2 text-neutral-600">
          <li><strong>You train hard and feel it.</strong> Soreness, fatigue, or stress that doesn’t clear with rest alone. Shiftwave and red light target different levers—nervous system and tissue—so you get a full recovery session.</li>
          <li><strong>You’ve tried one modality somewhere else.</strong> Maybe red light at a spa or vibration elsewhere. Here you get both, same roof, no driving between spots.</li>
          <li><strong>You want a repeatable routine.</strong> Recovery stack, same day, same place. Shiftwave + red light. Add ARX when you want strength. Simple.</li>
          <li><strong>You’re busy.</strong> One block. One location. Upper Buena Vista. No “I’ll do the chair next week.” You do it now.</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-neutral">How It Works</h2>
        <ol className="mt-4 list-decimal list-inside space-y-3 text-neutral-600">
          <li><strong>Book the stack.</strong> When you schedule, choose Shiftwave + red light (or add ARX). We reserve time for everything. First time? We’ll explain what to expect.</li>
          <li><strong>Check in at the studio.</strong> Upper Buena Vista. We’ll confirm order—Shiftwave then red light is typical. If you’re doing ARX too, we’ll run that first.</li>
          <li><strong>Shiftwave.</strong> You sit in the chair. We set intensity and duration. You follow the protocol—breathwork, vibration, audio. Usually 15–30 minutes.</li>
          <li><strong>Red light.</strong> You move to the EnergyLounger. Full-body LED, about 20 minutes. No hands-on; just light. Relax.</li>
          <li><strong>Done.</strong> You’ve hit nervous-system recovery and tissue recovery in one visit. Out the door. Repeat when it fits your schedule.</li>
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-neutral">Why Two Recovery Modalities</h2>
        <p className="mt-2 text-neutral-600">
          Shiftwave and red light do different things. Shiftwave targets circulation, relaxation, and nervous-system regulation—vibration, breath, sound. Red light targets cells and tissue—photobiomodulation, repair, skin. Together you’re not doubling up on the same lever; you’re covering both.
        </p>
        <p className="mt-4 text-neutral-600">
          We offer the stack because clients asked for it and because it fits how serious trainees and stressed professionals actually live. One location. One block. No hype—just protocol and consistency. If you want the full breakdown on each modality, see <Link href="/shiftwave" className="font-medium text-primary hover:underline">Shiftwave</Link> and <Link href="/red-light-therapy" className="font-medium text-primary hover:underline">red light therapy</Link>. This page is for the combo.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-neutral">FAQs</h2>
        <dl className="mt-4 space-y-6">
          <div>
            <dt className="font-semibold text-neutral">How long does the recovery stack take?</dt>
            <dd className="mt-1 text-neutral-600">
              Plan for about 45–55 minutes: ~15–30 minutes Shiftwave (we set it with you), ~20 minutes red light, plus a short transition. With ARX added, plan for more—we’ll block it when you book.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-neutral">Can I do red light before Shiftwave?</dt>
            <dd className="mt-1 text-neutral-600">
              Yes. Most do Shiftwave first, then red light. If you’d rather do red light first, we can. Tell us when you book or at check-in.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-neutral">Do I need to do ARX to book the stack?</dt>
            <dd className="mt-1 text-neutral-600">
              No. The recovery stack is Shiftwave + red light. ARX is optional—add it when you want strength the same day. Plenty of clients do the stack alone on recovery-only days.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-neutral">Where are you located?</dt>
            <dd className="mt-1 text-neutral-600">
              Our studio is in Upper Buena Vista, Miami. We serve clients from Key Biscayne, Coconut Grove, Coral Gables, Pinecrest, Miami Beach, and Surfside. Address and directions: <Link href="/locations/fl/miami" className="font-medium text-primary hover:underline">Locations</Link>.
            </dd>
          </div>
        </dl>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-neutral">Service Area</h2>
        <p className="mt-2 text-neutral-600">
          One studio in <strong>Upper Buena Vista</strong>. All Shiftwave and red light sessions happen here. If you’re in Miami or the surrounding areas—Key Biscayne, Grove, Gables, Pinecrest, Beach, Surfside—you’re in range. <Link href="/locations/fl/miami" className="font-medium text-primary hover:underline">Locations</Link> for address and directions.
        </p>
        <p className="mt-2 text-sm text-neutral-500">
          Neighborhoods we serve: {NEIGHBORHOODS.join(", ")}.
        </p>
      </section>

      <div className="mt-12">
        <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
          Book Recovery Stack
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
