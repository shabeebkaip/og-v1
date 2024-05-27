/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imagedelivery.net',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
      {
        protocol: 'https',
        hostname: 'travelmate.net',
      },
      {
        protocol: 'https',
        hostname: 'api-one-global.code-ox.com',
      },
      {
        protocol: 'http',
        hostname: 'api-one-global.code-ox.com',
      },
      
      
    ],
  },

};

export default nextConfig;

//
