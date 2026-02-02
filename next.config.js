/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/van-vs-center", destination: "/services", permanent: true },
      { source: "/sw", destination: "/forms/sw", permanent: true },
      { source: "/el", destination: "/forms/el", permanent: true },
      { source: "/waitlist-page-5301-4993", destination: "/forms/booking", permanent: true },
      { source: "/forms", destination: "/", permanent: true },
    ];
  },
};

module.exports = nextConfig;
