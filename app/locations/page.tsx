import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Locations & Studio | Upper Buena Vista, Miami",
  description:
    "Uplifted studio at Upper Buena Vista, Miami. ARX, red light, recovery. Key Biscayne, Coconut Grove, Coral Gables, Pinecrest, Miami Beach, Surfside.",
  alternates: { canonical: "/locations" },
};

const BOOK_URL = "https://upliftedmethod.as.me/schedule/550c1c04";
const MAP_URL = "https://maps.app.goo.gl/56eP3f4aPunMey1F7";
const ADDRESS = "5026 NE 2nd Ave #303, Miami, FL 33137";

const AREAS = [
  { slug: "upper-buena-vista", name: "Upper Buena Vista (studio)", note: "We're here. 5026 NE 2nd Ave #303. ARX Alpha, ARX Omni, red light, Shiftwave. Home base." },
  { slug: "key-biscayne", name: "Key Biscayne", note: "Short drive. Many of our clients come in from the Key." },
  { slug: "coconut-grove", name: "Coconut Grove", note: "Grove to UBV is quick. ARX and red light in one trip." },
  { slug: "coral-gables", name: "Coral Gables", note: "Gables to UBV is easy. Central to South Florida." },
  { slug: "pinecrest", name: "Pinecrest", note: "Pinecrest clients come in for the full setup—ARX, red light, Shiftwave." },
  { slug: "miami-beach", name: "Miami Beach", note: "Beach clients cross the bay to train and recover at UBV." },
  { slug: "surfside", name: "Surfside", note: "Surfside to UBV—sessions and red light." },
  { slug: "bay-point", name: "Bay Point", note: "Bay Point to UBV—minutes. ARX, red light, Shiftwave." },
  { slug: "morningside", name: "Morningside", note: "Morningside clients come to UBV for ARX and recovery." },
  { slug: "miami-shores", name: "Miami Shores", note: "Miami Shores to UBV—train and recover at our studio." },
];

export default function LocationsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="section-heading">Locations & Studio</h1>
      <p className="mt-4 text-lg text-neutral-600">
        We&apos;re at Upper Buena Vista. Clients drive in from the Key, Grove, Gables, Pinecrest, Beach, Surfside, Bay Point, Morningside, Miami Shores—and across Miami.
      </p>

      <section className="mt-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8">
        <h2 className="text-xl font-bold text-neutral">Studio: Upper Buena Vista</h2>
        <p className="mt-2 text-neutral-600">
          We’re at 5026 NE 2nd Ave #303, Miami, FL 33137. Private studio—ARX Alpha, ARX Omni, red light bed, Shiftwave. Book a session or red light.
        </p>
        <a
          href={MAP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block font-medium text-primary hover:underline"
        >
          Open in Google Maps →
        </a>
        <p className="mt-2 text-sm text-neutral-500">{ADDRESS}</p>
        <div className="mt-6 rounded-xl overflow-hidden border border-neutral-200 bg-neutral-100">
          <iframe
            src="https://www.google.com/maps?q=5026+NE+2nd+Ave+303+Miami+FL+33137&output=embed"
            width="100%"
            height="280"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Uplifted studio location"
          />
        </div>
      </section>

      <h2 className="mt-12 text-xl font-bold text-neutral">Communities we serve</h2>
      <p className="mt-2 text-neutral-600">
        One studio. Clients drive in from these areas.
      </p>
      <ul className="mt-6 space-y-6">
        {AREAS.map((area) => (
          <li key={area.slug} className="scroll-mt-24 border-b border-neutral-100 pb-6 last:border-0">
            <Link href={`/locations/${area.slug}`} className="group block">
              <h3 className="font-bold text-primary group-hover:underline">{area.name}</h3>
              <p className="mt-1 text-neutral-600">{area.note}</p>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-12 flex flex-wrap gap-4">
        <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
          Book a Session
        </a>
        <Link href="/contact" className="rounded-lg border-2 border-neutral-300 px-6 py-3 font-semibold text-neutral-700 hover:border-primary hover:text-primary">
          Contact Us
        </Link>
      </div>
    </div>
  );
}
