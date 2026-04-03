import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   async rewrites() {
    return [
      {
        source: "/artists",
        destination: "http://api:8080/artists",
      },
      {
        source: "/admin/:path*",
        destination: "http://api:8080/admin/:path*",
      },
    ]
  },
};

export default nextConfig;
