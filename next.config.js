/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true
  },
  async rewrites() {
    return [{
      source: '/api/predict',
      destination: 'https://api-animal-classification.vinss.my.id/predict',
    }];
  },
};

module.exports = nextConfig;