/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { 
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/fedor-chervinskii.github.io' : '',
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;