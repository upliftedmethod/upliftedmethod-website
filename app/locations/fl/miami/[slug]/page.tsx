import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  LOCATION_SLUGS,
  getLocationBySlug,
  type LocationContent,
} from "@/app/locations/locationData";

const MIAMI_LIST_URL = "/locations/fl/miami";

export function generateStaticParams() {
  return LOCATION_SLUGS.map((slug) => ({ slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return { title: "Location | Uplifted" };
  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: { canonical: `${MIAMI_LIST_URL}/${slug}` },
  };
}

function FullLocationPage({ location }: { location: LocationContent }) {
  const {
    name,
    address = "",
    mapUrl = "",
    bookUrl = "",
    intro = "",
    serviceArea = "",
    drivingDirections = [],
    neighborhoodContent = "",
    responseTimes = "",
  } = location;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="section-heading">{name}</h1>
      <p className="mt-2 text-sm font-medium text-neutral-500">
        Florida → Miami
      </p>

      <section className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8">
        <h2 className="text-xl font-bold text-neutral">Studio address</h2>
        <p className="mt-2 font-medium text-neutral-700">{address}</p>
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block font-medium text-primary hover:underline"
        >
          Open in Google Maps →
        </a>
        <div className="mt-6 min-h-[280px] w-full rounded-xl overflow-hidden border border-neutral-200 bg-neutral-100">
          <iframe
            src="https://www.google.com/maps?q=5026+NE+2nd+Ave+303+Miami+FL+33137&output=embed"
            width="100%"
            height="280"
            style={{ border: 0, minHeight: 280 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Uplifted studio location"
          />
        </div>
      </section>

      <section className="mt-10">
        <p className="text-lg text-neutral-600">{intro}</p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-neutral">Local service area</h2>
        <p className="mt-2 text-neutral-600">{serviceArea}</p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-neutral">Driving directions from major landmarks</h2>
        <ul className="mt-4 space-y-6">
          {drivingDirections.map((d) => (
            <li key={d.from} className="border-l-4 border-primary pl-4">
              <h3 className="font-semibold text-neutral">{d.from}</h3>
              <p className="mt-1 text-neutral-600">{d.directions}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-neutral">Neighborhood</h2>
        <p className="mt-2 text-neutral-600">{neighborhoodContent}</p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-neutral">Booking & response times</h2>
        <p className="mt-2 text-neutral-600">{responseTimes}</p>
      </section>

      <div className="mt-12 flex flex-wrap gap-4">
        <a href={bookUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
          Book a Session
        </a>
        <Link
          href={MIAMI_LIST_URL}
          className="rounded-lg border-2 border-neutral-300 px-6 py-3 font-semibold text-neutral-700 hover:border-primary hover:text-primary"
        >
          All Miami locations
        </Link>
        <Link href="/locations" className="rounded-lg border-2 border-neutral-300 px-6 py-3 font-semibold text-neutral-700 hover:border-primary hover:text-primary">
          All regions
        </Link>
        <Link href="/contact" className="font-medium text-primary hover:underline">
          Contact us
        </Link>
      </div>
    </div>
  );
}

function StubLocationPage({ location }: { location: LocationContent }) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="section-heading">{location.name}</h1>
      <p className="mt-2 text-sm font-medium text-neutral-500">
        Florida → Miami
      </p>
      <p className="mt-4 text-lg text-neutral-600">{location.stubParagraph}</p>
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href={location.bookUrl || "https://upliftedmethod.as.me/schedule/550c1c04"}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Book a Session
        </a>
        <Link href={MIAMI_LIST_URL} className="font-medium text-primary hover:underline">
          View all Miami locations
        </Link>
        <Link href="/contact" className="font-medium text-primary hover:underline">
          Contact us
        </Link>
      </div>
    </div>
  );
}

export default async function MiamiLocationSlugPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  if (location.isStub) {
    return <StubLocationPage location={location} />;
  }
  return <FullLocationPage location={location} />;
}
