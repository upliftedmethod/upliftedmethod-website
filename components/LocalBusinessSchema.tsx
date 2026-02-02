/**
 * LocalBusiness + FitnessCenter schema for Uplifted.
 * Studio-first: Upper Buena Vista, ARX, red light, supplements.
 */
export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://upliftedmethod.com/#organization",
        name: "Uplifted",
        description:
          "In-studio ARX training, red light therapy, and supplements at Upper Buena Vista, Miami. Strength, recovery, and education.",
        url: "https://upliftedmethod.com",
        telephone: "+1-305-419-3133",
        email: "hello@upliftedmethod.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "5026 NE 2nd Ave #303",
          addressLocality: "Miami",
          addressRegion: "FL",
          postalCode: "33137",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 25.8205,
          longitude: -80.1918,
        },
        areaServed: [
          { "@type": "City", name: "Key Biscayne", containedInPlace: { "@type": "State", name: "Florida" } },
          { "@type": "City", name: "Coconut Grove", containedInPlace: { "@type": "State", name: "Florida" } },
          { "@type": "City", name: "Coral Gables", containedInPlace: { "@type": "State", name: "Florida" } },
          { "@type": "City", name: "Pinecrest", containedInPlace: { "@type": "State", name: "Florida" } },
          { "@type": "City", name: "Miami Beach", containedInPlace: { "@type": "State", name: "Florida" } },
          { "@type": "City", name: "Surfside", containedInPlace: { "@type": "State", name: "Florida" } },
          { "@type": "City", name: "Miami", containedInPlace: { "@type": "State", name: "Florida" } },
        ],
        sameAs: [
          "https://maps.app.goo.gl/56eP3f4aPunMey1F7",
        ],
        hasMap: "https://maps.app.goo.gl/56eP3f4aPunMey1F7",
        image: "https://upliftedmethod.com/brand/logo.svg",
      },
      {
        "@type": "FitnessCenter",
        "@id": "https://upliftedmethod.com/#fitnesscenter",
        name: "Uplifted",
        parentOrganization: { "@id": "https://upliftedmethod.com/#organization" },
        description: "ARX adaptive resistance training and in-studio sessions at Upper Buena Vista, Miami. Red light therapy and recovery. Supplements and education.",
        url: "https://upliftedmethod.com",
        telephone: "+1-305-419-3133",
        address: {
          "@type": "PostalAddress",
          streetAddress: "5026 NE 2nd Ave #303",
          addressLocality: "Miami",
          addressRegion: "FL",
          postalCode: "33137",
          addressCountry: "US",
        },
        areaServed: [
          "Key Biscayne",
          "Coconut Grove",
          "Coral Gables",
          "Pinecrest",
          "Miami Beach",
          "Surfside",
          "Miami",
        ],
        hasMap: "https://maps.app.goo.gl/56eP3f4aPunMey1F7",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
