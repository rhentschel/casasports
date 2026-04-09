import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

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

export default withPayload(nextConfig);
