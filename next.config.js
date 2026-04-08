/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "i.ibb.co",
      "avatars.githubusercontent.com",
    ],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || "https://api.vinted-web.com",
    NEXT_PUBLIC_OTHER_VAR: process.env.NEXT_PUBLIC_OTHER_VAR || "",
  },
  compiler: {
    styledComponents: true,
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
