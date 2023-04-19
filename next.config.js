/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // output: "export",
  images: {
    domains: ["images.unsplash.com", "unsplash.com"],
  },
};

module.exports = nextConfig;
