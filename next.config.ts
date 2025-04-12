import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/project/gameoflife",
        destination: "https://canvas-gameoflife.vercel.app/",
      },
    ];
  },
};

export default nextConfig;
