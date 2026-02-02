import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "In-studio ARX training, red light therapy, and recovery at Upper Buena Vista, Miami. Key Biscayne, Coconut Grove, Coral Gables, Pinecrest, Miami Beach, Surfside.",
  alternates: { canonical: "/services" },
};

const BOOK_URL = "https://upliftedmethod.as.me/schedule/550c1c04";

const SERVICES = [
  {
    id: "studio",
    title: "In-Studio Training (Upper Buena Vista)",
    short: "ARX Alpha + ARX Omni. One space, serious results.",
    body: "Our private, boutique studio at Upper Buena Vista has ARX Alpha, ARX Omni, EnergyLounger red light bed, and Shiftwave chair. Come in for strength, recovery, or both. ARX adaptive resistance packs a lot of work into a short session—no big gym, no wasted minutes.",
    cta: "Book a session",
    detailHref: null as string | null,
  },
  {
    id: "red-light",
    title: "Red Light Therapy",
    short: "Recovery and wellness on the EnergyLounger.",
    body: "Use our EnergyLounger red light bed at the studio for recovery, skin, and wellness. Book it alone or add it to a training session. Ask about packages.",
    cta: "Book red light",
    detailHref: "/red-light-therapy",
  },
  {
    id: "arx",
    title: "ARX Adaptive Resistance",
    short: "Strength training that adapts to you.",
    body: "ARX (Adaptive Resistance Exercise) packs a lot of muscle work into a short session. The machine adapts in real time so every rep counts. We use ARX Alpha and ARX Omni at Upper Buena Vista.",
    cta: "Try ARX",
    detailHref: "/arx",
  },
  {
    id: "shiftwave",
    title: "Shiftwave Recovery",
    short: "Vibration and sound to regulate the nervous system.",
    body: "Shiftwave uses whole-body vibration, guided breathwork, and audio to help regulate the nervous system—circulation, relaxation, recovery. Use it alone or pair it with ARX and red light in the same visit at our Upper Buena Vista studio.",
    cta: "Book Shiftwave",
    detailHref: "/shiftwave",
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="section-heading">Services</h1>
      <p className="mt-4 text-lg text-neutral-600">
        ARX training, red light therapy, and recovery at Upper Buena Vista. Strength, recovery, and the education to back both.
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
