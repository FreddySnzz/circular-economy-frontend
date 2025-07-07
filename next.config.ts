import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  staticPageGenerationTimeout: 300,
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    remotePatterns: [new URL('https://cdn-icons-png.flaticon.com/**')],
  },
};

export default nextConfig;
