import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Offers | Uplifted Method',
};

export default function OffersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
          Our Offers
        </h1>
        <div className="grid md:grid-cols-3 gap-8">
          <Link href="/offers/starter" className="group">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Starter</h2>
                <p className="text-gray-600 mb-6">
                  Perfect introduction to energy elevation. Essential recovery tools.
                </p>
                <div className="text-3xl font-bold text-teal-600 mb-8">$3,000</div>
              </div>
              <div>Choose Plan →</div>
            </div>
          </Link>

          <Link href="/offers/pro" className="group md:col-span-1">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-0 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4">Pro</h2>
                <p className="mb-6">
                  Comprehensive energy optimization. Full protocol access.
                </p>
                <div className="text-3xl font-bold mb-8">$5,000</div>
              </div>
              <div>Choose Plan →</div>
            </div>
          </Link>

          <Link href="/offers/vip" className="group">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">VIP</h2>
                <p className="text-gray-600 mb-6">
                  Elite transformation. Personalized coaching + priority access.
                </p>
                <div className="text-3xl font-bold text-amber-600 mb-8">$10,000</div>
              </div>
              <div>Choose Plan →</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
