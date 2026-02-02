/**
 * Per-location content for /locations/[slug].
 * Full content for all locations (Upper Buena Vista + P3-9–P3-17).
 */

const BOOK_URL = "https://upliftedmethod.as.me/schedule/550c1c04";
const MAP_URL = "https://maps.app.goo.gl/56eP3f4aPunMey1F7";
const STUDIO_ADDRESS = "5026 NE 2nd Ave #303, Miami, FL 33137";

export type DrivingDirection = {
  from: string;
  directions: string;
};

export type LocationContent = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  isStub: boolean;
  /** Full content: studio address (for UBV) or N/A */
  address?: string;
  mapUrl?: string;
  bookUrl?: string;
  /** Full content: intro paragraph */
  intro?: string;
  /** Full content: local service area description */
  serviceArea?: string;
  /** Full content: driving directions from landmarks */
  drivingDirections?: DrivingDirection[];
  /** Full content: neighborhood-specific content */
  neighborhoodContent?: string;
  /** Full content: response times / availability */
  responseTimes?: string;
  /** Stub: short placeholder when isStub true */
  stubParagraph?: string;
};

export const LOCATION_SLUGS = [
  "upper-buena-vista",
  "key-biscayne",
  "coconut-grove",
  "coral-gables",
  "pinecrest",
  "miami-beach",
  "surfside",
  "bay-point",
  "morningside",
  "miami-shores",
] as const;

export type LocationSlug = (typeof LOCATION_SLUGS)[number];

