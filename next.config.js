/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/van-vs-center", destination: "/services", permanent: true },
    ];
  },
};

module.exports = nextConfig;
