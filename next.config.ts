import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  allowedDevOrigins: [
    "*.lhr.life",
    "*.loca.lt",
    "*.ngrok-free.app",
    "*.pinggy.link",
    "*.trycloudflare.com",
    "localhost:3000",
  ],
};

export default nextConfig;
