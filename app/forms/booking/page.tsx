import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description: "Thank you. Book your appointment.",
  robots: { index: false, follow: false },
};

const BOOK_URL = "https://upliftedmethod.as.me/schedule/550c1c04";

export default function BookingPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16 text-center">
      <h1 className="section-heading">Thank You!</h1>
      <p className="mt-4 text-lg text-neutral-600">We'll see you at the studio.</p>
      <a
        href={BOOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary mt-8 inline-block"
      >
        Book an appointment
      </a>
    </div>
  );
}
