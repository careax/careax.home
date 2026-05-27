import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/careax.home",
  assetPrefix: "/careax.home/",
  trailingSlash: true,
};

export default nextConfig;
