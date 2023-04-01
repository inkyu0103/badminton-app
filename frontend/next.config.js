/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ignoreDuringBuilds: true,
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
