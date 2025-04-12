import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/projects/:projectName",
        destination: "/projects/:projectName/index.html",
      },
    ];
  },
};

export default nextConfig;
