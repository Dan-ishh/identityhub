const nextConfig = {
  reactStrictMode: true, // Enforces React's strict mode in development
  swcMinify: true, // Enables the SWC compiler for faster builds
  images: {
    domains: ['example.com', 'anotherdomain.com'], // Allow external images from these domains
    formats: ['image/avif', 'image/webp'], // Enable modern image formats for optimization
  },
  experimental: {
    appDir: true, // Enables the experimental app directory (Next.js 13+ feature)
  },
  i18n: {
    locales: ['en', 'fr', 'es'], // Supported languages
    defaultLocale: 'en', // Default language
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false, // Exclude server-side modules in the client bundle
      };
    }
    return config;
  },
};

export default nextConfig;
