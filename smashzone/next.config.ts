import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // For GitHub Pages deployment - update this to your repo name
  basePath: process.env.NODE_ENV === "production" ? "/smashzone" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/smashzone" : "",
};

export default nextConfig;
