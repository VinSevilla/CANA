import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dev server only: lets a phone on the local network load dev assets
  // (HMR, chunks) from this machine's LAN IP. Hostname only, no port.
  // Update if the machine's IP changes; has no effect on production.
  allowedDevOrigins: ["192.168.1.130"],
  experimental: {
    agentFeedback: false,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
