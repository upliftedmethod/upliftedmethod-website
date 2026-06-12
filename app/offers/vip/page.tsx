import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VIP Offer | Uplifted Method',
  description: 'Elite energy transformation. Personalized coaching. $10,000',
};

export default function VipPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-slate-50 to-white py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text text-transparent mb-8 text-center">
          VIP Experience
        </h1>
        <div className="text-center mb-12">
          <div className="text-5xl font-bold text-amber-700 mb-4">$10,000</div>
          <p className="text-xl text-gray-600">Elite transformation with white-glove service</p>
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl shadow-2xl p-12 mb-12 border-4 border-amber-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Everything in Pro +</h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start">
              <span className="w-8 h-8 bg-amber-200 rounded-xl flex items-center justify-center font-bold text-amber-700 mr-4 flex-shrink-0">★</span>
              Unlimited everything (Shiftwave, ARX, Red Light)
            </li>
            <li className="flex items-start">
              <span className="w-8 h-8 bg-amber-200 rounded-xl flex items-center justify-center font-bold text-amber-700 mr-4 flex-shrink-0">★</span>
              1:1 concierge coaching
            </li>
            <li className="flex items-start">
              <span className="w-8 h-8 bg-amber-200 rounded-xl flex items-center justify-center font-bold text-amber-700 mr-4 flex-shrink-0">★</span>
              Home visit setup + delivery
            </li>
            <li className="flex items-start">
              <span className="w-8 h-8 bg-amber-200 rounded-xl flex items-center justify-center font-bold text-amber-700 mr-4 flex-shrink-0">★</span>
              VIP events + community access
            </li>
          </ul>
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-700 hover:via-orange-700 hover:to-amber-800 text-white font-bold py-6 px-12 rounded-2xl text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 w-full md:w-auto">
            Join VIP - Limited Spots
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Lifetime access guarantee • Exclusive network
          </p>
        </div>
      </div>
    </div>
  );
}
