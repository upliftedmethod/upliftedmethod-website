/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    const pathRedirects = [
      { source: "/van-vs-center", destination: "/services", permanent: true },
      { source: "/sw", destination: "/forms/sw", permanent: true },
      { source: "/el", destination: "/forms/el", permanent: true },
      { source: "/waitlist-page-5301-4993", destination: "/forms/booking", permanent: true },
      { source: "/forms", destination: "/", permanent: true },
    ];
    // www → non-www so one canonical domain (fixes GSC "Duplicate without user-selected canonical" + "Alternate page with proper canonical")
    const wwwRedirect = {
      source: "/:path*",
      has: [{ type: "host", value: "www.upliftedmethod.com" }],
      destination: "https://upliftedmethod.com/:path*",
      permanent: true,
    };
    return [wwwRedirect, ...pathRedirects];
  },
};

module.exports = nextConfig;
