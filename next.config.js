/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        formats: ['image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
    // basePath removed for SEO-friendly URLs in production
    // If deploying to subdirectory, configure server redirect instead
    trailingSlash: true,
    // Performance optimizations
    compress: true,
    poweredByHeader: false,
    generateEtags: true,
    // Compiler optimizations
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    // Experimental features for better performance
    experimental: {
        optimizePackageImports: ['embla-carousel-react', 'embla-carousel-auto-scroll', 'embla-carousel-autoplay'],
    },
}

module.exports = nextConfig
