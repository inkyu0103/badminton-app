/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      "i.ytimg.com",
      "staging-mobae-image.s3.ap-northeast-2.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
