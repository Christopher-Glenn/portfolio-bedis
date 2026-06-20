import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 768, 1024, 1280],
  },
  experimental: {
    optimizePackageImports: ['react-icons', '@heroicons/react', 'framer-motion'],
  },
};

export default withBundleAnalyzer(nextConfig);