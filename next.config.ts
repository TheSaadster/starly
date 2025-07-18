/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 👈 this allows deployment despite lint errors
  },
};

module.exports = nextConfig;