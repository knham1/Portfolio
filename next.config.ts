import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // HypeMe's Expo web export lives in public/hypeme as one .html file per route.
  // Real files (JS, CSS, fonts) are served first; these map clean URLs onto the pages.
  async rewrites() {
    return [
      { source: "/hypeme", destination: "/hypeme/index.html" },
      { source: "/hypeme/:page", destination: "/hypeme/:page.html" },
    ];
  },
};

export default nextConfig;
