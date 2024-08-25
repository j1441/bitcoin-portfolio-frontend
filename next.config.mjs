// @type {import('next').NextConfig}
const nextConfig = {
    // Enable React strict mode
    reactStrictMode: true,
  
    // Set environment variables
    env: {
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://numerisgroup.xyz',
    },
  
    // Enable support for TypeScript (optional if using TypeScript)
    typescript: {
      ignoreBuildErrors: false, // You can set this to true if you want to bypass TypeScript errors during build
    },
  };
  
  export default nextConfig;
  