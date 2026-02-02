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
    ctaHref: null as string | null,
  },
  {
    id: "red-light",
    title: "Red Light Therapy",
    short: "Full-body red light on the EnergyLounger.",
    body: "Our EnergyLounger red light bed is at the studio. Recovery, skin, or both. Book it alone or stack it with a session. Ask about packages.",
    cta: "Book red light",
    detailHref: "/red-light-therapy",
    ctaHref: null as string | null,
  },
  {
    id: "arx",
    title: "ARX Adaptive Resistance",
    short: "The machine adapts so every rep counts.",
    body: "ARX (Adaptive Resistance Exercise) adapts as you move—so you're under load at every point in the rep. We use ARX Alpha and ARX Omni at Upper Buena Vista. Twenty minutes, real work.",
    cta: "Try ARX",
    detailHref: "/arx",
    ctaHref: null as string | null,
  },
  {
    id: "shiftwave",
    title: "Shiftwave Recovery",
    short: "Vibration and sound to settle your nervous system.",
    body: "Shiftwave uses whole-body vibration, breathwork, and audio—circulation, relaxation, recovery. Book it alone or pair it with ARX and red light the same day at our Upper Buena Vista studio.",
    cta: "Book Shiftwave",
    detailHref: "/shiftwave",
    ctaHref: null as string | null,
  },
  {
    id: "arx-red-light",
    title: "ARX + Red Light",
    short: "Strength and recovery in one visit.",
    body: "Twenty minutes of ARX, twenty minutes of red light on the EnergyLounger. One check-in, one block. No second stop. Book the combo at Upper Buena Vista.",
    cta: "Book ARX + Red Light",
    detailHref: "/arx-and-red-light",
    ctaHref: null as string | null,
  },
  {
    id: "recovery-stack",
    title: "Recovery Stack",
    short: "Shiftwave + red light in one visit.",
    body: "Nervous-system recovery and full-body red light in one block. Add ARX the same day for strength and full recovery. One location, Upper Buena Vista.",
    cta: "Book Recovery Stack",
    detailHref: "/recovery-stack",
    ctaHref: null as string | null,
  },
  {
    id: "supplements",
    title: "Recovery Supplements",
    short: "Support strength, recovery, and energy.",
    body: "Curated supplements that pair with ARX, red light, and Shiftwave. In-studio or shop online. No junk—options we’d take ourselves.",
    cta: "Shop supplements",
    detailHref: "/supplements",
    ctaHref: "/shop",
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
              {service.ctaHref ? (
                <Link href={service.ctaHref} className="btn-primary inline-block">
                  {service.cta}
                </Link>
              ) : (
                <a
                  href={BOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-block"
                >
                  {service.cta}
                </a>
              )}
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
        <Link href="/locations/fl/miami" className="font-medium text-primary hover:underline">
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
