/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true
    },
    // Configure basePath for subdirectory deployment (only in production)
    basePath: isProd ? '/teste' : '',
    trailingSlash: true,
}

module.exports = nextConfig
