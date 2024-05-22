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


  async rewrites() {
    return [
      {
        source: '/programs',
        destination: '/Applications/programs',
      },
      {
        source: '/news',
        destination: '/Applications/news',
      },
      {
        source: '/news/:id',
        destination: '/Applications/news/[id]',
      },
      {
        source: '/contact-us',
        destination: '/Applications/contactUs',
      },
      {
        source: '/education-details',
        destination: '/Applications/educationDetails',
      },
      {
        source: '/education',
        destination: '/Applications/educations',
      },
      {
        source: '/education/:id',
        destination: '/Applications/educations/[id]',
      },
      {
        source: '/programs/:id',
        destination: '/Applications/programs/[id]',
      },
      {
        source: '/packages',
        destination: '/Applications/packages',
      },
      {
        source: '/hackathon',
        destination: '/Applications/hackathone',
      },
      {
        source: '/reverse-pitch',
        destination: '/Applications/reversePitch',
      },
      {
        source: '/payment',
        destination:'/Applications/paymentForm'
      },
      {
        source:'/payment-summary',
        destination:'/Applications/paymentSummary'
      },
      {
        source:'/profile',
        destination:'/Applications/profile'
      }

    ];
  },

};

export default nextConfig;

//
