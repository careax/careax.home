import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/careax",
  assetPrefix: "/careax/",
  trailingSlash: true,
};

export default nextConfig;