export const LOCATIONS: Record<LocationSlug, LocationContent> = {
  "upper-buena-vista": {
    slug: "upper-buena-vista",
    name: "Upper Buena Vista",
    metaTitle: "ARX Training, Red Light & Recovery | Upper Buena Vista, Miami",
    metaDescription:
      "Uplifted studio at Upper Buena Vista: ARX training, red light therapy, Shiftwave. 5026 NE 2nd Ave. Serving Miami, Key Biscayne, Coconut Grove, Coral Gables, Pinecrest, Miami Beach, Surfside.",
    isStub: false,
    address: STUDIO_ADDRESS,
    mapUrl: MAP_URL,
    bookUrl: BOOK_URL,
    intro: `Upper Buena Vista is where Uplifted lives. Our studio at 5026 NE 2nd Ave #303 has ARX Alpha, ARX Omni, the EnergyLounger red light bed, and Shiftwave—strength and recovery in one place. Clients from across Miami-Dade come here to train, recover, and grab the supplements we use. We opened October 2024. If you're looking for in-studio ARX, red light therapy, or a recovery studio in Upper Buena Vista or nearby, this is it.`,
    serviceArea: `We're in Upper Buena Vista and serve the immediate area—Buena Vista, Edgewater, Wynwood, Design District, Midtown, Little Haiti—plus clients who drive in from Key Biscayne, Coconut Grove, Coral Gables, Pinecrest, Miami Beach, and Surfside. We're the only studio in Miami-Dade with ARX and Shiftwave under one roof. Same address, same equipment, every time. Supplements in-studio and online. Small space on purpose: one-on-one or small-group. ARX first, then red light and Shiftwave for recovery, plus the supplements we use and recommend.`,
    drivingDirections: [
      {
        from: "Brickell",
        directions:
          "Head north on Biscayne Blvd (US-1). Continue past the Venetian Causeway; Upper Buena Vista is on your left. Turn left onto NE 2nd Ave; the studio is at 5026 NE 2nd Ave #303. Allow about 15–20 minutes depending on traffic.",
      },
      {
        from: "Miami Beach",
        directions:
          "Cross the Venetian or Julia Tuttle Causeway to the mainland. From the Julia Tuttle, take NE 2nd Ave south; 5026 NE 2nd Ave #303 is in Upper Buena Vista. From the Venetian, head west to Biscayne Blvd, then north to NE 2nd Ave. Typically 20–30 minutes.",
      },
      {
        from: "Coconut Grove",
        directions:
          "Take US-1 (South Dixie Hwy) north or Le Jeune Rd north to the Design District area, then east to NE 2nd Ave. Alternatively, take I-95 north to the 79th St exit, then south on NE 2nd Ave. The studio is in Upper Buena Vista; allow 15–25 minutes.",
      },
      {
        from: "Coral Gables",
        directions:
          "Take US-1 north or Ponce de Leon Blvd north toward Miami. Continue to NE 2nd Ave (via 36th St or 79th St depending on your route) and head to 5026 NE 2nd Ave #303. Plan for about 20–30 minutes.",
      },
      {
        from: "Key Biscayne",
        directions:
          "Take the Rickenbacker Causeway west to the mainland, then north on Biscayne Blvd (US-1). Upper Buena Vista is on your left; turn left onto NE 2nd Ave. The studio is at 5026 NE 2nd Ave #303. Usually 25–35 minutes.",
      },
      {
        from: "Miami International Airport (MIA)",
        directions:
          "Take the Airport Expressway (SR 112) east to I-95 north, then exit at 79th St or take NE 2nd Ave north. Alternatively, take Le Jeune Rd north and then east to NE 2nd Ave. Allow 25–40 minutes with traffic.",
      },
    ],
    neighborhoodContent: `Upper Buena Vista sits between the Design District and Little Haiti—walkable, restaurants and cafes, low-key. Not a strip mall. Clients often grab a coffee or run Design District errands after a session. Safe, easy to park; we'll point you to spots. Second floor, clear signage. Mix of locals, people who work nearby, and people who drive in from the Grove, Gables, Key, Beach. In and out in under an hour for a full ARX session plus red light, or red light only. No crowded floor, no waiting. We're the only spot in the area with ARX and Shiftwave together—your drive is worth it.`,
    responseTimes: `We reply within 24 hours, usually same day. Book online for the fastest slot; same-day and next-day are often open, especially for red light. ARX and Shiftwave by appointment—book at least a day ahead for weekends. Need a specific time? Put it in the notes. New clients get a short run-through so you're set from the first visit. From UBV, Edgewater, Wynwood, Design District you're minutes away; Brickell and Grove 15–25 min; Gables and Key 20–35 min; Beach and Surfside 20–30 min.`,
    stubParagraph: undefined,
  },
  "key-biscayne": {
    slug: "key-biscayne",
    name: "Key Biscayne",
    metaTitle: "ARX Training & Red Light Therapy Key Biscayne | Uplifted Studio",
    metaDescription:
      "ARX Key Biscayne, red light therapy Key Biscayne, personal training Key Biscayne. Uplifted studio at Upper Buena Vista—short drive from the Key. Book ARX, red light, Shiftwave.",
    isStub: false,
    address: STUDIO_ADDRESS,
    mapUrl: MAP_URL,
    bookUrl: BOOK_URL,
    intro: `Key Biscayne is water, tennis, cycling—people who take fitness and recovery seriously. The Key doesn't have in-studio ARX and red light under one roof. We do. 5026 NE 2nd Ave #303, one causeway away. Many of our clients drive in from the Key for ARX, red light, Shiftwave, and the supplements we use. Rickenbacker to our door in under forty minutes.`,
    serviceArea: `We're in Upper Buena Vista; Key Biscayne is a core part of who we serve. Clients from the Key drive in for ARX, red light, Shiftwave, and supplements—before or after work, or a weekend block. Same address, same equipment, one-on-one or small-group every time. We're the only studio in Miami-Dade with ARX and Shiftwave together. We also serve Grove, Gables, Pinecrest, Beach, Surfside. Supplements in-studio and online.`,
    drivingDirections: [
      {
        from: "Key Biscayne (Village / Crandon)",
        directions:
          "Take the Rickenbacker Causeway west to the mainland. Merge onto Brickell Ave / S Bayshore Dr, then continue north; follow signs for Biscayne Blvd (US-1). Head north on Biscayne Blvd; Upper Buena Vista is on your left. Turn left onto NE 2nd Ave; the studio is at 5026 NE 2nd Ave #303. Allow 25–35 minutes depending on causeway and mainland traffic.",
      },
      {
        from: "Key Biscayne (North end / Ocean Drive)",
        directions:
          "Head south to the Rickenbacker Causeway, then west to the mainland. Once on Biscayne Blvd (US-1), go north to NE 2nd Ave; turn left. Studio at 5026 NE 2nd Ave #303. Plan for about 30–40 minutes.",
      },
      {
        from: "Miami Beach",
        directions:
          "Cross the Venetian or Julia Tuttle Causeway to the mainland. From the Julia Tuttle, take NE 2nd Ave south; 5026 NE 2nd Ave #303 is in Upper Buena Vista. From the Venetian, head west to Biscayne Blvd, then north to NE 2nd Ave. Typically 20–30 minutes.",
      },
      {
        from: "Coconut Grove",
        directions:
          "Take US-1 (South Dixie Hwy) north or Le Jeune Rd north to the Design District area, then east to NE 2nd Ave. Alternatively, take I-95 north to the 79th St exit, then south on NE 2nd Ave. The studio is in Upper Buena Vista; allow 15–25 minutes.",
      },
      {
        from: "Coral Gables",
        directions:
          "Take US-1 north or Ponce de Leon Blvd north toward Miami. Continue to NE 2nd Ave (via 36th St or 79th St depending on your route) and head to 5026 NE 2nd Ave #303. Plan for about 20–30 minutes.",
      },
      {
        from: "Miami International Airport (MIA)",
        directions:
          "Take the Airport Expressway (SR 112) east to I-95 north, then exit at 79th St or take NE 2nd Ave north. Alternatively, take Le Jeune Rd north and then east to NE 2nd Ave. Allow 25–40 minutes with traffic.",
      },
    ],
    neighborhoodContent: `Key Biscayne is parks, marinas, schools—outdoor activity and wellness. No ARX and red light under one roof on the island. Our Key clients drive in for ARX, red light, Shiftwave. Upper Buena Vista is a walkable pocket between Design District and Little Haiti—cafes, restaurants, easy parking. Second floor, clear signage. In and out in under an hour for a full ARX session plus red light, or red light only. Here it's ARX first, red light and Shiftwave for recovery, and the supplements we use and recommend.`,
    responseTimes: `We reply within 24 hours, usually same day. Book online for the fastest slot; same-day and next-day often open, especially for red light. ARX and Shiftwave by appointment—book at least a day ahead for weekends. From the Key you're 25–35 minutes; put your preferred time in the notes. New clients get a short run-through so you're set from the first visit.`,
    stubParagraph: undefined,
  },
  "coconut-grove": {
    slug: "coconut-grove",
    name: "Coconut Grove",
    metaTitle: "ARX Training & Red Light Therapy Coconut Grove | Uplifted Studio",
    metaDescription:
      "ARX Coconut Grove, red light therapy Coconut Grove, personal training Coconut Grove. Uplifted studio at Upper Buena Vista—quick drive from the Grove. Book ARX, red light, Shiftwave.",
    isStub: false,
    address: STUDIO_ADDRESS,
    mapUrl: MAP_URL,
    bookUrl: BOOK_URL,
    intro: `Coconut Grove values quality over quantity—tree-lined streets, waterfront parks, wellness-minded. The Grove doesn't have in-studio ARX and red light under one roof. We do. 5026 NE 2nd Ave #303, fifteen to twenty-five minutes from the heart of the Grove. Many of our clients drive in for ARX, red light, Shiftwave, and the supplements we use.`,
    serviceArea: `We're in Upper Buena Vista; Coconut Grove is a core part of who we serve. Grove clients drive in for ARX, red light, Shiftwave, and supplements—before or after work, or a weekend block. US-1 and Le Jeune put you here in under half an hour; many combine a session with Design District errands or a coffee. We're the only studio in Miami-Dade with ARX and Shiftwave together. We also serve Key Biscayne, Coral Gables, Pinecrest, Miami Beach, Surfside. Supplements in-studio and online.`,
    drivingDirections: [
      {
        from: "Coconut Grove (US-1 / South Dixie)",
        directions:
          "Take US-1 (South Dixie Hwy) north toward Miami. Continue past the Design District area; turn right (east) toward NE 2nd Ave. The studio is at 5026 NE 2nd Ave #303 in Upper Buena Vista. Allow 15–25 minutes depending on traffic.",
      },
      {
        from: "Coconut Grove (Le Jeune / Grand Ave)",
        directions:
          "Take Le Jeune Rd (NW 42nd Ave) north. Continue north; cross the Miami River and follow toward the Design District. Turn east to NE 2nd Ave; the studio is at 5026 NE 2nd Ave #303. Plan for about 15–20 minutes.",
      },
      {
        from: "Coconut Grove (I-95)",
        directions:
          "Take I-95 north to the 79th St exit (or 62nd St). Head east to NE 2nd Ave, then south to 5026 NE 2nd Ave #303. Alternatively, take I-95 to the 36th St exit and work east to NE 2nd Ave. Allow 20–30 minutes.",
      },
      {
        from: "Key Biscayne",
        directions:
          "Take the Rickenbacker Causeway west to the mainland, then north on Biscayne Blvd (US-1). Upper Buena Vista is on your left; turn left onto NE 2nd Ave. The studio is at 5026 NE 2nd Ave #303. Usually 25–35 minutes.",
      },
      {
        from: "Coral Gables",
        directions:
          "Take US-1 north or Ponce de Leon Blvd north toward Miami. Continue to NE 2nd Ave (via 36th St or 79th St depending on your route) and head to 5026 NE 2nd Ave #303. Plan for about 20–30 minutes.",
      },
      {
        from: "Miami International Airport (MIA)",
        directions:
          "Take the Airport Expressway (SR 112) east to I-95 north, then exit at 79th St or take NE 2nd Ave north. Alternatively, take Le Jeune Rd north and then east to NE 2nd Ave. Allow 25–40 minutes with traffic.",
      },
    ],
    neighborhoodContent: `Coconut Grove has its own rhythm—waterfront walks, village shops, people who care how they move and recover. No ARX and red light under one roof in the Grove. Our Grove clients drive fifteen minutes for the full setup. Upper Buena Vista is a walkable pocket between Design District and Little Haiti—cafes, restaurants, easy parking. Second floor, clear signage. In and out in under an hour for a full ARX session plus red light, or red light only. Here it's ARX first, red light and Shiftwave for recovery, and the supplements we use and recommend.`,
    responseTimes: `We reply within 24 hours, usually same day. Book online for the fastest slot; same-day and next-day often open, especially for red light. ARX and Shiftwave by appointment—book at least a day ahead for weekends. From the Grove you're 15–25 minutes; put your preferred time in the notes. New clients get a short run-through so you're set from the first visit.`,
    stubParagraph: undefined,
  },
  "coral-gables": {
    slug: "coral-gables",
    name: "Coral Gables",
    metaTitle: "ARX Training & Red Light Therapy Coral Gables | Uplifted Studio",
    metaDescription:
      "ARX Coral Gables, red light therapy Coral Gables, personal training Coral Gables. Uplifted studio at Upper Buena Vista—central to South Florida. Book ARX, red light, Shiftwave.",
    isStub: false,
    address: STUDIO_ADDRESS,
    mapUrl: MAP_URL,
    bookUrl: BOOK_URL,
    intro: `Coral Gables expects the best—tree-canopied streets, Mediterranean revival, people who invest in health and performance. The Gables doesn't have in-studio ARX and red light under one roof. We do. 5026 NE 2nd Ave #303, twenty to thirty minutes from Miracle Mile. Many of our clients drive in from the Gables for ARX, red light, Shiftwave, and the supplements we use.`,
    serviceArea: `We're in Upper Buena Vista; Coral Gables is a core part of who we serve. Gables clients drive in for ARX, red light, Shiftwave, and supplements—before or after work, or a weekend block. US-1 and Ponce de Leon put you here in twenty to thirty minutes; many combine a session with Design District errands or a coffee. We're the only studio in Miami-Dade with ARX and Shiftwave together. We also serve Key Biscayne, Coconut Grove, Pinecrest, Miami Beach, Surfside. Supplements in-studio and online.`,
    drivingDirections: [
      {
        from: "Coral Gables (Miracle Mile / US-1)",
        directions:
          "Take US-1 (South Dixie Hwy) north toward Miami. Continue past Coconut Grove and the Design District area; turn east to NE 2nd Ave. The studio is at 5026 NE 2nd Ave #303 in Upper Buena Vista. Allow 20–30 minutes depending on traffic.",
      },
      {
        from: "Coral Gables (Ponce de Leon)",
        directions:
          "Take Ponce de Leon Blvd north toward Miami. Continue north; cross the Miami River and follow toward the Design District. Turn east to NE 2nd Ave; the studio is at 5026 NE 2nd Ave #303. Plan for about 25–35 minutes.",
      },
      {
        from: "Coral Gables (I-95)",
        directions:
          "Take I-95 north to the 79th St exit (or 62nd St). Head east to NE 2nd Ave, then south to 5026 NE 2nd Ave #303. Alternatively, take I-95 to the 36th St exit and work east to NE 2nd Ave. Allow 25–35 minutes.",
      },
      {
        from: "Key Biscayne",
        directions:
          "Take the Rickenbacker Causeway west to the mainland, then north on Biscayne Blvd (US-1). Upper Buena Vista is on your left; turn left onto NE 2nd Ave. The studio is at 5026 NE 2nd Ave #303. Usually 25–35 minutes.",
      },
      {
        from: "Coconut Grove",
        directions:
          "Take US-1 (South Dixie Hwy) north or Le Jeune Rd north to the Design District area, then east to NE 2nd Ave. Alternatively, take I-95 north to the 79th St exit, then south on NE 2nd Ave. The studio is in Upper Buena Vista; allow 15–25 minutes.",
      },
      {
        from: "Miami International Airport (MIA)",
        directions:
          "Take the Airport Expressway (SR 112) east to I-95 north, then exit at 79th St or take NE 2nd Ave north. Alternatively, take Le Jeune Rd north and then east to NE 2nd Ave. Allow 25–40 minutes with traffic.",
      },
    ],
    neighborhoodContent: `Coral Gables has its own identity—planned streets, landmark buildings, people who expect excellence in health and performance. No ARX and red light under one roof in the Gables. Our Gables clients drive twenty-five minutes for the full setup. Upper Buena Vista is a walkable pocket between Design District and Little Haiti—cafes, restaurants, easy parking. Second floor, clear signage. In and out in under an hour for a full ARX session plus red light, or red light only. Here it's ARX first, red light and Shiftwave for recovery, and the supplements we use and recommend.`,
    responseTimes: `We reply within 24 hours, usually same day. Book online for the fastest slot; same-day and next-day often open, especially for red light. ARX and Shiftwave by appointment—book at least a day ahead for weekends. From the Gables you're 20–30 minutes; put your preferred time in the notes. New clients get a short run-through so you're set from the first visit.`,
    stubParagraph: undefined,
  },
  pinecrest: {
    slug: "pinecrest",
    name: "Pinecrest",
    metaTitle: "ARX Training & Red Light Therapy Pinecrest | Uplifted Studio",
    metaDescription:
      "ARX training Pinecrest, red light therapy Pinecrest, personal training Pinecrest. Uplifted studio at Upper Buena Vista—short drive from Pinecrest. Book ARX, red light, Shiftwave.",
    isStub: false,
    address: STUDIO_ADDRESS,
    mapUrl: MAP_URL,
    bookUrl: BOOK_URL,
    intro: `Pinecrest values family, schools, an active lifestyle—parks, gardens, people who take fitness and recovery seriously. Pinecrest doesn't have in-studio ARX and red light under one roof. We do. 5026 NE 2nd Ave #303, twenty-five to thirty-five minutes from the heart of Pinecrest. Many of our clients drive in for ARX, red light, Shiftwave, and the supplements we use.`,
    serviceArea: `We're in Upper Buena Vista; Pinecrest is a core part of who we serve. Pinecrest clients drive in for ARX, red light, Shiftwave, and supplements—before or after work, or a weekend block. US-1 and the Palmetto put you here in twenty-five to thirty-five minutes; many combine a session with Design District errands or a coffee. We're the only studio in Miami-Dade with ARX and Shiftwave together. We also serve Key Biscayne, Coconut Grove, Coral Gables, Miami Beach, Surfside. Supplements in-studio and online.`,
    drivingDirections: [
      {
        from: "Pinecrest (US-1 / South Dixie)",
        directions:
          "Take US-1 (South Dixie Hwy) north toward Miami. Continue past Coral Gables, Coconut Grove, and the Design District area; turn east to NE 2nd Ave. The studio is at 5026 NE 2nd Ave #303 in Upper Buena Vista. Allow 25–35 minutes depending on traffic.",
      },
      {
        from: "Pinecrest (Palmetto / Killian)",
        directions:
          "Take the Palmetto Expressway (SR 826) north, then east on the Dolphin Expressway (SR 836) or 79th St toward NE 2nd Ave. Alternatively, take Killian Dr or SW 88th St to US-1 north, then follow US-1 to NE 2nd Ave. Plan for about 30–40 minutes.",
      },
      {
        from: "Pinecrest (I-95)",
        directions:
          "Take I-95 north to the 79th St exit (or 62nd St). Head east to NE 2nd Ave, then south to 5026 NE 2nd Ave #303. Alternatively, take I-95 to the 36th St exit and work east to NE 2nd Ave. Allow 30–40 minutes.",
      },
      {
        from: "Coral Gables",
        directions:
          "Take US-1 north or Ponce de Leon Blvd north toward Miami. Continue to NE 2nd Ave (via 36th St or 79th St depending on your route) and head to 5026 NE 2nd Ave #303. Plan for about 20–30 minutes.",
      },
      {
        from: "Coconut Grove",
        directions:
          "Take US-1 (South Dixie Hwy) north or Le Jeune Rd north to the Design District area, then east to NE 2nd Ave. Alternatively, take I-95 north to the 79th St exit, then south on NE 2nd Ave. The studio is in Upper Buena Vista; allow 15–25 minutes.",
      },
      {
        from: "Miami International Airport (MIA)",
        directions:
          "Take the Airport Expressway (SR 112) east to I-95 north, then exit at 79th St or take NE 2nd Ave north. Alternatively, take Le Jeune Rd north and then east to NE 2nd Ave. Allow 30–45 minutes with traffic.",
      },
    ],
    neighborhoodContent: `Pinecrest has its own identity—parks, gardens, top schools, people who expect quality in how they move and recover. No ARX and red light under one roof in the village. Our Pinecrest clients drive thirty minutes for the full setup. Upper Buena Vista is a walkable pocket between Design District and Little Haiti—cafes, restaurants, easy parking. Second floor, clear signage. In and out in under an hour for a full ARX session plus red light, or red light only. Here it's ARX first, red light and Shiftwave for recovery, and the supplements we use and recommend.`,
    responseTimes: `We reply within 24 hours, usually same day. Book online for the fastest slot; same-day and next-day often open, especially for red light. ARX and Shiftwave by appointment—book at least a day ahead for weekends. From Pinecrest you're 25–35 minutes; put your preferred time in the notes. New clients get a short run-through so you're set from the first visit.`,
    stubParagraph: undefined,
  },
  "miami-beach": {
    slug: "miami-beach",
    name: "Miami Beach",
    metaTitle: "ARX Training & Red Light Therapy Miami Beach | Uplifted Studio",
    metaDescription:
      "ARX Miami Beach, red light therapy Miami Beach, personal training Miami Beach. Uplifted studio at Upper Buena Vista—cross the bay to train and recover. Book ARX, red light, Shiftwave.",
    isStub: false,
    address: STUDIO_ADDRESS,
    mapUrl: MAP_URL,
    bookUrl: BOOK_URL,
    intro: `Miami Beach lives on movement—ocean, sand, cycling, people who take fitness and recovery seriously. The Beach doesn't have in-studio ARX and red light under one roof. We do. 5026 NE 2nd Ave #303, twenty to thirty minutes depending on which causeway you take. Many of our clients cross the bay for ARX, red light, Shiftwave, and the supplements we use. Causeway to our door in under thirty minutes.`,
    serviceArea: `We're in Upper Buena Vista; Miami Beach is a core part of who we serve. Beach clients cross the Venetian or Julia Tuttle for ARX, red light, Shiftwave, and supplements—before or after work, or a weekend block. Causeways put you here in twenty to thirty minutes; many combine a session with mainland errands or a coffee. We're the only studio in Miami-Dade with ARX and Shiftwave together. We also serve Key Biscayne, Coconut Grove, Coral Gables, Pinecrest, Surfside. Supplements in-studio and online.`,
    drivingDirections: [
      {
        from: "Miami Beach (South Beach)",
        directions:
          "Take the Venetian Causeway or MacArthur Causeway west to the mainland. From the Venetian, head west to Biscayne Blvd (US-1), then north to NE 2nd Ave; turn left. The studio is at 5026 NE 2nd Ave #303 in Upper Buena Vista. From MacArthur, take I-395 west to Biscayne Blvd north, then NE 2nd Ave. Allow 20–30 minutes depending on traffic.",
      },
      {
        from: "Miami Beach (Julia Tuttle Causeway)",
        directions:
          "Cross the Julia Tuttle Causeway (I-195) west to the mainland. Take NE 2nd Ave south; 5026 NE 2nd Ave #303 is in Upper Buena Vista. Alternatively, merge onto Biscayne Blvd (US-1) north, then left onto NE 2nd Ave. Typically 20–25 minutes.",
      },
      {
        from: "Miami Beach (North Beach)",
        directions:
          "Take the Julia Tuttle Causeway (I-195) west to the mainland, or head south to the Venetian and cross. From the Julia Tuttle, take NE 2nd Ave south to 5026 NE 2nd Ave #303. Plan for about 25–35 minutes.",
      },
      {
        from: "Key Biscayne",
        directions:
          "Take the Rickenbacker Causeway west to the mainland, then north on Biscayne Blvd (US-1). Upper Buena Vista is on your left; turn left onto NE 2nd Ave. The studio is at 5026 NE 2nd Ave #303. Usually 25–35 minutes.",
      },
      {
        from: "Coconut Grove",
        directions:
          "Take US-1 (South Dixie Hwy) north or Le Jeune Rd north to the Design District area, then east to NE 2nd Ave. Alternatively, take I-95 north to the 79th St exit, then south on NE 2nd Ave. The studio is in Upper Buena Vista; allow 15–25 minutes.",
      },
      {
        from: "Miami International Airport (MIA)",
        directions:
          "Take the Airport Expressway (SR 112) east to I-95 north, then exit at 79th St or take NE 2nd Ave north. Alternatively, take Le Jeune Rd north and then east to NE 2nd Ave. Allow 25–40 minutes with traffic.",
      },
    ],
    neighborhoodContent: `Miami Beach has its own rhythm—ocean, art deco, people who expect quality in how they move and recover. No ARX and red light under one roof on the island. Our Beach clients cross the bay to a place that does one thing well. Upper Buena Vista is a walkable pocket between Design District and Little Haiti—cafes, restaurants, easy parking. Second floor, clear signage. In and out in under an hour for a full ARX session plus red light, or red light only. No waiting, no crowded floor. Personal training Miami Beach often means big gyms and shared equipment; here it's ARX first, red light and Shiftwave for recovery, and the supplements we use and recommend.`,
    responseTimes: `We reply within 24 hours, usually same day. Book online for the fastest slot; same-day and next-day often open, especially for red light. ARX and Shiftwave by appointment—book at least a day ahead for weekends. From the Beach you're 20–30 minutes depending on the causeway; put your preferred time in the notes. New clients get a short run-through so you're set from the first visit.`,
    stubParagraph: undefined,
  },
  surfside: {
    slug: "surfside",
    name: "Surfside",
    metaTitle: "ARX Training & Red Light Therapy Surfside | Uplifted Studio",
    metaDescription:
      "Red light therapy Surfside, ARX training Surfside, personal training Surfside. Uplifted studio at Upper Buena Vista—short drive from Surfside. Book ARX, red light, Shiftwave.",
    isStub: false,
    address: STUDIO_ADDRESS,
    mapUrl: MAP_URL,
    bookUrl: BOOK_URL,
    intro: `Surfside values community, beach, an active lifestyle—quiet streets, ocean access, people who take fitness and recovery seriously. Surfside doesn't have in-studio ARX and red light under one roof. We do. 5026 NE 2nd Ave #303, twenty to thirty minutes depending on the causeway. Many of our clients drive in for ARX, red light, Shiftwave, and the supplements we use. Causeway to our door in under thirty minutes.`,
    serviceArea: `We're in Upper Buena Vista; Surfside is a core part of who we serve. Surfside clients cross the causeway for ARX, red light, Shiftwave, and supplements—before or after work, or a weekend block. Causeway puts you here in twenty to thirty minutes; many combine a session with mainland errands or a coffee. We're the only studio in Miami-Dade with ARX and Shiftwave together. We also serve Key Biscayne, Coconut Grove, Coral Gables, Pinecrest, Miami Beach. Supplements in-studio and online.`,
    drivingDirections: [
      {
        from: "Surfside (via Broad Causeway)",
        directions:
          "Take the Broad Causeway (or 79th St Causeway) west to the mainland. Merge onto Biscayne Blvd (US-1) south; Upper Buena Vista is on your right. Turn right onto NE 2nd Ave; the studio is at 5026 NE 2nd Ave #303. Allow 20–30 minutes depending on traffic.",
      },
      {
        from: "Surfside (via Julia Tuttle Causeway)",
        directions:
          "Head south to the Julia Tuttle Causeway (I-195), cross west to the mainland. Take NE 2nd Ave south; 5026 NE 2nd Ave #303 is in Upper Buena Vista. Alternatively, merge onto Biscayne Blvd (US-1) north, then left onto NE 2nd Ave. Typically 25–35 minutes.",
      },
      {
        from: "Miami Beach",
        directions:
          "Cross the Venetian or Julia Tuttle Causeway to the mainland. From the Julia Tuttle, take NE 2nd Ave south; 5026 NE 2nd Ave #303 is in Upper Buena Vista. From the Venetian, head west to Biscayne Blvd, then north to NE 2nd Ave. Typically 20–30 minutes.",
      },
      {
        from: "Key Biscayne",
        directions:
          "Take the Rickenbacker Causeway west to the mainland, then north on Biscayne Blvd (US-1). Upper Buena Vista is on your left; turn left onto NE 2nd Ave. The studio is at 5026 NE 2nd Ave #303. Usually 25–35 minutes.",
      },
      {
        from: "Coconut Grove",
        directions:
          "Take US-1 (South Dixie Hwy) north or Le Jeune Rd north to the Design District area, then east to NE 2nd Ave. Alternatively, take I-95 north to the 79th St exit, then south on NE 2nd Ave. The studio is in Upper Buena Vista; allow 15–25 minutes.",
      },
      {
        from: "Miami International Airport (MIA)",
        directions:
          "Take the Airport Expressway (SR 112) east to I-95 north, then exit at 79th St or take NE 2nd Ave north. Alternatively, take Le Jeune Rd north and then east to NE 2nd Ave. Allow 25–40 minutes with traffic.",
      },
    ],
    neighborhoodContent: `Surfside has its own identity—quiet streets, beach access, people who expect quality in how they move and recover. No ARX and red light under one roof in town. Our Surfside clients cross the causeway for the full setup. Upper Buena Vista is a walkable pocket between Design District and Little Haiti—cafes, restaurants, easy parking. Second floor, clear signage. In and out in under an hour for a full ARX session plus red light, or red light only. Here it's ARX first, red light and Shiftwave for recovery, and the supplements we use and recommend.`,
    responseTimes: `We reply within 24 hours, usually same day. Book online for the fastest slot; same-day and next-day often open, especially for red light. ARX and Shiftwave by appointment—book at least a day ahead for weekends. From Surfside you're 20–30 minutes depending on the causeway; put your preferred time in the notes. New clients get a short run-through so you're set from the first visit.`,
    stubParagraph: undefined,
  },
  "bay-point": {
    slug: "bay-point",
    name: "Bay Point",
    metaTitle: "ARX Training & Red Light Therapy Bay Point | Uplifted Studio",
    metaDescription:
      "ARX Bay Point, red light therapy Bay Point, personal training Bay Point. Uplifted studio at Upper Buena Vista—minutes from Bay Point. Book ARX, red light, Shiftwave.",
    isStub: false,
    address: STUDIO_ADDRESS,
    mapUrl: MAP_URL,
    bookUrl: BOOK_URL,
    intro: `Bay Point values waterfront living, quiet streets, people who take fitness and recovery seriously. Bay Point doesn't have in-studio ARX and red light under one roof. We do. 5026 NE 2nd Ave #303, just minutes south on NE 2nd Ave and Biscayne Blvd. Many of our clients drive in for ARX, red light, Shiftwave, and the supplements we use. Short drive.`,
    serviceArea: `We're in Upper Buena Vista; Bay Point is a core part of who we serve. Bay Point clients drive in for ARX, red light, Shiftwave, and supplements—before or after work, or a weekend block. NE 2nd Ave and Biscayne Blvd put you here in under fifteen minutes; many combine a session with a coffee or Design District errands. We're the only studio in Miami-Dade with ARX and Shiftwave together. We also serve Morningside, Miami Shores, Key Biscayne, Coconut Grove, Coral Gables, Pinecrest, Miami Beach, Surfside. Supplements in-studio and online.`,
    drivingDirections: [
      {
        from: "Bay Point (NE 2nd Ave / Bayshore)",
        directions:
          "Head south on NE 2nd Ave (or Bayshore Dr) toward Upper Buena Vista. The studio is at 5026 NE 2nd Ave #303, on the second floor with clear signage. Allow 5–15 minutes depending on where you start in Bay Point.",
      },
      {
        from: "Bay Point (Biscayne Blvd)",
        directions:
          "Head south on Biscayne Blvd (US-1). Turn right onto NE 2nd Ave; the studio is at 5026 NE 2nd Ave #303 in Upper Buena Vista. Typically 10–15 minutes.",
      },
      {
        from: "Morningside",
        directions:
          "Head south on NE 2nd Ave or Biscayne Blvd toward Upper Buena Vista. The studio is at 5026 NE 2nd Ave #303. Allow 5–10 minutes.",
      },
      {
        from: "Miami Shores",
        directions:
          "Take NE 2nd Ave or Biscayne Blvd south toward Miami. Upper Buena Vista is on your left; the studio is at 5026 NE 2nd Ave #303. Plan for about 15–20 minutes.",
      },
      {
        from: "Miami Beach",
        directions:
          "Cross the Venetian or Julia Tuttle Causeway to the mainland. From the Julia Tuttle, take NE 2nd Ave south; 5026 NE 2nd Ave #303 is in Upper Buena Vista. From the Venetian, head west to Biscayne Blvd, then north to NE 2nd Ave. Typically 20–30 minutes.",
      },
      {
        from: "Miami International Airport (MIA)",
        directions:
          "Take the Airport Expressway (SR 112) east to I-95 north, then exit at 79th St or take NE 2nd Ave north. Alternatively, take Le Jeune Rd north and then east to NE 2nd Ave. Allow 25–40 minutes with traffic.",
      },
    ],
    neighborhoodContent: `Bay Point sits on the Upper East Side—waterfront, quiet, people who expect quality in how they move and recover. No ARX and red light under one roof in the neighborhood. Our Bay Point clients drive ten minutes for the full setup. Upper Buena Vista is a walkable pocket between Design District and Little Haiti—cafes, restaurants, easy parking. Second floor, clear signage. In and out in under an hour for a full ARX session plus red light, or red light only. Here it's ARX first, red light and Shiftwave for recovery, and the supplements we use and recommend.`,
    responseTimes: `We reply within 24 hours, usually same day. Book online for the fastest slot; same-day and next-day often open, especially for red light. ARX and Shiftwave by appointment—book at least a day ahead for weekends. From Bay Point you're 5–15 minutes; put your preferred time in the notes. New clients get a short run-through so you're set from the first visit.`,
    stubParagraph: undefined,
  },
  morningside: {
    slug: "morningside",
    name: "Morningside",
    metaTitle: "ARX Training & Red Light Therapy Morningside | Uplifted Studio",
    metaDescription:
      "ARX Morningside, red light therapy Morningside, personal training Morningside. Uplifted studio at Upper Buena Vista—minutes from Morningside. Book ARX, red light, Shiftwave.",
    isStub: false,
    address: STUDIO_ADDRESS,
    mapUrl: MAP_URL,
    bookUrl: BOOK_URL,
    intro: `Morningside values historic character, tree-lined streets, people who take fitness and recovery seriously. Morningside doesn't have in-studio ARX and red light under one roof. We do. 5026 NE 2nd Ave #303, just minutes south on NE 2nd Ave and Biscayne Blvd. Many of our clients drive in for ARX, red light, Shiftwave, and the supplements we use. Short drive.`,
    serviceArea: `We're in Upper Buena Vista; Morningside is a core part of who we serve. Morningside clients drive in for ARX, red light, Shiftwave, and supplements—before or after work, or a weekend block. NE 2nd Ave and Biscayne Blvd put you here in under fifteen minutes; many combine a session with a coffee or Design District errands. We're the only studio in Miami-Dade with ARX and Shiftwave together. We also serve Bay Point, Miami Shores, Key Biscayne, Coconut Grove, Coral Gables, Pinecrest, Miami Beach, Surfside. Supplements in-studio and online.`,
    drivingDirections: [
      {
        from: "Morningside (NE 2nd Ave / Bayshore)",
        directions:
          "Head south on NE 2nd Ave (or Bayshore Dr) toward Upper Buena Vista. The studio is at 5026 NE 2nd Ave #303, on the second floor with clear signage. Allow 5–10 minutes depending on where you start in Morningside.",
      },
      {
        from: "Morningside (Biscayne Blvd)",
        directions:
          "Head south on Biscayne Blvd (US-1). Turn right onto NE 2nd Ave; the studio is at 5026 NE 2nd Ave #303 in Upper Buena Vista. Typically 5–15 minutes.",
      },
      {
        from: "Bay Point",
        directions:
          "Head south on NE 2nd Ave or Biscayne Blvd toward Upper Buena Vista. The studio is at 5026 NE 2nd Ave #303. Allow 5–15 minutes.",
      },
      {
        from: "Miami Shores",
        directions:
          "Take NE 2nd Ave or Biscayne Blvd south toward Miami. Upper Buena Vista is on your left; the studio is at 5026 NE 2nd Ave #303. Plan for about 15–20 minutes.",
      },
      {
        from: "Coconut Grove",
        directions:
          "Take US-1 (South Dixie Hwy) north or Le Jeune Rd north to the Design District area, then east to NE 2nd Ave. Alternatively, take I-95 north to the 79th St exit, then south on NE 2nd Ave. The studio is in Upper Buena Vista; allow 15–25 minutes.",
      },
      {
        from: "Miami International Airport (MIA)",
        directions:
          "Take the Airport Expressway (SR 112) east to I-95 north, then exit at 79th St or take NE 2nd Ave north. Alternatively, take Le Jeune Rd north and then east to NE 2nd Ave. Allow 25–40 minutes with traffic.",
      },
    ],
    neighborhoodContent: `Morningside sits on the Upper East Side—historic homes, tree-lined streets, people who expect quality in how they move and recover. No ARX and red light under one roof in the neighborhood. Our Morningside clients drive five minutes for the full setup. Upper Buena Vista is a walkable pocket between Design District and Little Haiti—cafes, restaurants, easy parking. Second floor, clear signage. In and out in under an hour for a full ARX session plus red light, or red light only. Here it's ARX first, red light and Shiftwave for recovery, and the supplements we use and recommend.`,
    responseTimes: `We reply within 24 hours, usually same day. Book online for the fastest slot; same-day and next-day often open, especially for red light. ARX and Shiftwave by appointment—book at least a day ahead for weekends. From Morningside you're 5–10 minutes; put your preferred time in the notes. New clients get a short run-through so you're set from the first visit.`,
    stubParagraph: undefined,
  },
  "miami-shores": {
    slug: "miami-shores",
    name: "Miami Shores",
    metaTitle: "ARX Training & Red Light Therapy Miami Shores | Uplifted Studio",
    metaDescription:
      "ARX Miami Shores, red light therapy Miami Shores, personal training Miami Shores. Uplifted studio at Upper Buena Vista—short drive from Miami Shores. Book ARX, red light, Shiftwave.",
    isStub: false,
    address: STUDIO_ADDRESS,
    mapUrl: MAP_URL,
    bookUrl: BOOK_URL,
    intro: `Miami Shores values community, parks, an active lifestyle—tree-lined boulevards, quiet streets, people who take fitness and recovery seriously. Miami Shores doesn't have in-studio ARX and red light under one roof. We do. 5026 NE 2nd Ave #303, fifteen to twenty minutes south on NE 2nd Ave and Biscayne Blvd. Many of our clients drive in for ARX, red light, Shiftwave, and the supplements we use. Short drive.`,
    serviceArea: `We're in Upper Buena Vista; Miami Shores is a core part of who we serve. Miami Shores clients drive in for ARX, red light, Shiftwave, and supplements—before or after work, or a weekend block. NE 2nd Ave and Biscayne Blvd put you here in fifteen to twenty minutes; many combine a session with a coffee or Design District errands. We're the only studio in Miami-Dade with ARX and Shiftwave together. We also serve Morningside, Bay Point, Key Biscayne, Coconut Grove, Coral Gables, Pinecrest, Miami Beach, Surfside. Supplements in-studio and online.`,
    drivingDirections: [
      {
        from: "Miami Shores (NE 2nd Ave)",
        directions:
          "Head south on NE 2nd Ave toward Upper Buena Vista. The studio is at 5026 NE 2nd Ave #303, on the second floor with clear signage. Allow 15–20 minutes depending on where you start in Miami Shores.",
      },
      {
        from: "Miami Shores (Biscayne Blvd)",
        directions:
          "Head south on Biscayne Blvd (US-1). Turn right onto NE 2nd Ave; the studio is at 5026 NE 2nd Ave #303 in Upper Buena Vista. Typically 15–25 minutes.",
      },
      {
        from: "Morningside",
        directions:
          "Head south on NE 2nd Ave or Biscayne Blvd toward Upper Buena Vista. The studio is at 5026 NE 2nd Ave #303. Allow 5–10 minutes.",
      },
      {
        from: "Bay Point",
        directions:
          "Head south on NE 2nd Ave or Biscayne Blvd toward Upper Buena Vista. The studio is at 5026 NE 2nd Ave #303. Allow 5–15 minutes.",
      },
      {
        from: "Coconut Grove",
        directions:
          "Take US-1 (South Dixie Hwy) north or Le Jeune Rd north to the Design District area, then east to NE 2nd Ave. Alternatively, take I-95 north to the 79th St exit, then south on NE 2nd Ave. The studio is in Upper Buena Vista; allow 15–25 minutes.",
      },
      {
        from: "Miami International Airport (MIA)",
        directions:
          "Take the Airport Expressway (SR 112) east to I-95 north, then exit at 79th St or take NE 2nd Ave north. Alternatively, take Le Jeune Rd north and then east to NE 2nd Ave. Allow 25–40 minutes with traffic.",
      },
    ],
    neighborhoodContent: `Miami Shores has its own identity—tree-lined boulevards, parks, people who expect quality in how they move and recover. No ARX and red light under one roof in the village. Our Miami Shores clients drive fifteen minutes for the full setup. Upper Buena Vista is a walkable pocket between Design District and Little Haiti—cafes, restaurants, easy parking. Second floor, clear signage. In and out in under an hour for a full ARX session plus red light, or red light only. Here it's ARX first, red light and Shiftwave for recovery, and the supplements we use and recommend.`,
    responseTimes: `We reply within 24 hours, usually same day. Book online for the fastest slot; same-day and next-day often open, especially for red light. ARX and Shiftwave by appointment—book at least a day ahead for weekends. From Miami Shores you're 15–20 minutes; put your preferred time in the notes. New clients get a short run-through so you're set from the first visit.`,
    stubParagraph: undefined,
  },
};

export function getLocationBySlug(slug: string): LocationContent | undefined {
  if (LOCATION_SLUGS.includes(slug as LocationSlug)) {
    return LOCATIONS[slug as LocationSlug];
  }
  return undefined;
}
