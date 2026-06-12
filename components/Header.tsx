"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";

const NAV = [
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const PHONE = "305-419-3133";
const BOOK_URL = "https://upliftedmethod.as.me/schedule/550c1c04";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3 sm:px-6">
        <div className="flex-shrink-0 mr-4 sm:mr-6">
          <Logo />
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="whitespace-nowrap text-neutral-600 hover:text-primary"
            >
              {label}
            </Link>
          ))}
          <a
            href={`tel:${PHONE}`}
            className="whitespace-nowrap text-neutral-700 font-medium hover:text-primary"
          >
            {PHONE}
          </a>
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary whitespace-nowrap"
          >
            Book Now
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <a href={`tel:${PHONE}`} className="rounded-lg p-2 text-primary">
            <span className="sr-only">Call</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-neutral-600"
            aria-expanded={open}
          >
            <span className="sr-only">Menu</span>
            {open ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-neutral-200 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-2">
            {NAV.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="py-2 text-neutral-700 hover:text-primary"
              >
                {label}
            </Link>
            )}
            <a href={`tel:${PHONE}`} className="py-2 font-medium text-primary">
              {PHONE}
            </a>
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-2 inline-block text-center"
              onClick={() => setOpen(false)}
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
