import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Performance optimizations
  experimental: {
    optimizeCss: false, // Disabled due to critters module issue
    optimizePackageImports: ['framer-motion', 'lucide-react', '@radix-ui/react-slot'],
    // LCP optimizations
    optimizeServerReact: true,
  },
  
  // Server external packages (moved from experimental)
  // Note: framer-motion is client-side only, so we don't externalize it
  
  // Turbopack configuration (replaces experimental.turbo)
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Compression
  compress: true,

  // Ultra-aggressive webpack optimizations for main-thread work
  webpack: (config, { isServer, dev }) => {
    // Ultra-aggressive optimization for production
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          minSize: 10000, // Smaller minimum size
          maxSize: 50000, // Much smaller chunks
          cacheGroups: {
            // Core React chunks - critical
            react: {
              test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
              name: 'react',
              chunks: 'all',
              priority: 40,
              maxSize: 30000,
            },
            // Next.js chunks - critical
            nextjs: {
              test: /[\\/]node_modules[\\/]next[\\/]/,
              name: 'nextjs',
              chunks: 'all',
              priority: 35,
              maxSize: 25000,
            },
            // Framer Motion - lazy loaded
            framerMotion: {
              test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
              name: 'framer-motion',
              chunks: 'async',
              priority: 20,
              maxSize: 20000,
            },
            // Radix UI - lazy loaded
            radixUI: {
              test: /[\\/]node_modules[\\/]@radix-ui[\\/]/,
              name: 'radix-ui',
              chunks: 'async',
              priority: 20,
              maxSize: 15000,
            },
            // Lucide icons - lazy loaded
            lucide: {
              test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
              name: 'lucide',
              chunks: 'async',
              priority: 20,
              maxSize: 10000,
            },
            // Other vendors - smaller chunks
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
              priority: 10,
              maxSize: 25000,
            },
          },
        },
        usedExports: true,
        sideEffects: false,
        minimize: true,
        concatenateModules: true,
        // Additional optimizations
        providedExports: true,
        innerGraph: true,
        mangleExports: true,
      };

      // Enhanced tree shaking and aliases
      config.resolve.alias = {
        ...config.resolve.alias,
      };

      // Additional optimizations
      config.optimization.moduleIds = 'deterministic';
      config.optimization.chunkIds = 'deterministic';
    }

    // Reduce bundle size aggressively
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
        stream: false,
        util: false,
        url: false,
        assert: false,
        http: false,
        https: false,
        os: false,
        buffer: false,
        zlib: false,
        path: false,
      };
    }

    return config;
  },

  // Headers for better caching
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Redirects to handle favicon properly - DEFINITIVE FIX
  async redirects() {
    return [
      {
        source: '/favicon.ico',
        destination: '/api/favicon',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
