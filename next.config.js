/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { 
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      },
      {
        protocol: 'https',
        hostname: 'api.iconify.design',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default nextConfig;