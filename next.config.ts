import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  staticPageGenerationTimeout: 300
};

export default nextConfig;
