import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "supabase.naim-obeid.de",
      },
      {
        protocol: "https",
        hostname: "casasports.de",
      },
    ],
  },
};

export default nextConfig;
