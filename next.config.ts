import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    runtime: 'nodejs',
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    return config;
  },
};

export default nextConfig
