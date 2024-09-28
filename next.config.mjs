/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'github.com',
      
    },
    {
      protocol: 'https',
      hostname: 'firebasestorage.googleapis.com',
      
    }
  ]
  }
};

export default nextConfig;
