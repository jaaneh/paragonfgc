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
      {
        source: "/assets",
        destination: "https://paragonfgc.s3.eu-west-2.amazonaws.com/paragonfgc_media_assets.zip",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
