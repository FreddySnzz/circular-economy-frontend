import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  staticPageGenerationTimeout: 300,
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default nextConfig;
