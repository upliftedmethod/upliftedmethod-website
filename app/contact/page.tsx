import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Uplifted: call 305-419-3133, email hello@upliftedmethod.com, or book online. Miami, Key Biscayne, Coconut Grove, Coral Gables, Pinecrest, Miami Beach, Surfside.",
};

const PHONE = "305-419-3133";
const EMAIL = "hello@upliftedmethod.com";
const ADDRESS = "5026 NE 2nd Ave #303, Miami, FL 33137";
const BOOK_URL = "https://upliftedmethod.as.me/schedule/550c1c04";
const MAP_URL = "https://maps.app.goo.gl/56eP3f4aPunMey1F7";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="section-heading">Contact</h1>
      <p className="mt-4 text-lg text-neutral-600">
        Call, email, or book a session online. We’ll get back to you quickly.
      </p>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="font-bold text-neutral">Phone</h2>
          <a href={`tel:${PHONE}`} className="mt-1 block text-lg font-medium text-primary hover:underline">
            {PHONE}
          </a>
          <p className="mt-1 text-sm text-neutral-500">Call or text</p>
        </div>
        <div>
          <h2 className="font-bold text-neutral">Email</h2>
          <a href={`mailto:${EMAIL}`} className="mt-1 block text-lg font-medium text-primary hover:underline">
            {EMAIL}
          </a>
        </div>
        <div className="sm:col-span-2">
          <h2 className="font-bold text-neutral">Studio address</h2>
          <a
            href={MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block text-lg font-medium text-primary hover:underline"
          >
            {ADDRESS}
          </a>
          <p className="mt-1 text-sm text-neutral-500">Upper Buena Vista, Miami</p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="font-bold text-neutral mb-3">Map</h2>
        <a
          href={MAP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100 focus:ring-2 focus:ring-primary focus:ring-offset-2"
          title="Open Uplifted studio in Google Maps"
        >
          <iframe
            src="https://www.google.com/maps?q=5026+NE+2nd+Ave+303+Miami+FL+33137&output=embed"
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Uplifted studio location"
          />
        </a>
        <p className="mt-2 text-sm text-neutral-500">
          <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Open in Google Maps →
          </a>
        </p>
      </div>

      <div className="mt-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8">
        <h2 className="font-bold text-neutral">Book a session</h2>
        <p className="mt-2 text-neutral-600">
          Schedule your first session, red light appointment, or follow-up. We use Acuity for booking.
        </p>
        <a
          href={BOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-4 inline-block"
        >
          Book Now
        </a>
      </div>
    </div>
  );
}
