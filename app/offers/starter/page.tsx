import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Starter Offer | Uplifted Method',
  description: 'Essential energy elevation package. $3,000',
};

export default function StarterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          Starter Package
        </h1>
        <div className="text-center mb-12">
          <div className="text-5xl font-bold text-teal-600 mb-4">$3,000</div>
          <p className="text-xl text-gray-600">Essential introduction to energy elevation</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What You Get</h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start">
              <span className="w-8 h-8 bg-teal-100 rounded-xl flex items-center justify-center font-bold text-teal-600 mr-4 flex-shrink-0">1</span>
              4x Shiftwave sessions (nervous system reset)
            </li>
            <li className="flex items-start">
              <span className="w-8 h-8 bg-teal-100 rounded-xl flex items-center justify-center font-bold text-teal-600 mr-4 flex-shrink-0">2</span>
              ARX strength assessment + protocol
            </li>
            <li className="flex items-start">
              <span className="w-8 h-8 bg-teal-100 rounded-xl flex items-center justify-center font-bold text-teal-600 mr-4 flex-shrink-0">3</span>
              Red light therapy intro pack
            </li>
            <li className="flex items-start">
              <span className="w-8 h-8 bg-teal-100 rounded-xl flex items-center justify-center font-bold text-teal-600 mr-4 flex-shrink-0">4</span>
              Personalized energy roadmap
            </li>
          </ul>
        </div>

        <div className="text-center">
          <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-6 px-12 rounded-2xl text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 w-full md:w-auto">
            Get Started - Secure Your Spot
          </button>
          <p className="text-sm text-gray-500 mt-4">
            14-day money back guarantee • Limited availability
          </p>
        </div>
      </div>
    </div>
  );
}
