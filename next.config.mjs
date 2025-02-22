/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    unoptimized: true, // Enable unoptimized images
  },
  env: {
    NEXT_PUBLIC_API_SERVER: process.env.NEXT_PUBLIC_API_SERVER, // Expose the API server environment variable
  },
};

export default nextConfig;
