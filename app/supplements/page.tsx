import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Recovery Supplements Miami | Support Training & Recovery | Upper Buena Vista",
  description:
    "Recovery supplements at Uplifted Upper Buena Vista. Support strength, recovery, and energy. In-studio or shop online. Miami, Key Biscayne, Coconut Grove, Coral Gables, Pinecrest.",
  alternates: { canonical: "/supplements" },
};

const NEIGHBORHOODS = [
  "Upper Buena Vista",
  "Key Biscayne",
  "Coconut Grove",
  "Coral Gables",
  "Pinecrest",
  "Miami Beach",
  "Surfside",
];

export default function SupplementsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="section-heading">Recovery Supplements</h1>
      <p className="mt-4 text-lg text-neutral-600">
        We carry supplements that support what we do in the studio: strength, recovery, and energy. No endless aisles. No junk. Curated options that pair with ARX, red light, and Shiftwave—so you train, recover, and fuel in one ecosystem. Ask at the studio or <Link href="/shop" className="font-medium text-primary hover:underline">shop online</Link>.
      </p>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-neutral">Why We Sell Supplements</h2>
        <p className="mt-2 text-neutral-600">
          Training and recovery only go so far if sleep, stress, or nutrition are dragging. We’re not a supplement store. We’re a studio that offers a short list of things we’d take ourselves—and that support the work you do on the floor and in the chair.
        </p>
        <p className="mt-4 text-neutral-600">
          That means no hype, no proprietary blends with silly names. We pick products that fit our clients: busy adults who want real results without chasing a dozen bottles. If you’re doing ARX, red light, or Shiftwave with us, supplements can fill gaps—recovery, sleep, energy—so the rest of your system keeps up.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-neutral">What We Focus On</h2>
        <p className="mt-2 text-neutral-600">
          Our lineup centers on a few areas that matter for people who train and recover.
        </p>
        <ul className="mt-4 list-inside list-disc space-y-2 text-neutral-600">
          <li><strong>Recovery</strong> — Support for muscle repair, soreness, and inflammation so you can train again sooner. Often used alongside red light and Shiftwave.</li>
          <li><strong>Sleep & stress</strong> — Sleep quality and nervous-system support. Shiftwave handles in-studio recovery; what you do at home matters too. We carry options that help.</li>
          <li><strong>Energy</strong> — Not stimulant overload. Clean energy and focus for training and day-to-day. We avoid the crash-and-burn stuff.</li>
          <li><strong>Foundation</strong> — Basics that many people are low on: quality protein, omega-3s, vitamin D where it fits. Nothing fancy—just things that stack with a real training and recovery routine.</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-neutral">How It Fits With the Studio</h2>
        <p className="mt-2 text-neutral-600">
          Supplements don’t replace ARX, red light, or Shiftwave. They support them. Train with us, recover with us, and use nutrition and supplementation to close the loop. Same philosophy: efficient, clear, no noise.
        </p>
        <p className="mt-4 text-neutral-600">
          Many clients do <Link href="/arx-and-red-light" className="font-medium text-primary hover:underline">ARX + red light</Link> or the full <Link href="/recovery-stack" className="font-medium text-primary hover:underline">recovery stack</Link> (Shiftwave + red light) and take a small set of supplements at home. We’re happy to talk through what makes sense for your goals when you’re in the studio—or point you to the <Link href="/shop" className="font-medium text-primary hover:underline">shop</Link> if you prefer to browse and order online.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-neutral">Where to Get Them</h2>
        <p className="mt-2 text-neutral-600">
          You can buy in person at Upper Buena Vista when you’re in for a session. We keep a selection on hand. If you’re not local or you’d rather order from home, we have an online shop—same products, shipped. Check <Link href="/shop" className="font-medium text-primary hover:underline">Shop</Link> for current offerings and checkout.
        </p>
        <p className="mt-4 text-neutral-600">
          We don’t push. We offer. If you want to focus only on training and recovery in the studio, that’s fine. Supplements are there for clients who want to extend their routine beyond the hour they spend with us.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-neutral">FAQs</h2>
        <dl className="mt-4 space-y-6">
          <div>
            <dt className="font-semibold text-neutral">Do I need to be a client to buy supplements?</dt>
            <dd className="mt-1 text-neutral-600">
              No. You can shop online without ever stepping into the studio. If you are a client, we’re happy to discuss what might fit your goals when you’re in—no obligation.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-neutral">What if I’m not sure what to take?</dt>
            <dd className="mt-1 text-neutral-600">
              We keep the lineup small on purpose. If you tell us your goals (recovery, sleep, energy), we can point you to one or two things to start. We’re not prescribing—we’re suggesting based on what we use and what our clients use.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-neutral">Where are you located?</dt>
            <dd className="mt-1 text-neutral-600">
              Our studio is in Upper Buena Vista, Miami. Clients and supplement pickups happen there. We serve Key Biscayne, Coconut Grove, Coral Gables, Pinecrest, Miami Beach, Surfside. Full address: <Link href="/locations/fl/miami" className="font-medium text-primary hover:underline">Locations</Link>.
            </dd>
          </div>
        </dl>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-neutral">Service Area</h2>
        <p className="mt-2 text-neutral-600">
          One studio in <strong>Upper Buena Vista</strong>. In-person supplement sales and pickups happen there. Online orders ship. Neighborhoods we serve: Key Biscayne, Coconut Grove, Coral Gables, Pinecrest, Miami Beach, Surfside. <Link href="/locations/fl/miami" className="font-medium text-primary hover:underline">Locations</Link> for address and directions.
        </p>
        <p className="mt-2 text-sm text-neutral-500">
          Neighborhoods we serve: {NEIGHBORHOODS.join(", ")}.
        </p>
      </section>

      <div className="mt-12">
        <Link href="/shop" className="btn-primary inline-block">
          Shop Supplements
        </Link>
        <span className="ml-4">
          <Link href="/services" className="font-medium text-primary hover:underline">
            See all services
          </Link>
        </span>
      </div>
    </div>
  );
}
