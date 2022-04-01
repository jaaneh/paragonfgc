/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/8HQvcMzXup",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/ParagonFGC",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
