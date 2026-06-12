import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pro Offer | Uplifted Method',
  description: 'Comprehensive energy optimization. $5,000',
};

export default function ProPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          Pro Package
        </h1>
        <div className="text-center mb-12">
          <div className="text-5xl font-bold text-emerald-600 mb-4">$5,000</div>
          <p className="text-xl text-gray-600">Complete energy system upgrade</p>
        </div>

        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl shadow-2xl p-12 mb-12 border border-emerald-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Everything in Starter +</h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start">
              <span className="w-8 h-8 bg-emerald-200 rounded-xl flex items-center justify-center font-bold text-emerald-700 mr-4 flex-shrink-0">+</span>
              12x Shiftwave sessions
            </li>
            <li className="flex items-start">
              <span className="w-8 h-8 bg-emerald-200 rounded-xl flex items-center justify-center font-bold text-emerald-700 mr-4 flex-shrink-0">+</span>
              8x ARX strength sessions
            </li>
            <li className="flex items-start">
              <span className="w-8 h-8 bg-emerald-200 rounded-xl flex items-center justify-center font-bold text-emerald-700 mr-4 flex-shrink-0">+</span>
              Unlimited red light therapy
            </li>
            <li className="flex items-start">
              <span className="w-8 h-8 bg-emerald-200 rounded-xl flex items-center justify-center font-bold text-emerald-700 mr-4 flex-shrink-0">+</span>
              Monthly check-ins
            </li>
          </ul>
        </div>

        <div className="text-center">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-6 px-12 rounded-2xl text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 w-full md:w-auto">
            Choose Pro - Transform Now
          </button>
          <p className="text-sm text-gray-500 mt-4">
            30-day money back guarantee • Priority scheduling
          </p>
        </div>
      </div>
    </div>
  );
}
