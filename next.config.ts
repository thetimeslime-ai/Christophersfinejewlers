import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Retired duplicate of the homepage.
      { source: "/site.html", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
