import React from 'react';

export default function CoconutGrovePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Top call link */}
      <div className="mb-8">
        <a 
          href="tel:305-419-3133" 
          className="inline-block px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition-colors"
        >
          Call (305) 419-3133
        </a>
      </div>

      <h1 className="text-4xl font-bold mb-2">Coconut Grove</h1>
      <p className="text-xl text-gray-600 mb-8">Florida → Miami</p>

      <div className="prose prose-lg max-w-none">
        <p>
          Coconut Grove carries Miami’s oldest continuously inhabited neighborhood identity. Bayside parks, tree cover, and a village pace sit minutes from downtown yet feel distinct. Residents balance professional demands, family life, and time on the water. Many already drive to Upper Buena Vista for sessions that fit the schedule without consuming the day.
        </p>

        <p>
          We built the studio around one idea: deliver measurable strength progress and useful recovery in the shortest practical window. Clients from the Grove make the trip because the format respects their time while still producing results they can feel in daily movement and resilience.
        </p>

        <h2>Studio Address</h2>
        <p>
          5026 NE 2nd Ave #303, Miami, FL 33137<br />
          Easy parking in the Upper Buena Vista area.<br />
          <a href="https://maps.app.goo.gl/56eP3f4aPunMey1F7" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Open in Google Maps →
          </a>
        </p>

        <h2>Getting Here from Coconut Grove</h2>
        <p>
          The drive typically runs 20 to 30 minutes depending on traffic and your exact starting point.
        </p>
        <p>
          From the Vizcaya Museum and Gardens area, head north on South Miami Avenue or US-1 and connect toward Biscayne Boulevard or I-95 north to the NE 2nd Avenue exit.<br />
          From the Main Highway and Grand Avenue core or Peacock Park, the same northbound routes work. Most clients find the studio sits conveniently on the way to or from other north Miami stops.
        </p>
        <p>
          Traffic patterns vary, so we recommend checking real-time maps before you leave. The route stays straightforward and many Grove clients fold a session into an existing northbound errand.
        </p>

        <h2>Why Clients from Coconut Grove Train Here</h2>
        <p>
          ARX sessions last roughly 20 minutes. Motorized adaptive resistance matches your output on every rep in real time, so the machine handles load selection and you focus on movement quality. According to the developers of the technology, this approach produces greater strength gains and better time use compared with traditional weight-based methods.
        </p>
        <p>
          After the strength work, many stack a full-body red light session on the EnergyLounger or a Shiftwave nervous system reset. The combination supports recovery from sun exposure, salt air, and active days spent walking the Grove’s paths or spending time on the bay.
        </p>
        <p>
          Every session includes direct trainer guidance. One certified trainer stays with you or your small group the entire time, watching form and adjusting as needed. The environment stays quiet and focused—no crowded floor, no sales pitch. This matters for people who already live in a neighborhood that values authenticity.
        </p>
        <p>
          Clients who come from south Miami neighborhoods frequently notice they can maintain strength and recovery capacity without rearranging their entire week around long gym visits.
        </p>

        <h2>Neighborhood Context</h2>
        <p>
          Coconut Grove developed early roots in the 1800s with later Bahamian settlement waves shaping parts of its character. The result today is a laid-back tropical setting with historic homes, waterfront access, parks, and a strong community presence. Peacocks still roam some areas. The overall feel encourages outdoor time while still supporting the need for structured strength and recovery work that protects joints and builds lasting capacity.
        </p>
        <p>
          The neighborhood draws professionals, families, and creatives who tend to appreciate direct experiences over flash. Our model lines up with that preference: clear coaching, measurable progress, and recovery tools that actually get used.
        </p>

        <h2>Local Service Area</h2>
        <p>
          We serve clients who live in Coconut Grove along with nearby areas such as Coral Gables and Key Biscayne. The studio location in Upper Buena Vista gives convenient access for anyone already heading north or combining a session with other Miami stops. We also welcome clients from further south who want the specific combination of ARX, red light, and Shiftwave that exists in one place in Miami-Dade.
        </p>

        <h2>Booking &amp; Response Times</h2>
        <p>
          Book directly online for the quickest path to a slot. ARX sessions benefit from at least a day’s notice, especially on weekends. Red light appointments often open same day or next day. New clients receive a short orientation to the equipment and process.
        </p>
        <p>
          Questions? Call 305-419-3133. We keep the process simple on purpose.
        </p>

        <div className="mt-8">
          <a 
            href="https://upliftedmethod.as.me/schedule/550c1c04" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-black text-white text-lg rounded hover:bg-gray-800 transition-colors"
          >
            Book a Complimentary ARX Session
          </a>
        </div>
      </div>

      {/* Sources section for transparency */}
      <div className="mt-16 pt-8 border-t text-sm text-gray-600">
        <h3 className="font-semibold mb-2">Sources</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Explore Coconut Grove — MiamiandBeaches.com (Greater Miami &amp; Miami Beach) — https://www.miamiandbeaches.com/neighborhoods/coconut-grove
          </li>
          <li>
            The History of Coconut Grove — CoconutGrove.com — https://coconutgrove.com/about/coconut-grove-history/
          </li>
          <li>
            Adaptive Resistance™ Exercise Machine - ARX — ARX — https://www.arxfit.com/
          </li>
        </ul>
      </div>
    </div>
  );
}
