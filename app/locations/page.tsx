import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Locations | Uplifted",
  description:
    "Uplifted studio locations. Florida: Miami (Upper Buena Vista). ARX, red light, Shiftwave.",
  alternates: { canonical: "/locations" },
};

/** Region/city entries for expansion. Add state/city here when we open new areas. */
const REGIONS = [
  { state: "Florida", city: "Miami", path: "/locations/fl/miami", note: "Upper Buena Vista studio. ARX, red light, Shiftwave. Wynwood, Midtown, Edgewater, Brickell, Key Biscayne, Grove, Gables, Pinecrest, Beach, Surfside." },
] as const;

export default function LocationsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="section-heading">Locations</h1>
      <p className="mt-4 text-lg text-neutral-600">
        Choose your area. One studio today; we&apos;re set up to add more regions as we expand.
      </p>

      <ul className="mt-12 space-y-6">
        {REGIONS.map((region) => (
          <li key={region.path} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8">
            <Link href={region.path} className="group block">
              <p className="text-sm font-medium text-neutral-500">
                {region.state}
              </p>
              <h2 className="mt-1 text-xl font-bold text-primary group-hover:underline">
                {region.city} →
              </h2>
              <p className="mt-2 text-neutral-600">{region.note}</p>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-12">
        <Link href="/contact" className="font-medium text-primary hover:underline">
          Contact us
        </Link>
      </div>
    </div>
  );
}
