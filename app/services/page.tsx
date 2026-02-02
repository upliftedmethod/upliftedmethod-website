import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Personal Training, Red Light & Recovery | Upper Buena Vista",
  description:
    "Recovery studio Miami and fitness studio Upper Buena Vista. Miami personal training (ARX), red light therapy, recovery. Key Biscayne, Coconut Grove, Coral Gables, Pinecrest, Miami Beach, Surfside.",
  alternates: { canonical: "/services" },
};

const BOOK_URL = "https://upliftedmethod.as.me/schedule/550c1c04";

const SERVICES = [
  {
    id: "studio",
    title: "In-Studio Training (Upper Buena Vista)",
    short: "ARX Alpha and ARX Omni. Twenty minutes, real work.",
    body: "Our studio at Upper Buena Vista has ARX Alpha, ARX Omni, the EnergyLounger red light bed, and Shiftwave. Come in for strength, recovery, or both. ARX adapts as you move—you get real work done in a short session. No big gym, no wasted time.",
    cta: "Book a session",
    detailHref: null as string | null,
  },
  {
    id: "red-light",
    title: "Red Light Therapy",
    short: "Full-body red light on the EnergyLounger.",
    body: "Our EnergyLounger red light bed is at the studio. Recovery, skin, or both. Book it alone or stack it with a session. Ask about packages.",
    cta: "Book red light",
    detailHref: "/red-light-therapy",
  },
  {
    id: "arx",
    title: "ARX Adaptive Resistance",
    short: "The machine adapts so every rep counts.",
    body: "ARX (Adaptive Resistance Exercise) adapts as you move—so you're under load at every point in the rep. We use ARX Alpha and ARX Omni at Upper Buena Vista. Twenty minutes, real work.",
    cta: "Try ARX",
    detailHref: "/arx",
  },
  {
    id: "shiftwave",
    title: "Shiftwave Recovery",
    short: "Vibration and sound to settle your nervous system.",
    body: "Shiftwave uses whole-body vibration, breathwork, and audio—circulation, relaxation, recovery. Book it alone or pair it with ARX and red light the same day at our Upper Buena Vista studio.",
    cta: "Book Shiftwave",
    detailHref: "/shiftwave",
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="section-heading">Services</h1>
      <p className="mt-4 text-lg text-neutral-600">
        One spot: ARX training, red light, and recovery at Upper Buena Vista. Strength and the education to back it.
      </p>

      <div className="mt-12 space-y-16">
        {SERVICES.map((service) => (
          <section key={service.id} id={service.id} className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary">{service.title}</h2>
            <p className="mt-2 text-lg font-medium text-neutral-700">{service.short}</p>
            <p className="mt-4 text-neutral-600">{service.body}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href={BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                {service.cta}
              </a>
              {service.detailHref && (
                <Link href={service.detailHref} className="font-medium text-primary hover:underline">
                  Learn more →
                </Link>
              )}
            </div>
          </section>
        ))}
      </div>

      <p className="mt-16 text-center">
        <Link href="/locations" className="font-medium text-primary hover:underline">
          Studio address & directions →
        </Link>
      </p>
      <p className="mt-2 text-center">
        <Link href="/shop" className="font-medium text-primary hover:underline">
          Shop supplements →
        </Link>
      </p>
    </div>
  );
}
