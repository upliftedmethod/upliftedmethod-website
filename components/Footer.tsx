import Link from "next/link";
import { Logo } from "./Logo";

const PHONE = "305-419-3133";
const EMAIL = "hi@upliftedmethod.com";
const ADDRESS = "5026 NE 2nd Ave #303, Miami, FL 33137";
const BOOK_URL = "https://upliftedmethod.as.me/schedule/550c1c04";
const MAP_URL = "https://maps.app.goo.gl/56eP3f4aPunMey1F7";
const GBP_URL = "https://maps.app.goo.gl/Gs4SNHc7kvhpzEHz7";
const REVIEW_COUNT = 75;

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      {/* Trust strip */}
      <div className="border-b border-neutral-200 bg-white px-4 py-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center text-sm text-neutral-700">
            <span>We reply within 24 hours</span>
            <span className="hidden text-neutral-300 sm:inline">·</span>
            <span>Studio opened October 2024</span>
            <span className="hidden text-neutral-300 sm:inline">·</span>
            <a
              href={GBP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              5.0 on Google · {REVIEW_COUNT} five-star reviews
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo className="text-lg" />
            <p className="mt-1 text-sm text-neutral-600">
              ARX training, red light, supplements. Upper Buena Vista, Miami.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-neutral">Contact</h3>
            <p className="mt-2 text-sm text-neutral-600">
              <Link href="/contact" className="font-medium text-primary hover:underline">
                Questions? Contact us
              </Link>
            </p>
            <ul className="mt-2 space-y-1.5 text-sm text-neutral-600">
              <li>
                <a href={`tel:${PHONE}`} className="hover:text-primary transition-colors">
                  {PHONE}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="hover:text-primary transition-colors">
                  {EMAIL}
                </a>
              </li>
              <li>
                <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  {ADDRESS}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-neutral">Pages</h3>
            <ul className="mt-2 space-y-1.5 text-sm text-neutral-600">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/locations" className="hover:text-primary transition-colors">Locations</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/arx" className="hover:text-primary transition-colors">ARX</Link></li>
              <li><Link href="/red-light-therapy" className="hover:text-primary transition-colors">Red Light Therapy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-neutral">Book a session</h3>
            <p className="mt-2 text-sm text-neutral-600">
              Book your first session or red light at the studio.
            </p>
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-4 inline-block text-sm"
            >
              Book Now
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-neutral-200 pt-6 text-center text-sm text-neutral-500">
          © {new Date().getFullYear()} Uplifted. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
