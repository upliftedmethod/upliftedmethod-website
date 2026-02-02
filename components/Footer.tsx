import Link from "next/link";
import { Logo } from "./Logo";

const PHONE = "305-419-3133";
const EMAIL = "hello@upliftedmethod.com";
const ADDRESS = "5026 NE 2nd Ave #303, Miami, FL 33137";
const BOOK_URL = "https://upliftedmethod.as.me/schedule/550c1c04";
const MAP_URL = "https://maps.app.goo.gl/56eP3f4aPunMey1F7";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo className="text-lg" />
            <p className="mt-1 text-sm text-neutral-600">
              In-studio ARX training, red light therapy & supplements. Upper Buena Vista, Miami.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-neutral">Contact</h3>
            <ul className="mt-2 space-y-1 text-sm text-neutral-600">
              <li>
                <a href={`tel:${PHONE}`} className="hover:text-primary">
                  {PHONE}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="hover:text-primary">
                  {EMAIL}
                </a>
              </li>
              <li>
                <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  {ADDRESS}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-neutral">Pages</h3>
            <ul className="mt-2 space-y-1 text-sm text-neutral-600">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li><Link href="/services" className="hover:text-primary">Services</Link></li>
              <li><Link href="/locations" className="hover:text-primary">Locations</Link></li>
              <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
              <li><Link href="/shop" className="hover:text-primary">Shop</Link></li>
              <li><Link href="/about" className="hover:text-primary">About</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
              <li><Link href="/arx" className="hover:text-primary">ARX</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-neutral">Book a session</h3>
            <p className="mt-2 text-sm text-neutral-600">
              Schedule your first session or red light therapy.
            </p>
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-3 inline-block"
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
