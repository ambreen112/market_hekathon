/** @type {import('next').NextConfig} */
const nextConfig = {
 
  images: {
   
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '**', // This ensures all paths under the domain are handled
      },
    ],
  },
};

export default nextConfig;
