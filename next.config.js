/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // build plus rapide et optimisé
  images: {
    domains: [
      "res.cloudinary.com", // pour tes images Cloudinary
      "i.ibb.co",           // pour images hébergées sur i.ibb.co
      "avatars.githubusercontent.com" // si tu utilises avatars GitHub
    ],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || "https://api.vinted-web.com",
    NEXT_PUBLIC_OTHER_VAR: process.env.NEXT_PUBLIC_OTHER_VAR || "",
  },
  compiler: {
    styledComponents: true, // si tu utilises styled-components
  },
  experimental: {
    appDir: true, // si tu utilises le nouveau dossier /app de Next.js 13+
  },
};

module.exports = nextConfig;
